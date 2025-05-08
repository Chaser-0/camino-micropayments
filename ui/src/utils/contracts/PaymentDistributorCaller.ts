import { ethers } from "ethers";
import { getEthereumContractForConnectedUser } from "./helpers";
import { paymentDistributorContract, supplierEscrowContract } from "./ContractDefinition";

const tokenURI = "https://example.com/token/123"; // Replace with your actual token URI

/**
 * ContractCaller class for interacting with smart contracts.
 */
export class PaymentDistributorCaller {

	async pay(bookingNumber: number, totalAmount: number, amountsBySupplier: Record<number, number>): Promise<any> {
		try {
			console.log(`Adding ${totalAmount} funds to contract for booking ${bookingNumber}`, amountsBySupplier);
			const contract = await getEthereumContractForConnectedUser(paymentDistributorContract);
			var totalEther = ethers.parseEther(totalAmount.toString())
			const supplierAmounts = [{
				vendor: supplierEscrowContract.Address,
				amount: totalEther
			}];
			console.log("Payment details:", supplierAmounts);
			// Call the pay method
			const tx = await contract.pay(
				supplierAmounts,  // Array of payment details structs
				bookingNumber,         // tokenId parameter
				tokenURI,        // tokenURI parameter
				{
					value: totalEther
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