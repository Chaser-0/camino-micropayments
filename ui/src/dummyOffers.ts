type TBaseOffer = {
  name: string;
  cost: number;
  address: string;
};

export type TAddonOffer = TBaseOffer & {
  supplierPercent: number;
  supplierAddress: string;
}

export type TTravelOffer = TBaseOffer & {
  addons: TAddonOffer[];
  heroImage: string;
}


// TODO Replace with real addresses
export const exampleData: TTravelOffer[] = [
  {
    name: '1 Week on Crete',
    cost: 1.000356,
    address: '0xdeadbeefdeadbeefdeadbeefdeadbeef',
    heroImage: 'https://images.unsplash.com/photo-1601836743857-4d1e6da20a32',
    addons: [
      {name: 'Breakfast', cost: 0.00035, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10},
      {name: 'Spa day', cost: 0.149, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10}
    ]
  },
  {
    name: '1 Week on Mallorca',
    cost: 1.2565,
    address: '0xdeadbeefdeadbeefdeadbeefdeadbeef',
    heroImage: 'https://images.unsplash.com/photo-1516154182849-1a5f068beda5',
    addons: [
      {name: 'Breakfast', cost: 0.00035, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10},
      {name: 'Spa day', cost: 0.149, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10}
    ]
  }
];
