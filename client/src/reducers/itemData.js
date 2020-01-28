//add keywords, other pics array,colors
const items = [
  {
    id: 1,
    price: 1200,
    name: 'vneck gown',
    link: 'http://pngimg.com/uploads/dress/dress_PNG194.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 2,
    price: 1300,
    name: 'Red HoodPllush gown',
    link: 'http://pngimg.com/uploads/dress/dress_PNG149.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 3,
    price: 800,
    name: 'vase gown',
    link: 'http://pngimg.com/uploads/dress/dress_PNG196.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 4,
    price: 1500,
    name: 'bow style dress',
    link: 'http://pngimg.com/uploads/dress/dress_PNG189.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 5,
    price: 800,
    name: 'armless petite goen',
    link: 'http://pngimg.com/uploads/dress/dress_PNG178.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 6,
    price: 1700,
    name: 'overflow ball gown',
    link: 'http://pngimg.com/uploads/dress/dress_PNG137.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 7,
    price: 1000,
    name: 'short dress',
    link: 'http://pngimg.com/uploads/dress/dress_PNG128.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 8,
    price: 700,
    name: 'longsleeve shirt',
    link: 'http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8113.png',
    category: 'clothes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 9,
    price: 700,
    name: 'bodyhug t-shirt',
    link: 'http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8070.png',
    category: 'clothes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 10,
    price: 800,
    name: 'long armed top',
    link: 'http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8069.png',
    category: 'clothes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 11,
    price: 2000,
    name: 'cowboy hat',
    link: 'http://pngimg.com/uploads/cowboy_hat/cowboy_hat_PNG81.png',
    category: 'clothes',
    type: '',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 12,
    price: 7000,
    name: 'furry coat',
    link: 'http://pngimg.com/uploads/fur_coat/fur_coat_PNG23.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 13,
    price: 1900,
    name: 'jean trouser',
    link: 'http://pngimg.com/uploads/jeans/jeans_PNG5770.png',
    category: 'clothes',
    type: '',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 14,
    price: 1100,
    name: 'striped leggings',
    link: 'http://pngimg.com/uploads/leggings/leggings_PNG56.png',
    category: 'clothes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 15,
    price: 100,
    name: 'Black Stripes',
    link: 'http://pngimg.com/uploads/converse/converse_PNG63.png',
    category: 'shoes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 16,
    price: 4500,
    name: 'All star converse',
    link: 'http://pngimg.com/uploads/converse/converse_PNG59.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 17,
    price: 4300,
    name: 'regular vans',
    link: 'http://pngimg.com/uploads/vans/vans_PNG50.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 18,
    price: 4000,
    name: 'flat vans',
    link: 'http://pngimg.com/uploads/vans/vans_PNG47.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 19,
    price: 4800,
    name: 'colourful vans',
    link: 'http://pngimg.com/uploads/vans/vans_PNG48.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 20,
    price: 4300,
    name: 'marked vans',
    link: 'http://pngimg.com/uploads/vans/vans_PNG46.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 21,
    price: 4500,
    name: 'casual shoes',
    link: 'http://pngimg.com/uploads/men_shoes/men_shoes_PNG7497.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 22,
    price: 3500,
    name: 'laced shoes',
    link: 'http://pngimg.com/uploads/men_shoes/men_shoes_PNG7479.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 23,
    price: 3500,
    name: 'laced office shoe',
    link: 'http://pngimg.com/uploads/men_shoes/men_shoes_PNG7496.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 24,
    price: 3200,
    name: 'loafers',
    link: 'http://pngimg.com/uploads/louboutin/louboutin_PNG10851.png',
    category: 'shoes',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 25,
    price: 12000,
    name: 'anthill louboutin',
    link: 'http://pngimg.com/uploads/louboutin/louboutin_PNG10837.png',
    category: 'shoes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 26,
    price: 5000,
    name: 'high heels',
    link: 'http://pngimg.com/uploads/louboutin/louboutin_PNG10834.png',
    category: 'shoes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 27,
    price: 7000,
    name: 'prima heels',
    link: 'http://pngimg.com/uploads/women_shoes/women_shoes_PNG7474.png',
    category: 'shoes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 28,
    price: 4000,
    name: 'regular heels',
    link: 'http://pngimg.com/uploads/women_shoes/women_shoes_PNG7461.png',
    category: 'shoes',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 29,
    price: 10000,
    name: 'super hand bag',
    link:
      'http://www.pngall.com/wp-content/uploads/2016/04/Women-Bag-High-Quality-PNG.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 30,
    price: 2000,
    name: 'hand purse',
    link:
      'http://www.pngall.com/wp-content/uploads/2016/04/Women-Bag-PNG-Images.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 31,
    price: 3000,
    name: 'colourful bag',
    link:
      'http://www.pngall.com/wp-content/uploads/2016/04/Women-Bag-PNG-Pic.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 32,
    price: 5000,
    name: 'leather bag',
    link:
      'http://www.pngall.com/wp-content/uploads/2016/04/Women-Bag-PNG-Image.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 33,
    price: 15000,
    name: 'Royal handbag',
    link:
      'http://www.pngall.com/wp-content/uploads/2016/04/Women-Bag-PNG-File.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 34,
    price: 4000,
    name: 'regular handbag',
    link: 'http://pngimg.com/uploads/women_bag/women_bag_PNG6416.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 35,
    price: 6000,
    name: 'high style bag',
    link: 'http://pngimg.com/uploads/women_bag/women_bag_PNG6409.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 36,
    price: 6000,
    name: 'Black stretch bag',
    link: 'http://pngimg.com/uploads/women_bag/women_bag_PNG6393.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 37,
    price: 4500,
    name: 'slim bag',
    link: 'http://pngimg.com/uploads/women_bag/women_bag_PNG6394.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 38,
    price: 3500,
    name: 'chain handle bag',
    link: 'http://pngimg.com/uploads/women_bag/women_bag_PNG6408.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 39,
    price: 4800,
    name: 'Backpack',
    link: 'http://pngimg.com/uploads/backpack/backpack_PNG6360.png',
    category: 'bags',
    type: '',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 7000,
    price: 100,
    name: 'traveller\'s bag',
    link: 'http://pngimg.com/uploads/backpack/backpack_PNG6325.png',
    category: 'bags',
    type: '',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 41,
    price: 11000,
    name: 'ig box',
    link: 'http://pngimg.com/uploads/luggage/luggage_PNG10746.png',
    category: 'bags',
    type: '',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 42,
    price: 5700,
    name: 'thin waist bag',
    link: 'http://pngimg.com/uploads/women_bag/women_bag_PNG6421.png',
    category: 'bags',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 43,
    price: 2000,
    name: 'analog watch',
    link: 'http://pngimg.com/uploads/watches/watches_PNG9906.png',
    category: 'jewellery',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 44,
    price: 8000,
    name: 'smart watch',
    link: 'http://pngimg.com/uploads/watches/watches_PNG9905.png',
    category: 'jewellery',
    type: '',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 45,
    price: 25000,
    name: 'apple watch',
    link: 'http://pngimg.com/uploads/watches/watches_PNG9899.png',
    category: 'jewellery',
    type: '',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 46,
    price: 4000,
    name: 'gold analog watch',
    link: 'http://pngimg.com/uploads/watches/watches_PNG9883.png',
    category: 'jewellery',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 47,
    price: 2500,
    name: 'white face watch',
    link: 'http://pngimg.com/uploads/watches/watches_PNG9881.png',
    category: 'jewellery',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 48,
    price: 7000,
    name: 'silver ring',
    link: 'http://pngimg.com/uploads/jewelry/jewelry_PNG6840.png',
    category: 'jewellery',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 49,
    price: 10000,
    name: 'gold ring',
    link: 'http://pngimg.com/uploads/jewelry/jewelry_PNG6780.png',
    category: 'jewellery',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 50,
    price: 2000,
    name: 'anchor pendant',
    link: 'http://pngimg.com/uploads/necklace/necklace_PNG138.png',
    category: 'jewellery',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 51,
    price: 6000,
    name: 'teardrop pendant',
    link: 'http://pngimg.com/uploads/necklace/necklace_PNG134.png',
    category: 'jewellery',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 52,
    price: 12000,
    name: 'double necklace',
    link: 'http://pngimg.com/uploads/necklace/necklace_PNG130.png',
    category: 'jewellery',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 53,
    price: 9000,
    name: 'bullet pendant',
    link: 'http://pngimg.com/uploads/necklace/necklace_PNG128.png',
    category: 'jewellery',
    type: 'men',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 54,
    price: 13000,
    name: 'emerald pendant',
    link: 'http://pngimg.com/uploads/necklace/necklace_PNG126.png',
    category: 'jewellery',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 55,
    price: 3000,
    name: 'star pendant',
    link: 'http://pngimg.com/uploads/necklace/necklace_PNG127.png',
    category: 'jewellery',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  },
  {
    id: 56,
    price: 6000,
    name: 'love pendant',
    link: 'http://pngimg.com/uploads/necklace/necklace_PNG94.png',
    category: 'jewellery',
    type: 'WOMEN',
    size: [5, 6, 7, 8, 9],
    description: ''
  }
];

export default items;
