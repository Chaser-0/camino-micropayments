export class SupplierDefinition {
	public Id: number;
	public PublicKey: string;
	public PrivateKey: string;
	public Name: string;
	
	constructor(id: number, name: string, publicKey: string, privateKey: string) {
		this.Id = id;
		this.Name = name;
		this.PublicKey = publicKey;
		this.PrivateKey = privateKey;
	}
}

export const supplierDefinitions = [
	new SupplierDefinition(1, "Supplier 1",
		"0x7e291645110aF6Cb5A5C1595fdD0Da80a2a5f2Fe",
		"1451ed5f0806a174c8534da0fb7fd420cd6dfabd5047e3d6b5642c6b5f48033b"),
	new SupplierDefinition(2, "Supplier 2",
		"0x12822F0a65b676552cFcf2D360eeb0eb6bcdcB3F",
		"c4c8d514b6e5b304fa8497f9b783b8ddae5c6c104ecdb61ba73890023a1669bf")
];