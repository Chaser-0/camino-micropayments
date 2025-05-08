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
	"0x14033B3a7eAFCe61dd79c73171C3B1D70b046f80");

export const paymentDistributorContract = new ContractDefinition(
	paymentDistributorContractDefinition.abi,
	"0x68aD0F7e22F44946C25126cAD3Ee2C869F009ab7");
