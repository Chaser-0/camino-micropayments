import { ref } from 'vue'
import { defineStore } from 'pinia'
import { BrowserProvider } from 'ethers/providers';
import { ContractCaller } from '@/utils/ContractCaller';

export const useWalletStore = defineStore('wallet', () => {
  const connected = ref(false);
  const providers = ref<string[]>([]);
  const selectedProvider = ref('');

  const connectWallet = async () => {
    const provider = new BrowserProvider(window.ethereum)
    providers.value = await provider.send("eth_requestAccounts", []);
    selectedProvider.value = providers.value[0];

    connected.value = true;
  }

	const testMyContractGetBalance = async () => {
		const contractCaller = new ContractCaller();
		try {
			const balance = await contractCaller.testMyContractGetBalance();
			console.log("TestMyContract balance:", balance.toString());
			return balance;
		} catch (error) {
			console.error("Error getting balance:", error);
			throw error;
		}
	}

	const testMyContractAddFunds = async (amount: number) => {
		const contractCaller = new ContractCaller();
		try {
			await contractCaller.testMyContractAddFunds(amount);
		} catch (error) {
			console.error("Error getting balance:", error);
			throw error;
		}
	}

  return {
    connected,
    connectWallet,
		testMyContractGetBalance,
		testMyContractAddFunds,
    providers,
    selectedProvider
  }
});
