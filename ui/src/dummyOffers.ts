type TBaseOffer = {
  name: string;
  cost: number;
  address: string;
};

type TAddonOffer = TBaseOffer & {
  supplierPercent: number;
  supplierAddress: string;
}

type TTravelOffer = TBaseOffer & {
  addons: TAddonOffer[];
}


// TODO Replace with real addresses
export const exampleData: TTravelOffer[] = [
  {
    name: '1 Week on Crete',
    cost: 1.000356,
    address: '0xdeadbeefdeadbeefdeadbeefdeadbeef',
    addons: [
      {name: 'Breakfast', cost: 0.00035, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10},
      {name: 'Spa day', cost: 0.149, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10}
    ]
  },
  {
    name: '1 Week on Mallorca',
    cost: 1.000356,
    address: '0xdeadbeefdeadbeefdeadbeefdeadbeef',
    addons: [
      {name: 'Breakfast', cost: 0.00035, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10},
      {name: 'Spa day', cost: 0.149, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10}
    ]
  }
];
