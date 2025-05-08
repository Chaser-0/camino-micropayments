import { ethers } from "ethers";
import { BrowserProvider } from "ethers/providers";
import type { ContractDefinition } from "./ContractDefinition";

const COLUMBUS_URL = import.meta.env.VITE_COLUMBUS_URL;

/**
 * Gets an Ethereum contract instance.
 * @param contractDefinition - The contract definition model with the address and abi of the contract to interact with
 * @returns The contract instance
 * @private
 */
export const getEthereumContractForConnectedUser = async (contractDefinition: ContractDefinition): Promise<any> => {
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
export const getReadOnlyEthereumContract = async (contractDefinition: ContractDefinition): Promise<any> => {
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
