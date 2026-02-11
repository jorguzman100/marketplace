import axios from "axios";

export default {

  // ********** LogIn && SignUp **********
  getUser: function (userName) {
    console.log("logIn API called", userName)
    return axios.post("/api/login", userName);
  },
  saveUser: function (userData) {
    return axios.post("/api/consumers", userData);
  },
  
  // ********** Stores **********
  // Gets all 
  getStores: function () {
    return axios.get("/api/stores");
  },
  // Gets one with the id
  getStore: function (id) {
    return axios.get("/api/stores/" + id);
  },
  // Deletes one with the id
  deleteStore: function (id) {
    return axios.delete("/api/stores/" + id);
  },
  // Saves to the database
  saveStore: function (storeData) {
    return axios.post("/api/stores", storeData);
  },

  // ********** Products **********
  // Gets all 
  getProducts: function () {
    return axios.get("/api/products");
  },
  // Gets one with the id
  getProduct: function (id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes one with the id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves to the database
  saveProduct: function (productData) {
    return axios.post("/api/products", productData);
  },
  //Find all products with a specific category
  getProductByCategory: function (categoryName) {
    return axios.get("/api/productscat/" + categoryName);
  },

  // ********** Categories **********
  getCategories: function () {
    return axios.get("/api/categories");
  },
  getCategory: function (id) {
    return axios.get("/api/categories/" + id);
  },
  deleteCategory: function (id) {
    return axios.delete("/api/categories/" + id);
  },
  updateCategory: function (id, categoryName) {
    return axios.put("/api/categories/" + id, { categoryName });
  },
  saveCategoy: function (categoryName) {
    return axios.post("/api/categories", { categoryName });
  },

  // ********** Sellers **********
  getSellers: function () {
    return axios.get("/api/sellers");
  },
  getSeller: function (id) {
    return axios.get("/api/sellers/" + id);
  },
  deleteSeller: function (id) {
    return axios.delete("/api/sellers/" + id);
  },
  updateSeller: function (id, sellerData) {
    return axios.put("/api/sellers/" + id, sellerData);
  },
  saveSeller: function (sellerData) {
    return axios.post("/api/sellers", sellerData);
  },

  // ********** Customers **********
  getConsumers: function () {
    return axios.get("/api/consumers");
  },

  // ********** Orders **********
  getOrders: function () {
    return axios.get("/api/orders");
  },
  saveOrder: function (orderData) {
    return axios.post("/api/orders", orderData);
  },
};

