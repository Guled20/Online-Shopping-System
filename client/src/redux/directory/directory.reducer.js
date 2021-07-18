export const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 't-shirt',
      imageUrl:
        'https://i.ibb.co/8dG16mN/s-daredevil-party-wear-wrath-original-imafw2kc8ducmcbp.jpg',
      id: 4,
      linkUrl: 'shop/t-shirt',
    },
    {
      title: 'flat-shoes',
      imageUrl:
        'https://san-bro.com/wp-content/uploads/2019/09/Women-Flats-Summer-Women-Genuine-Leather-Shoes-With-Low-Heels-Slip-On-Casual-Flat-Shoes-Women.jpg',
      id: 5,
      linkUrl: 'shop/flat-shoes',
    },
    {
      title: 'jeans',
      imageUrl:
        'https://www.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/X/N/XN046-55J-001.jpg',
      id: 6,
      linkUrl: 'shop/jeans',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 7,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 8,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
