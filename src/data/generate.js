const categories = [
  {
    title: 'Advertisement',
  },
  {
    title: 'All Night Drug Store',
  },
  {
    title: 'Art',
  },
  {
    title: 'Back To School',
  },
  {
    title: 'Bikes By Cycle',
  },
  {
    title: 'Care Beauty',
  },
  {
    title: 'Cars',
  },
  {
    title: 'Construction Building',
  },
  {
    title: 'Back to School',
  },
  {
    title: 'Bikes by Cycle',
  },
  {
    title: 'Care & Beauty',
  },
  {
    title: 'Cars',
  },
  {
    title: 'Construction & Building',
  },
  {
    title: 'Decorations',
  },
  {
    title: 'Dietetic',
  },
  {
    title: 'Dry Cleaning',
  },
  {
    title: 'Electrician & Mechanics',
  },
  {
    title: 'Electronic',
  },
  {
    title: 'Event',
  },
  {
    title: 'Fashion',
  },
  {
    title: 'Food & Fruits',
  },
  {
    title: 'Found Objects',
  },
  {
    title: 'Furniture',
  },
  {
    title: 'Hair Salon',
  },
  {
    title: 'Hand Made',
  },
  {
    title: 'Hand Phone',
  },
  {
    title: 'Health Care',
  },
  {
    title: 'Home Appliance',
  },
  {
    title: 'Home Services',
  },
  {
    title: 'Hotel',
  },
  {
    title: 'Insurance',
  },
  {
    title: 'Jobs',
  },
  {
    title: 'Legal Services',
  },
  {
    title: 'Leisure & Outings',
  },
  {
    title: 'Lingerie',
  },
  {
    title: 'Mass Media',
  },
  {
    title: 'Meet',
  },
  {
    title: 'Motorcycle & Bike',
  },
  {
    title: 'Other Services',
  },
  {
    title: 'Others',
  },
  {
    title: 'Phone',
  },
  {
    title: 'Printing Press',
  },
  {
    title: 'Real Estate',
  },
  {
    title: 'Restaurants & Bars',
  },
  {
    title: 'Shopping - Ready to Wear',
  },
  {
    title: 'Shopping - Thrift Store',
  },
  {
    title: 'Sport Accessories',
  },
  {
    title: 'Supermarket',
  },
  {
    title: 'Tattoo',
  },
  {
    title: 'Towing',
  },
  {
    title: 'Trading - Import & Export',
  },
  {
    title: 'Traditional Medicine',
  },
  {
    title: 'Veterinarians',
  },
];

const list = [];

var regexPattern = /[^A-Za-z0-9]/g;
categories.map(category => {
  const key = category.title
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
  let keyValue = key.replace(/[^\w\s]/gi, '');
  keyValue = keyValue.replace(regexPattern, '');
  const cat = {
    [keyValue]: category.title,
  };
  list.push(cat);
});
const fs = require('fs');
fs.writeFile('categories.json', JSON.stringify({categories: list}), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Categories dumped to categories.json');
});
