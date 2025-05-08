import { testMyContract } from "./ContractDefinition";
import { ethers } from "ethers";
import { getEthereumContractForConnectedUser } from "./helpers";

/**
 * ContractCaller class for interacting with smart contracts.
 */
export class TestMyContractCaller {
	/**
	 * Adds funds to a contract.
	 * @param amount - The amount of funds to add
	 * @returns Promise with the transaction result
	 */
	async addFunds(amount: number): Promise<any> {
		try {
			console.log(`Adding ${amount} funds to contract`);
			const contract = await getEthereumContractForConnectedUser(testMyContract);
			var totalAmount = ethers.parseEther(amount.toString())
			const tx = await contract.addFunds(
				totalAmount,
				{
					value: totalAmount // Convert Ether to Wei
				});

			console.log("Transaction hash:", tx.hash);
			// Wait for transaction to be mined
			const receipt = await tx.wait();
			console.log("Transaction confirmed in block:", receipt.blockNumber);
		} catch (error) {
			console.error("Error adding funds:", error);
			throw error;
		}
	}

	/**
	 * Gets the current balance from the contract.
	 * @returns Promise with the balance amount
	 */
	async getBalance(): Promise<number> {
		try {
			const contract = await getEthereumContractForConnectedUser(testMyContract);
			const balance = (await contract.getBalance()).toString(); // Get balance in Wei
			console.log("TestMyContract balance:", balance);

			return parseFloat(ethers.formatEther(balance)); // Convert Wei to Ether
		} catch (error) {
			console.error("Error getting balance:", error);
			throw error;
		}
	}
}
