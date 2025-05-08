import { deployContract } from "./deploy-contract";

async function main() {
	const contractName = "PaymentDistributor"; // Name of the contract to deploy

	deployContract(contractName, null);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});