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
  description: string;
}


// TODO Replace with real addresses
export const exampleData: Record<string, TTravelOffer> = {
  creteOffer: {
    name: '1 Week on Crete',
    cost: 1.000356,
    address: '0xdeadbeefdeadbeefdeadbeefdeadbeef',
    heroImage: 'https://images.unsplash.com/photo-1601836743857-4d1e6da20a32',
    description: "Is good you understand your place in my world shake treat bag. Purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow get away from me stupid dog. Brown cats with pink ears. Sniff catnip and act crazy. Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day stare at the wall, play with food and get confused by dust intently sniff hand. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now bird bird bird bird bird bird human why take bird out i could have eaten that. Jump five feet high and sideways when a shadow moves one of these days i'm going to get that red dot, just you wait and see and meow all night chew the plant and cat slap dog in face. Intently stare at the same spot throwup on your pillow meow meow pee in shoe meow loudly just to annoy owners for get my claw stuck in the dog's ear swat turds around the house. I see a bird i stare at it i meow at it i do a wiggle come here birdy ask for petting, for shove bum in owner's face like camera lens so fall over dead (not really but gets sypathy) burrow under covers, yet destroy couch, for hunt by meowing loudly at 5am next to human slave food dispenser. Sit in box scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food stares at human while pushing stuff off a table. Meow and walk away eat a plant, kill a hand. Cats secretly make all the worlds muffins sit in window and stare oooh, a bird, yum bathe private parts with tongue then lick owner's face so where is my slave? I'm getting hungry. I like fish scratch at the door then walk away scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in. I bet my nine lives on you-oooo-ooo-hooo make it to the carpet before i vomit mmmmmm, yet always ensure to lay down in such a manner that tail can lightly brush human's nose why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout, or don't nosh on the birds yet hide when guests come over, or reaches under door into adjacent room.",
    addons: [
      {name: 'Breakfast', cost: 0.00035, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10},
      {name: 'Spa day', cost: 0.149, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10}
    ]
  },
  mallorcaOffer: {
    name: '1 Week on Mallorca',
    cost: 1.2565,
    address: '0xdeadbeefdeadbeefdeadbeefdeadbeef',
    heroImage: 'https://images.unsplash.com/photo-1516154182849-1a5f068beda5',
    description: "Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food spend six hours per day washing, but still have a crusty butthole has closed eyes but still sees you. If it fits i sits throwup on your pillow scream for no reason at 4 am or human is behind a closed door, emergency! abandoned! meeooowwww!!! rub my belly hiss. Hopped up on catnip. Leave hair everywhere. Run as fast as i can into another room for no reason spend all night ensuring people don't sleep sleep all day yet swipe at owner's legs for human is washing you why halp oh the horror flee scratch hiss bite and stare at the wall, play with food and get confused by dust and shred all toilet paper and spread around the house just going to dip my paw in your coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now. I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk instead of drinking water from the cat bowl, make sure to steal water from the toilet yet sit as close as possible to warm fire without sitting on cold floor or i will be pet i will be pet and then i will hiss. Scratch so owner bleeds nyaa nyaa or pushed the mug off the table so make plans to dominate world and then take a nap and human is washing you why halp oh the horror flee scratch hiss bite love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) if it smells like fish eat as much as you wish. Instead of drinking water from the cat bowl, make sure to steal water from the toilet push your water glass on the floor i cry and cry and cry unless you pet me, and then maybe i cry just for fun pose purrfectly to show my beauty scratch the postman wake up lick paw wake up owner meow meow and stare at owner accusingly then wink steal mom's crouton while she is in the bathroom. Meowzer walk on a keyboard. Rub whiskers on bare skin act innocent i show my fluffy belly but it's a trap! if you pet it i will tear up your hand. Hey! you there, with the hands human is washing you why halp oh the horror flee scratch hiss bite. Miaow then turn around and show you my bum get video posted to internet for chasing red dot yet sleep yet run up and down stairs or throw down all the stuff in the kitchen so refuse to drink water except out of someone's glass cats go for world domination.",
    addons: [
      {name: 'Breakfast', cost: 0.00035, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10},
      {name: 'Spa day', cost: 0.149, address: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierAddress: '0xdeadbeefdeadbeefdeadbeefdeadbeef', supplierPercent: 10}
    ]
  }
};
