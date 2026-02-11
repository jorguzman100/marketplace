import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./styles.css";

// React components
import { Tab, Row, Col, Nav, Container } from "react-bootstrap";

// Custom components
import ProductsConfig from "./ProductsConf";
import OrdersConfig from "./OrdersConf";
import CategoriesConfig from "./CategoriesConf";
import SellersConfig from "./SellersConf";
import StoresConfig from "./StoresConf";
import Dashboard from './Dashboard'

function HomeAdmin() {

  const [sellers, setSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryUpdatedName, setCategoryUpdatedName] = useState('');
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    sku: "",
    productName: "",
    picture: "",
    picture2: "",
    picture3: "",
    price: 0,
    description: "",
    categoryName: "",
    inventario: 0,

  });
  const [seller, setSeller] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobile: "",
    picture: "",
  });
  const [stores, setStores] = useState([]);
  const [newStore, setNewStore] = useState({
    storeName: "",
    storePicture: "",
    seller: "",
    products: [],
  })
  const [orders, setOrders] = useState([]);
  const [consumers, setConsumers] = useState([]);


  useEffect(() => {
    loadProducts()
    loadCategories();
    loadSellers();
    loadStores();
    loadConsumers();
    loadOrders();
  }, []);

  // ****************************** Stores ******************************
  function loadStores() {
    API.getStores()
      .then(res => {
        setStores(res.data);
        // console.log('loadStores - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  };

  const handleStoreDeleteButton = (e) => {
    let id = e.target.getAttribute('data-categoryid');
    // console.log('handleStoreDeleteButton - id: ', id);
    deleteStore(id);
  }

  const deleteStore = (id) => {
    // console.log('deleteCategory - id: ', id);
    API.deleteStore(id)
      .then(res => {
        // console.log('Category deleted - res.data: ', res.data);
        loadStores();
      })
      .catch(err => console.log(err));
  }

  const handleNewStoreInputOnChange = (e) => {
    let key = e.target.getAttribute('aria-label')
    let value = e.target.value;

    // console.log(e.target.id, ": ", e.target.value)
    setNewStore({ ...newStore, [key]: value });
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  }

  const handleNewStoreCheckOnChange = (e) => {
    // let key = e.target.getAttribute('aria-label')
    let productArray = newStore.products
    productArray.push(e.target.value);

    // console.log(e.target.id, ": ", e.target.value)
    setNewStore({ ...newStore, products: productArray });
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  }

  const handleStoreSaveButton = () => {
    saveStore()
  }

  const saveStore = () => {
    //console.log("save new Store: ", newStore)
    API.saveStore(newStore)
      .then(res => {
        // console.log('Category saved - res.data: ', res.data);
        loadStores();
      })
      .catch(err => console.log(err));
  }

  // ****************************** PRODUCTS ******************************
  function loadProducts() {
    API.getProducts()
      .then(res => {
        setProducts(res.data);
        //console.log('loadProducts - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  };

  const handleProductDeleteButton = (e) => {
    let id = e.target.getAttribute('data-categoryid');
    //console.log('handleProductDeleteButton - id: ', id);
    deleteProduct(id);
  }

  const deleteProduct = (id) => {
    // console.log('deleteCategory - id: ', id);
    API.deleteProduct(id)
      .then(res => {
        // console.log('Category deleted - res.data: ', res.data);
        loadProducts();
      })
      .catch(err => console.log(err));
  }

  const handleNewProductInputOnChange = (e) => {
    let key = e.target.getAttribute('aria-label')
    let value = e.target.value;

    // console.log(e.target.id, ": ", e.target.value)
    setNewProduct({ ...newProduct, [key]: value });
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  }

  const handleProductSaveButton = () => {
    saveProduct(newProduct)
  }

  const saveProduct = (newProduct) => {
    API.saveProduct(newProduct)
      .then(res => {
        // console.log('Category saved - res.data: ', res.data);
        loadProducts();
      })
      .catch(err => console.log(err));
  }

  // ****************************** SELLERS ******************************

  const loadSellers = () => {
    API.getSellers()
      .then(res => {
        setSellers(res.data);
        //console.log('loadSellers - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  }

  const saveSeller = (sellerData) => {
    // console.log('SAVESELLER - sellerData: ', sellerData);
    API.saveSeller(sellerData)
      .then(res => {
        // console.log('Seller saved - res.data: ', res.data);
        loadSellers();
      })
      .catch(err => console.log(err));
  }

  const deleteSeller = (id) => {
    // console.log('deleteSeller - id: ', id);
    API.deleteSeller(id)
      .then(res => {
        // console.log('Seller deleted - res.data: ', res.data);
        loadSellers();
      })
      .catch(err => console.log(err));
  }

  const handleSellerInputOnChange = (e) => {
    let input = e.target.getAttribute('aria-label');
    let value = e.target.value;

    //console.log('handleSellerInputOnChange - input: ' + input + ' value: ' + value);
    setSeller({
      ...seller,
      [input]: value
    });
    //console.log('seller state: ', seller);
  }

  const handleSellerSaveButton = () => {
    // console.log('handleSellerSaveButton - sellerData: ', sellerData);
    /* let sellerData = {
      userName: "perengano2000",
      firstName: "Perenganito",
      lastName: "Gonzalez",
      password: "12345678",
      email: "perenganito@sales.com",
      mobile: "5555555555",
      picture: "http://lorempixel.com/71/70/people/ ",
      memberSince: "2020-09-04T18:08:54.776Z"
    } */
    saveSeller(seller);
  }

  const handleSellerDeleteButton = (e) => {
    let id = e.target.getAttribute('data-sellerid');
    // console.log('handleCategoryDeleteButton - id: ', id);
    deleteSeller(id);
  }

  // ****************************** CATEGORIES ******************************

  const loadCategories = () => {
    API.getCategories()
      .then(res => {
        setCategories(res.data);
        // console.log('loadCategories - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  }

  const saveCategory = (categoryName) => {
    // console.log('SAVECATEGORY - categoryName: ', categoryName);
    API.saveCategoy(categoryName)
      .then(res => {
        // console.log('Category saved - res.data: ', res.data);
        loadCategories();
      })
      .catch(err => console.log(err));
  }

  const deleteCategory = (id) => {
    // console.log('deleteCategory - id: ', id);
    API.deleteCategory(id)
      .then(res => {
        // console.log('Category deleted - res.data: ', res.data);
        loadCategories();
      })
      .catch(err => console.log(err));
  }

  const updateCategory = (id, update) => {
    // console.log('updateCategory - id: ', id);
    API.updateCategory(id, update)
      .then(res => {
        // console.log('Category deleted - res.data: ', res.data);
        loadCategories();
      })
      .catch(err => console.log(err));
  }

  const handleCategoryInputOnChange = (e) => {
    let value = e.target.value;
    setCategoryName(value);
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  }

  const handleCategoryUpdatedInputOnChange = (e) => {
    let value = e.target.value;
    setCategoryUpdatedName(value);
    // console.log('handleCategoryUpdatedInputOnChange - e.target.value: ', e.target.value);
  }

  const handleCategorySaveButton = () => {
    // console.log('handleCategorySaveButton - categories.categoryName: ', categories.categoryName);
    saveCategory(categoryName);
  }

  const handleCategoryDeleteButton = (e) => {
    let id = e.target.getAttribute('data-categoryid');
    // console.log('handleCategoryDeleteButton - id: ', id);
    deleteCategory(id);
  }

  const handleCategoryUpdateButton = (e) => {
    let id = e.target.getAttribute('data-categoryid');
    // console.log('handleCategoryUpdateButton - id: ', id);
    updateCategory(id, categoryUpdatedName);
  }

  // ****************************** CUSTOMERS ******************************

  const loadConsumers = () => {
    API.getConsumers()
      .then(res => {
        setConsumers(res.data);
        //console.log('loadConsumers - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  }

  // ****************************** ORDERS ******************************

  const loadOrders = () => {
    API.getOrders()
      .then(res => {
        setOrders(res.data);
        //console.log('loadOrders - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  }


  return (
    <Container fluid className="tabAdmin">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row>
        <Col sm={2}>
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Sellers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Stores</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">Dashboard</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ProductsConfig
                products={products}
                categories={categories}
                handleProductSaveButton={handleProductSaveButton}
                handleNewProductInputOnChange={handleNewProductInputOnChange}
                handleProductDeleteButton={handleProductDeleteButton}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <OrdersConfig orders={orders} />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <CategoriesConfig
                categories={categories}
                handleCategoryInputOnChange={handleCategoryInputOnChange}
                handleCategorySaveButton={handleCategorySaveButton}
                handleCategoryDeleteButton={handleCategoryDeleteButton}
                handleCategoryUpdateButton={handleCategoryUpdateButton}
                handleCategoryUpdatedInputOnChange={handleCategoryUpdatedInputOnChange}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <SellersConfig
                sellers={sellers}
                handleSellerSaveButton={handleSellerSaveButton}
                handleSellerDeleteButton={handleSellerDeleteButton}
                handleSellerInputOnChange={handleSellerInputOnChange}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <StoresConfig
                allproducts={products}
                sellers={sellers}
                allStores={stores}
                categories={categories}
                handleStoreSaveButton={handleStoreSaveButton}
                handleNewStoreInputOnChange={handleNewStoreInputOnChange}
                handleNewStoreCheckOnChange={handleNewStoreCheckOnChange}
                handleStoreDeleteButton={handleStoreDeleteButton}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <Dashboard
                consumers={consumers}
                stores={stores}
                products={products}
                orders={orders}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
  );
}

export default HomeAdmin;
