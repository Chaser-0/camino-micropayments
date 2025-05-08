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