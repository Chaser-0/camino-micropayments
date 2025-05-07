import { ref } from 'vue'
import { defineStore } from 'pinia'
import { BrowserProvider } from 'ethers/providers';

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


  return {
    connected,
    connectWallet,
    providers,
    selectedProvider
  }
});
