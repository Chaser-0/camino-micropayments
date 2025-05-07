type TBaseOffer = {
  id: string;
  name: string;
  cost: number;
};

type TTravelOffer = TBaseOffer & {
  addons: TBaseOffer[];
}


export const exampleData: TTravelOffer[] = [
  {
    id: 'awesome_offer_1',
    name: 'Crete',
    cost: 1.000356,
    addons: [
      {name: 'Breakfast', id: 'addon_1', cost: 0.00035}
    ]
  }
];
