type TBaseOffer = {
  name: string;
  price: number;
};

export type TAddonOffer = TBaseOffer & {
  supplierPercent: number;
  supplierId: number;
}

export type TTravelOffer = TBaseOffer & {
  addons: TAddonOffer[];
  heroImage: string;
  description: string;
  shortDescription: string;
}


// TODO Replace with real addresses
export const exampleData: Record<string, TTravelOffer> = {
  creteOffer: {
    name: '1 Week on Crete',
    price: 1.000356,
    heroImage: 'https://images.unsplash.com/photo-1601836743857-4d1e6da20a32',
    description: "🌞 Escape to paradise with our unforgettable one-week trip to Crete! Explore the island’s breathtaking beaches, ancient Minoan ruins, and charming villages steeped in Mediterranean culture. Enjoy delicious Cretan cuisine and relax in carefully selected boutique accommodations. Each day brings a new adventure—from hiking the Samaria Gorge to sailing crystal-clear waters. Our local guides ensure authentic experiences and seamless travel. Whether you're seeking relaxation or exploration, Crete has it all waiting for you.",
    shortDescription: 'Discover the perfect mix of culture, nature, and relaxation on an all-inclusive one-week journey through Crete.',
    addons: [
      {name: 'Breakfast', price: 0.00035, supplierId: 1, supplierPercent: 10},
      {name: 'Spa day', price: 0.149, supplierId: 1, supplierPercent: 10},
			{name: 'Bike excursion', price: 0.00035, supplierId: 2, supplierPercent: 10},
      {name: 'Wine tasting', price: 0.149, supplierId: 2, supplierPercent: 10}
    ]
  },
  mallorcaOffer: {
    name: '1 Week on Mallorca',
    price: 1.2565,
    heroImage: 'https://images.unsplash.com/photo-1516154182849-1a5f068beda5',
    description: "Escape to paradise with our exclusive one-week getaway to Mallorca! Bask in the sun on golden beaches, explore charming coastal villages, and savor Mediterranean cuisine in vibrant local markets. Relax in handpicked boutique hotels that blend comfort with authentic island charm. Enjoy guided excursions to dramatic cliffs, turquoise coves, and historic landmarks like Palma Cathedral. Whether you seek adventure or tranquility, Mallorca offers the perfect balance of both. Book now and let the island’s beauty and warmth recharge your spirit.",
    shortDescription: 'A one-week trip to Mallorca offers sun-soaked beaches, cultural adventures, and luxurious relaxation in an unforgettable Mediterranean setting.',
    addons: [
      {name: 'Breakfast', price: 0.00035, supplierId: 1, supplierPercent: 10},
      {name: 'Spa day', price: 0.149, supplierId: 1, supplierPercent: 10},
			{name: 'Bike excursion', price: 0.00035, supplierId: 2, supplierPercent: 10},
      {name: 'Wine tasting', price: 0.149, supplierId: 2, supplierPercent: 10}
    ]
  }
};
