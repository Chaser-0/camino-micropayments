import fs from "fs";
import { ethers } from "hardhat"
import { artifacts } from "hardhat";

export async function deployContract(contractName: string, parameters: any) {
	const contractFactory = await ethers.getContractFactory(contractName);
	const deployedContract = parameters
		? await contractFactory.deploy(...parameters)
		: await contractFactory.deploy();
	await deployedContract.deployed();
	console.log(`${contractName} contract deployed to: ${deployedContract.address}`);

	// Get the artifact
	const artifact = await artifacts.readArtifact(contractName);
	console.log("Artifact:", artifact);
	// Create the contract info object
	const contractInfo = {
		name: contractName,
		address: deployedContract.address,
		abi: artifact.abi,
		network: "Columbus Test Network", // TODO: Get the actual network name dynamically
	};
	// Save to file
	fs.writeFileSync(
		`./artifacts/contract-${contractName}.json`,
		JSON.stringify(contractInfo, null, 2)
	);
}