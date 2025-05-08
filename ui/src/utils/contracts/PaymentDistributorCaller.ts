import { ethers } from "ethers";
import { getEthereumContractForConnectedUser } from "./helpers";
import { paymentDistributorContract } from "./ContractDefinition";

const tokenURI = "https://example.com/token/123"; // Replace with your actual token URI

/**
 * ContractCaller class for interacting with smart contracts.
 */
export class PaymentDistributorCaller {

	async pay(bookingNumber: number, amount: number): Promise<any> {
		try {
			console.log(`Adding ${amount} funds to contract`);
			const contract = await getEthereumContractForConnectedUser(paymentDistributorContract);
			const paymentDetails = [ // TODO: receive the amounts per supplier from the UI
				{
					vendor: "0x123abc...", // First vendor address
					amount: ethers.parseEther("0.1") // 0.1 ETH in wei
				}
			];

			// Call the pay method
			const tx = await contract.pay(
				paymentDetails,  // Array of payment details structs
				bookingNumber,         // tokenId parameter
				tokenURI,        // tokenURI parameter
				{
					value: ethers.parseEther(amount.toString())   // Send ETH with the transaction
				}
			);

			console.log("Transaction hash:", tx.hash);
			// Wait for transaction to be mined
			const receipt = await tx.wait();
			console.log("Transaction confirmed in block:", receipt.blockNumber);
		} catch (error) {
			console.error("Error doing payment to suppliers:", error);
			throw error;
		}
	}
}