import { ethers } from "ethers";
import { getEthereumContractForConnectedUser } from "./helpers";
import { supplierEscrowContract } from "./ContractDefinition";

const tokenURI = "https://example.com/token/123"; // Replace with your actual token URI

/**
 * ContractCaller class for interacting with smart contracts.
 */
export class SupplierEscrowCaller {

	async addAllowedAmount(supplierAccount: string, amount: number): Promise<any> {
		try {
			console.log(`addAllowedAmount ${amount} to supplier ${supplierAccount}`);
			const contract = await getEthereumContractForConnectedUser(supplierEscrowContract);
			var totalEther = ethers.parseEther(amount.toString())
			
			// Call the pay method
			const tx = await contract.addAllowedAmount(supplierAccount, totalEther);

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