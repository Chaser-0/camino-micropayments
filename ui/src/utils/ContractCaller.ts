import type { ContractDefinition } from "./ContractDefinition";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers/providers";
import { testMyContract } from "./constants";

const COLUMBUS_URL = import.meta.env.VITE_COLUMBUS_URL;

/**
 * ContractCaller class for interacting with smart contracts.
 */
export class ContractCaller {
	/**
	 * Adds funds to a contract.
	 * @param amount - The amount of funds to add
	 * @returns Promise with the transaction result
	 */
	async testMyContractAddFunds(amount: number): Promise<any> {
		try {
			console.log(`Adding ${amount} funds to contract`);
			const contract = await this.getEthereumContractForConnectedUser(testMyContract);
			const tx = await contract.addFunds({
        value: ethers.parseEther(amount.toString()) // Convert Ether to Wei
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
	async testMyContractGetBalance(): Promise<number> {
		try {
			const contract = await this.getEthereumContractForConnectedUser(testMyContract);
			const balance = (await contract.getBalance()).toString(); // Get balance in Wei
			console.log("TestMyContract balance:", balance);

			return parseFloat(ethers.formatEther(balance)); // Convert Wei to Ether
		} catch (error) {
			console.error("Error getting balance:", error);
			throw error;
		}
	}

	/**
	 * Gets an Ethereum contract instance.
	 * @param contractDefinition - The contract definition model with the address and abi of the contract to interact with
	 * @returns The contract instance
	 * @private
	 */
	private async getEthereumContractForConnectedUser(contractDefinition: ContractDefinition): Promise<any> {
		try {
			// Create a Web3Provider using the MetaMask provider
			const provider = new BrowserProvider(window.ethereum);

			// Get the signer from the provider (connected MetaMask account)
			const signer = await provider.getSigner();

			// Create contract instance with the signer
			const contract = new ethers.Contract(
				contractDefinition.Address,
				contractDefinition.Abi,
				signer
			);

			return contract;
		} catch (error) {
			console.error("Error creating contract instance:", error);
			throw error;
		}
	}

	/**
	 * Gets a read-only Ethereum contract instance. Since no private key is involved, only readonly operations are
	 *  allowed on the contract.
	 * @param contractDefinition - The contract definition model with the address and abi of the contract to interact with
	 * @returns The contract instance
	 * @private
	 */
	private async getReadOnlyEthereumContract(contractDefinition: ContractDefinition): Promise<any> {
		try {
			// Create a Web3Provider using the MetaMask provider
			const provider = new ethers.JsonRpcProvider(COLUMBUS_URL);

			// Create contract instance with the signer
			const contract = new ethers.Contract(
				contractDefinition.Address,
				contractDefinition.Abi,
				provider
			);

			return contract;
		} catch (error) {
			console.error("Error creating contract instance:", error);
			throw error;
		}
	}
}