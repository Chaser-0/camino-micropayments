// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./Micropayment.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title SupplierEscrow
 * @dev A contract to act as an escrow for supplier funds and allow them to withdraw specific amounts
 */
contract SupplierEscrow is Micropayment, Ownable {
    mapping(address => uint256) private supplierBalances; // A mapping of: address to allowed amount, for withdrawal
    uint256 private allowedAmountAcrossSuppliers; // The sum of allowed amount across all suppliers

    /**
     * @dev Set contract deployer as owner
     */
    constructor() Ownable(msg.sender) {
    }

    /**
     * @dev Get the balance of the contract
     * @return the balance in Wei 10^(-18)
     */
    function getBalance() public onlyOwner view returns (uint256) {
        return address(this).balance;
    }

    /**
     * @dev Get the allowed amount across all suppliers
     * @return the amount in Wei 10^(-18)
     */
    function getAllowedAmountAcrossSuppliers() public onlyOwner view returns (uint256) {
        return allowedAmountAcrossSuppliers;
    }

    /**
     * @dev For the Supplier to view his/her balance
     * @return the amount in Wei 10^(-18)
     */
    function checkBalance() public view returns (uint256) {
        return supplierBalances[msg.sender];
    }

    /**
     * @dev Store value as allowed amount for supplier
     * @param supplier the wallet address
     * @param amount to set as allowed in Wei 10^(-18)
     */
    function setAllowedAmount(address supplier, uint256 amount) public onlyOwner {
        uint256 existingAmount = supplierBalances[supplier];

        supplierBalances[supplier] = amount;
        allowedAmountAcrossSuppliers = allowedAmountAcrossSuppliers - existingAmount + amount;
    }

    /**
     * @dev Add an amount the the existing allowed amount for the supplier
     * @param supplier the wallet address
     * @param amount to add as allowed in Wei 10^(-18)
     */
    function addAllowedAmount(address supplier, uint256 amount) public onlyOwner {
        uint256 existingAmount = supplierBalances[supplier];

        supplierBalances[supplier] = existingAmount + amount;
        allowedAmountAcrossSuppliers = allowedAmountAcrossSuppliers + amount;
    }

    /**
     * @dev For the Supplier to withdraw his/her balance
     */
    function withdraw() public payable {
        uint256 amount = supplierBalances[msg.sender];
        require(amount > 0, "No funds to withdraw");

        // Check contract has enough balance
        require(getBalance() > amount, "Contract has insufficient funds");

        // Reset balance before transfer to prevent reentrancy
        supplierBalances[msg.sender] = 0;
        allowedAmountAcrossSuppliers = allowedAmountAcrossSuppliers - amount;

        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }

    // For receiving native currency (ie ETH)
    receive() external payable {}
    // TODO: Shall we limit this with onlyOwner???

    /**
     * @dev Retract the specific amount to the target address in order to issue a refund
     * @param to the address for the funds to be transfered
     * @param amount to transfer in Wei 10^(-18)
     */
    function refund(address to, uint256 amount) external onlyOwner payable {
        // TODO: When removing funds you will need to update the allowed amount for one or more
        // suppliers (and also the total allowed amount of the escrow service)
        (bool success, ) = to.call{value: amount}("");
        require(success, "Transfer failed");
    }

    function transferOwnership(address newOwner) public override onlyOwner {
        _transferOwnership(newOwner);
    }
} 

