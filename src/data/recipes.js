let ADDITION_TYPES = {
  HOPS: "HOPS",
  OTHER: "OTHER"
};

export const Fermentables = [
  {id: 1, name: "Domestic 2 Row", srm: ""},
  {id: 2, name: "Pale Wheat Malt", srm: ""},
  {id: 3, name: "Dark Munich", srm: ""},
  {id: 4, name: "Crystal Malt 40L", srm: ""},
  {id: 5, name: "Chocolate Malt", srm: ""},
  {id: 6, name: "Vienna Malt", srm: ""},
  {id: 7, name: "CNA Superior", srm: ""},
  {id: 8, name: "Munich I", srm: ""},
  {id: 9, name: "Rye Malt", srm: ""},
  {id: 10, name: "Crystal Malt 75-80L"}
];

export const Additions = [
  {id: 1, name: "Northern Brewer", type: ADDITION_TYPES.HOPS, alpha: "", unit: "oz"},
  {id: 2, name: "Cascade", type: ADDITION_TYPES.HOPS, alpha: "", unit: "oz"},
  {id: 3, name: "Whirfloc", type: ADDITION_TYPES.OTHER, unit: "unit"},
  {id: 4, name: "Mosaic", type: ADDITION_TYPES.HOPS, unit: "oz"},
  {id: 5, name: "Centennial", type: ADDITION_TYPES.HOPS, unit: "oz"},
  {id: 6, name: "Chinook", type: ADDITION_TYPES.HOPS, unit: "oz"},
  {id: 7, name: "Amarillo", type: ADDITION_TYPES.HOPS, unit: "oz"},
  {id: 8, name: "Columbus", type: ADDITION_TYPES.HOPS, unit: "oz"},
  {id: 9, name: "Cirta", type: ADDITION_TYPES.HOPS, unit: "oz"}
];

export const Yeasts = [
  {id: 1, name: "US-05"}
];

export const Recipes = [
  {
    id: 1,
    name: "Borderline Brown",
    description: "A brown ale with a slight touch of hops.",
    post_boil: "20",
    fermentables: [
      {id: 1, qty: 32.5},
      {id: 2, qty: 2.75},
      {id: 3, qty: 3.5},
      {id: 4, qty: 3.25},
      {id: 5, qty: 1.25}
    ],
    additions:{
      "During Mash": [
        {id: 1, qty: 3.5}
      ],
      "Boil 60": [
        {id: 1, qty: 5}
      ],
      "Boil 15": [
        {id: 1, qty: 3.25},
        {id: 3, qty: 1}
      ],
      "Boil 10": [
        {id: 2, qty: 5}
      ],
      "Boil 0": [
        {id: 2, qty: 6.75}
      ]
    },
    yeast: {id: 1},
    target_og: "1.053",
    target_fg: "1.010",
    schedule: [
      {name: "Mash", notes: "Keep temperature at 152F", duration: 90, end_message: "Done mashing"},
      {name: "Boil", duration: 90, end_message: "All done!"}
    ]
  },
  {
    id: 2,
    name: "Kleptomania APA",
    description: "A nice fruity American Pale Ale that has the perfect balance of sweetness and bitterness.  Ideal for those nice summer evenings on the patio.",
    post_boil: 20,
    fermentables: [
      {id: 6, qty: 30},
      {id: 7, qty: 2.75},
      {id: 8, qty: 3.5},
      {id: 4, qty: 3.25}
    ],
    additions: {
      "Boil 60": [
        {id: 4, qty: 1.5},
        {id: 5, qty: 1.5}
      ],
      "Boil 0, Hold 10 minutes": [
        {id: 5, qty: 6.5},
        {id: 2, qty: 5.5}
      ],
      "Hold 15 minutes @175": [
        {id: 4, qty: 5}
      ]
    },
    yeast: {id: 1},
    target_og: "1.050",
    target_fg: "1.010",
    schedule: [
      {name: "Mash", notes: "Keep temperature at 152F", duration: 90, end_message: "Done mashing"},
      {name: "Boil", duration: 90, end_message: "All done!"}
    ]
  },
  {
    id: 3,
    name: "Sierra Nevada Rye IPA",
    description: "Our first shot at a rye beer",
    post_boil: 20,
    fermentables: [
      {id: 1, qty: 29.5},
      {id: 9, qty: 4.85},
      {id: 10, qty: 2.17},
      {id: 5, qty: 0.17}
    ],
    additions: {
      "Boil 60": [
        {id: 5, qty: 6.85}
      ],
      "Boil 0": [
        {id: 6, qty: 4.15},
        {id: 7, qty: 4.15},
        {id: 8, qty: 2.5}
      ],
      "Dry Hop": [
        {id: 9, qty: 5},
        {id: 8, qty: 1.65},
        {id: 6, qty: 3.35},
        {id: 7, qty: 1.65}
      ]
    },
    yeast: {id: 1},
    target_og: "1.055",
    target_fg: "1.010",
    schedule: [
      {name: "Mash", notes: "Keep temperature at 152F", duration: 60, end_message: "Done mashing"},
      {name: "Recirculation", duration: 30, end_message: "Get ready for sparging"},
      {name: "Boil", notes: "Let it boil", duration: 30, end_message: "Add first addition (boil 60)"},
      {name: "Boil", notes: "Continue boiling", duration: 60, end_message: "Add aromatic hops"}
    ]
  }
];

