type TSupplierDefinition = {
	id: number,
	name: string,
	publicKey: string,
	privateKey: string
}

export const supplierDefinitions: TSupplierDefinition[] = [
	{id: 1, name: 'Supplier 1', publicKey: '0x7e291645110aF6Cb5A5C1595fdD0Da80a2a5f2Fe', privateKey: '1451ed5f0806a174c8534da0fb7fd420cd6dfabd5047e3d6b5642c6b5f48033b'},
	{id: 2, name: 'Supplier 2', publicKey: '0x12822F0a65b676552cFcf2D360eeb0eb6bcdcB3F', privateKey: 'c4c8d514b6e5b304fa8497f9b783b8ddae5c6c104ecdb61ba73890023a1669bf'}
];
