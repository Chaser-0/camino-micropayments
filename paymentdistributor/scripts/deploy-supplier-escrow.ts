import { deployContract } from "./deploy-contract";

async function main() {
	const contractName = "SupplierEscrow"; // Name of the contract to deploy

	deployContract(contractName, null);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});