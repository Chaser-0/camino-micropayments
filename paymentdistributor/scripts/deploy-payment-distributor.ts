import { ethers } from "hardhat"

// TODO: Make this a generic deploy script for any contract

async function main() {
	// Creating an instance of Contract Factory. Think of it as making a blueprint. In line 9
	// we are addressing this blueprint to deploy the actual contract.
	const escrowContract = await ethers.getContractFactory("PaymentDistributor");
	// Tokens use denomination in decimals, by default it is 18 (e.g. input of 1 * 10 ** 18 = 1 token)
	// ethers.utils.parseEther is basically adding 18 decimals to the number you input.
	const deployedContract = await escrowContract.deploy(/* constructor arguments if any */);
	await deployedContract.deployed();

	console.log(
		"PaymentDistributor contract deployed to:", deployedContract.address
	)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});