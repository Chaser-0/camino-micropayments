// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./Micropayment.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/**
 * @dev Holds the vendor (either a PaymentDistributor or a SupplierEscrow) address and the amount to distribute
 */
struct paymentDetails{
    address vendor;
    uint256 amount; 
}

/**
 * @title PaymentDistributor
 * @dev Received the funds and sends them to the suppliers
 */
contract PaymentDistributor is ERC721URIStorage {
    address private owner; // The owner of this contract (deployer)

    /**
     * @dev Set contract deployer as owner
     */
    constructor() ERC721("Block Busters NFT", "NFT") {
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
    }

    /**
     * @dev Process a payment and distribute it to the vendors. The user is minted 
     * @param vendors the list of vendors to call the refund method on them and the amount to provide
     * @param tokenId id of the token (can be anything, just must not be minted before within your contract)
     * @param tokenURI a link to a json on some storage (you can set it to an arbitrary string, if you don't want to have)
     */
    function pay(paymentDetails[] memory vendors, uint256 tokenId, string memory tokenURI) external payable {
        require(msg.value != 0, "You must send some CAM.");
        require(vendors.length > 0, "Supplier array cannot be empty.");
        uint256 totalAmount;

        for(uint i=0; i<vendors.length; i++)
        {
            uint256 amount = vendors[i].amount;

            totalAmount += amount;
        }

        require(msg.value < totalAmount, "You cannot distribute more than received.");
        
        for(uint i=0; i<vendors.length; i++)
        {
            address vendor = vendors[i].vendor;
            uint256 amount = vendors[i].amount;
 
            // TODO: Extend this to allow not only to send money to an escrow contract,
            // but also to another distributor
            (bool success, ) = vendor.call{value: amount}("");
            require(success, "Transfer failed");
        }

        mint(msg.sender, tokenId, tokenURI);
    }

    /**
    * @dev Function mints tokens, can only be called by owner
    * @param to address the nft is going to be minted to
    * @param tokenId id of the token (can be anything, just must not be minted before within your contract)
    * @param tokenURI a link to a json on some storage (you can set it to an arbitrary string, if you don't want to have)
    */
    function mint(address to, uint256 tokenId, string memory tokenURI) private {
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    /**
     * @dev Retract the specific amount to the target address in order to issue a refund
     * @param to the address for the funds to be transfered
     * @param vendors the list of vendors to call the refund method on them and the amount to withdraw
     */
    function refund(address to, paymentDetails[] memory vendors) external isOwner payable {
        uint256 totalAmount;

        for(uint i=0; i<vendors.length; i++)
        {
            address vendor = vendors[i].vendor;
            uint256 amount = vendors[i].amount;
 
            totalAmount += amount;
            // TODO: Also extend this to not only handle escrow contracts
            Micropayment(vendor).refund(address(this), amount);
        }

        (bool success, ) = to.call{value: totalAmount}("");
        require(success, "Transfer failed");
    }

    /**
     * @dev Helper method to withdraw any funds in the contract
     * @param to the address for the funds to be transfered
     * @param amount to transfer in Wei 10^(-18)
     */
    function withdraw(address to, uint256 amount) external isOwner payable {
        (bool success, ) = to.call{value: amount}("");
        require(success, "Transfer failed");
    }

    // Modifier to check if caller is owner
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
} 

