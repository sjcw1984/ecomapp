/*Create & Return Sample Products */
const data = {
  products: [
    {
      name: 'Yoplait Original Key Lime Pie Low Fat Yogurt Cup',
      slug: 'yoplait-original-key-lime-pie-low-fat-yogurt-cup',
      priceGroupId: 1,
      category: 'Breakfast',
      image: '/images/0007047000321.jpeg',
      price: 0.8,
      inStock: 135,
      rating: 4.5,
      locationId: '540FC005',
      brand: {
        brandName: 'Yoplait',
        brandCode: 5456,
      },
      upc: '0007047000321',
      unitOfMeasure: 'Pound',
      countryOfOrigin: 'UNITED STATES',
    },
    {
      name: 'Yoplait Original Strawberry Banana Low Fat Yogurt Cup',
      slug: 'yoplait-original-strawberry-banana-low-fat-yogurt-cup',
      priceGroupId: 1,
      category: 'Breakfast',
      image: '/images/0007047000300.jpeg',
      price: 0.8,
      inStock: 225,
      rating: 4.5,
      locationId: '540FC005',
      brand: {
        brandName: 'Yoplait',
        brandCode: 5456,
      },
      upc: '0007047000300',
      size: '6 oz',
      unitOfMeasure: 'oz',
      countryOfOrigin: 'UNITED STATES',
      dimensions: {
        height: '3.56 [in_i]',
        width: '2.6 [in_i]',
        length: '2.61 [in_i]',
      },
      familyCode: ['911'],
      familyTree: {
        commodity: {
          code: '062',
          name: 'YOGURT',
        },
        department: {
          code: '05',
          name: 'DAIRY',
        },
        subCommodity: {
          code: '18302',
          name: 'TRADITIONAL SS YOGURT',
        },
      },
    },
  ],
};

export default data;
