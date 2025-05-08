import { ethers } from "ethers";
import { getEthereumContractForConnectedUser } from "./helpers";
import { supplierEscrowContract } from "./ContractDefinition";

const tokenURI = "https://example.com/token/123"; // Replace with your actual token URI

/**
 * ContractCaller class for interacting with smart contracts.
 */
export class SupplierEscrowCaller {
// Needs to be called by the owner of the contract/tour operator
	public static async addAllowedAmount(supplierAccount: string, amount: number): Promise<any> {
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

	// Needs to be called by the owner of the contract/tour operator
	async setAllowedAmount(supplierAccount: string, amount: number): Promise<any> {
		try {
			console.log(`setAllowedAmount ${amount} to supplier ${supplierAccount}`);
			const contract = await getEthereumContractForConnectedUser(supplierEscrowContract);
			var totalEther = ethers.parseEther(amount.toString())

			// Call the pay method
			const tx = await contract.setAllowedAmount(supplierAccount, totalEther);

			console.log("Transaction hash:", tx.hash);
			// Wait for transaction to be mined
			const receipt = await tx.wait();
			console.log("Transaction confirmed in block:", receipt.blockNumber);
		} catch (error) {
			console.error("Error doing payment to suppliers:", error);
			throw error;
		}
	}

	// Needs to be called by the supplier to withdraw the funds
	async supplierWithdraw(): Promise<any> {
		try {
			console.log(`About to withdraw funds for a supplier`);
			const contract = await getEthereumContractForConnectedUser(supplierEscrowContract);

			const tx = await contract.withdraw();

			console.log("Transaction hash:", tx.hash);
			// Wait for transaction to be mined
			const receipt = await tx.wait();
			console.log("Transaction confirmed in block:", receipt.blockNumber);
		} catch (error) {
			console.error("Error doing funds withdraw for supplier:", error);
			throw error;
		}
	}

	// Needs to be called by the supplier to withdraw the funds
	async checkSupplierBalance(): Promise<any> {
		try {
			console.log(`Checking supplier balance`);
			const contract = await getEthereumContractForConnectedUser(supplierEscrowContract);

			const balance = (await contract.checkBalance()).toString(); // Get balance in Wei
			console.log("TestMyContract balance:", balance);

			return parseFloat(ethers.formatEther(balance)); // Convert Wei to Ether
		} catch (error) {
			console.error("Error getting balance:", error);
			throw error;
		}
	}
}