import { ref } from 'vue'
import { defineStore } from 'pinia'
import { BrowserProvider } from 'ethers/providers';
import { ContractCaller } from '@/utils/ContractCaller';

export const useWalletStore = defineStore('wallet', () => {
  const connected = ref(false);
  const providers = ref<string[]>([]);
  const selectedProvider = ref('');

	// TODO @mihai replace dummy data with actual contract data
	const receivers = ref<{address: string, amount: number, withdrawAmount: number}[]>([
		{address: '0x29ae3b0cdd9a792c07f6a3825fab12d7', amount: 1, withdrawAmount: .345},
		{address: '0xc9d2aa05adc4d87f57fc43421a1a7687', amount: 0.124, withdrawAmount: .023},
		{address: '0x9999241c5ea7a98cfde55ce2a78d22de', amount: 0.76545, withdrawAmount: .16575},
		{address: '0x061d49dc9e9e3e0369f0ae70aab4ca30', amount: 1.4545, withdrawAmount: 1.1423},
		{address: '0x6ba8528c4bcf0d7f52c794e4004c427c', amount: 1.247, withdrawAmount: .944}
	]);
	const funds = ref(10.879432);

	const updateWithdrawAmount = (address: string, withdrawAmount: number) => {
		// TODO @mihai insert smart contract magic here
	}

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
    selectedProvider,
		receivers,
		funds,
		updateWithdrawAmount
  }
});
