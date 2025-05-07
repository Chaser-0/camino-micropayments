import { ContractDefinition } from "./ContractDefinition";
import testMyContractDefinition from './TestMyContract.json';

export const testMyContract = new ContractDefinition(
	testMyContractDefinition.abi,
	"0x5f038645ca73b7fe4f52F1Ff678B39318cC44FE7");
