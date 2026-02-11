const mongoose = require("mongoose");
const db = require("../models");

// Handling api keys
require('dotenv').config();

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {

    await db.Product.deleteMany({});
    await db.Product.insertMany(productSeed);
    console.log("Products inserted!");

    await db.Order.deleteMany({});
    await db.Order.insertMany(orderSeed);
    console.log("Orders inserted!");

    process.exit(0);

  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



// const consumerSeed = [
//   {
//     userName: "Consumer01",
//     firstName: "Jorge",
//     lastName: "Guzman",
//     password: "12345678",
//     consumerAddress: {
//       street: 'Consulado',
//       number: '25',
//       neighborhood: 'Emiliano Zapata',
//       zipCode: '02080',
//       country: 'Mexico',
//       state: 'Ciudad de Mexico'
//     },
//     email: "jorge@bootcamp.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
//     paymentMethod: "Credit Card",
//     memberSince: new Date(Date.now())
//   },
//   {
//     userName: "Consumer02",
//     firstName: "Rodrigo",
//     lastName: "Rosas",
//     password: "12345678",
//     consumerAddress: {
//       street: 'Ajusco',
//       number: '72',
//       neighborhood: 'Copilco',
//       zipCode: '03112',
//       country: 'Mexico',
//       state: 'Ciudad de Mexico'
//     },
//     email: "rodrigo@bootcamp.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
//     paymentMethod: "Credit Card",
//     memberSince: new Date(Date.now())
//   },
//   {
//     userName: "Consumer03",
//     firstName: "Raul",
//     lastName: "Alarcon",
//     password: "12345678",
//     consumerAddress: {
//       street: 'Puebla',
//       number: '123',
//       neighborhood: 'Chimalistac',
//       zipCode: '03333',
//       country: 'Mexico',
//       state: 'Ciudad de Mexico'
//     },
//     email: "raul@bootcamp.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
//     paymentMethod: "Credit Card",
//     memberSince: new Date(Date.now())
//   },
// ];

// db.Consumer
//   .remove({})
//   .then(() => db.Consumer.collection.insertMany(consumerSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

const productSeed = [
  {
    sku: "293847",
    productName: "Bicicleta",
    categoryName: "Sports",
    price: 20500,
    stock: 9,
    description: "2 ruedas con canastilla",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU",
    picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU",
    picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU"
  },
  {
    "sku": "223412",
    "productName": "Samsung Galaxy Note 20 256GB",
    "categoryName": "Technology",
    "price": 23000,
    "stock": 20,
    "description": "SAMSUNG Galaxy Note 20 256GB 8GB RAM SM-N980F/DS 6.7 64MP Mystic Gray (Gris)",
    "picture": "https://images-na.ssl-images-amazon.com/images/I/61wOlKW64mL._AC_SL1040_.jpg",
    "picture2": "https://images-na.ssl-images-amazon.com/images/I/61wOlKW64mL._AC_SL1040_.jpg",
    "picture3": "https://images-na.ssl-images-amazon.com/images/I/61wOlKW64mL._AC_SL1040_.jpg"
  },
  {
    sku: "293853",
    productName: "Balon Basketball",
    categoryName: "Sports",
    price: 205,
    stock: 29,
    description: "Basketball profesional",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg",
    picture2: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg",
    picture3: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg"
  },
  {
    sku: "293444",
    productName: "Balon Adidas Telstar",
    categoryName: "Sports",
    price: 444,
    stock: 44,
    description: "de futbol profesional",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg",
    picture2: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg",
    picture3: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg"
  },
  {
    categoryName: "Sports",
    description: "Yankees Sweater",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
    picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
    picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
    price: 1789,
    productName: "NY Yankees Sweater",
    sku: "1029455",
    stock: 22
  },
  {
    categoryName: "Sports",
    description: "NY Yankees hat for adults",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
    picture2: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
    picture3: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
    price: 564,
    productName: "Yankees Hat",
    sku: "6473892",
    stock: 56,
  },
  {
    categoryName: "Sports",
    description: "NY Yankees jersey for adults",
    picture: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
    picture2: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
    picture3: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
    price: 1234,
    productName: "Yankees Jersey",
    sku: "6436657",
    stock: 34,
  },
  {
    categoryName: "Travel",
    description: "nice luggage for baseball lovers travels",
    picture: "https://cdn.shopify.com/s/files/1/0433/6825/products/MLB_Yankees_21_frontqrt_b4947897-849d-4675-8f68-9e46cb6fb641_800x.jpg?v=1560973035",
    picture2: "https://cdn.shopify.com/s/files/1/0433/6825/products/MLB_Yankees_21_frontqrt_b4947897-849d-4675-8f68-9e46cb6fb641_800x.jpg?v=1560973035",
    picture3: "https://cdn.shopify.com/s/files/1/0433/6825/products/MLB_Yankees_21_frontqrt_b4947897-849d-4675-8f68-9e46cb6fb641_800x.jpg?v=1560973035",
    price: 2987,
    productName: "Yankees Lugggage",
    sku: "467577657890",
    stock: 11,
  }
];

db.Product
  .deleteMany({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });




// const storeSeed = [
//   {
//     storeName: "Tiendita 1",
//     storePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQicAo97U0icM_ocj1eWsWtLlfZHEZ1trD_UQ&usqp=CAU"
//   },
//   {
//     storeName: "Miscelania El Don",
//     storePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF063Ku9d_PCRTbwHYkfD-TabitynXyDlFGw&usqp=CAU"
//   },
// ];

// db.Store
//   .remove({})
//   .then(() => db.Store.collection.insertMany(storeSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// const sellerSeed = [
//   {
//     userName: "juanito2000",
//     firstName: "Juan",
//     lastName: "Perez",
//     password: "12345678",
//     email: "juanito@sales.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyCpcXIQts51MRPP9o97YCLI6qafLe2g4mUg&usqp=CAU",
//   },
//   {
//     userName: "sandra2000",
//     firstName: "Sandra",
//     lastName: "Perez",
//     password: "12345678",
//     email: "sandra@sales.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTnAqZ-8Ac-uPSkP8uTgOIrhYBUp83nrOefA&usqp=CAU",
//   },
// ];

// db.Seller
//   .remove({})
//   .then(() => db.Seller.collection.insertMany(sellerSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

const orderSeed = [
  {
    products: [
      {
        categoryName: "Sports",
        description: "Yankees Sweater",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
        picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
        picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
        price: 1789,
        productName: "NY Yankees Sweater",
        quantity: "1",
        sku: "1029455",
        stock: 22,
        _id: "5f54e130e99f9e7ff69bce4d"
      }, {
        categoryName: "Sports",
        description: "Basketball profesional",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg",
        picture2: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg",
        picture3: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg",
        price: 205,
        productName: "Balon Basketball",
        quantity: "5",
        sku: "293853",
        stock: 29,
        _id: "5f54e130e99f9e7ff69bce4b",
      },
    ],
    storeID: ["5f542e6a39eb3f321f9f9c51"],
    customerID: "5f542e6939eb3f321f9f9c4c",
    orderStatus: 'Payed',
    totalAmount: 5000,
    Date: "2020-09-07T14:53:44.296Z",
    deliveryAddress: {
      street: 'Consulado',
      number: '25',
      neighborhood: 'Emiliano Zapata',
      zipCode: '02080',
      country: 'Mexico',
      state: 'Ciudad de México'
    },
  },
  {
    products: [
      {
        categoryName: "Technology",
        description: "iPhone 11 64 GB",
        picture: "https://images-na.ssl-images-amazon.com/images/I/51GUjMAFDbL._AC_SL1382_.jpg",
        picture2: "https://images-na.ssl-images-amazon.com/images/I/51GUjMAFDbL._AC_SL1382_.jpg",
        picture3: "https://images-na.ssl-images-amazon.com/images/I/51GUjMAFDbL._AC_SL1382_.jpg",
        price: 17000,
        productName: "Apple iPhone 11 64GB",
        quantity: "1",
        sku: "22123",
        stock: 20,
        _id: "5f55a5124dc33c7574e9936c"
      }, {
        categoryName: "Sports",
        description: "2 ruedas con canastilla",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU",
        picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU",
        picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU",
        price: 20500,
        productName: "Bicicleta",
        quantity: "2",
        sku: "293847",
        stock: 9,
        _id: "5f54e130e99f9e7ff69bce49"
      },
    ],
    storeID: ["5f542e6a39eb3f321f9f9c52"],
    customerID: "5f542e6939eb3f321f9f9c4d",
    orderStatus: 'Delivered',
    totalAmount: 10000,
    Date: "2020-09-07T14:53:44.296Z",
    deliveryAddress: {
      street: 'Ajusco',
      number: '72',
      neighborhood: 'Copilco',
      zipCode: '03112',
      country: 'Mexico',
      state: 'Ciudad de México'
    },
  },
  {
    products: [
      {
        categoryName: "Sports",
        description: "de futbol profesional",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg",
        picture2: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg",
        picture3: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg",
        price: 444,
        productName: "Balon Adidas Telstar",
        quantity: "1",
        sku: "293444",
        stock: 44,
        _id: "5f54e130e99f9e7ff69bce4c"
      }, {
        categoryName: "Office",
        description: "de piel vacuno, color negro",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEa5U5J5af8aROIP9s6uH9QeeNoVZQnYVwyA&usqp=CAU",
        picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEa5U5J5af8aROIP9s6uH9QeeNoVZQnYVwyA&usqp=CAU",
        picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEa5U5J5af8aROIP9s6uH9QeeNoVZQnYVwyA&usqp=CAU",
        price: 1300,
        productName: "portafolios",
        quantity: "3",
        sku: "293850",
        stock: 4,
        _id: "5f54e130e99f9e7ff69bce4a"
      }, {
        categoryName: "Sports",
        description: "NY Yankees jersey for adults",
        picture: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
        picture2: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
        picture3: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
        price: 1234,
        productName: "Yankees Jersey",
        quantity: "5",
        sku: "6436657",
        stock: 34,
        _id: "5f54e130e99f9e7ff69bce4f"
      }, {
        categoryName: "Sports",
        description: "NY Yankees hat for adults",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
        picture2: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
        picture3: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
        price: 564,
        productName: "Yankees Hat",
        quantity: "1",
        sku: "6473892",
        stock: 56,
        _id: "5f54e130e99f9e7ff69bce4e"
      }
    ],
    storeID: ["5f55b87a4199e05b7ff2043d", '5f542e6a39eb3f321f9f9c52'],
    customerID: "5f542e6939eb3f321f9f9c4e",
    orderStatus: 'Payed',
    totalAmount: 25000,
    Date: "2020-09-07T14:53:44.296Z",
    deliveryAddress: {
      street: 'Durango',
      number: '15',
      neighborhood: 'Chimalistac',
      zipCode: '03333',
      country: 'Mexico',
      state: 'Ciudad de México'
    }
  },
];

db.Order
  .deleteMany({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// const categorySeed = [
//   {
//     categoryName: "Sports"
//   },
//   {
//     categoryName: "Office"
//   },
//   {
//     categoryName: "Home"
//   },
//   {
//     categoryName: "Clothing"
//   },
//   {
//     categoryName: "Beauty"
//   },
//   {
//     categoryName: "Accesories"
//   }
// ];

// db.Category
//   .remove({})
//   .then(() => db.Category.collection.insertMany(categorySeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });