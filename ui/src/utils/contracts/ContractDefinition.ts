import testMyContractDefinition from './TestMyContract.json' assert { type: 'json' };
import supplierEscrowContractDefinition from './SupplierEscrow.json' assert { type: 'json' };
import paymentDistributorContractDefinition from './PaymentDistributor.json' assert { type: 'json' };

export class ContractDefinition {
	public Abi: any;
	public Address: string;
	
	constructor(abi: any, address: string) {
		this.Abi = abi;
		this.Address = address;
	}
}

export const testMyContract = new ContractDefinition(
	testMyContractDefinition.abi,
	"0x6315Bc8ba1406BA60BeeA7673a9CF665fA1c257C");

export const supplierEscrowContract = new ContractDefinition(
	supplierEscrowContractDefinition.abi,
	"0x65A0003CBB003ED7b6173a31f596f2082EAa67b0");

export const paymentDistributorContract = new ContractDefinition(
	paymentDistributorContractDefinition.abi,
	"0xB7EA3E8728A2ff74fd9a6354aBC61ac19e1E47CE");
