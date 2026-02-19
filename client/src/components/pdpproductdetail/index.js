import React, { useState, useEffect } from "react";
import "./style.css";
import Row from 'react-bootstrap/Row';
import {Redirect} from "react-router-dom";


function ProductDetail({ product, productId, productName, description, price }) {

    const [added, setAdded] = useState("")
    const [localStorageProducts, setlocalStorageProducts] = useState([]);

  useEffect(() => {
    getLocalStoragePdts();
  }, []);

 const getLocalStoragePdts = () => {
    let localProducts = [];

    for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i);

      let currentProduct;
      try {
        currentProduct = JSON.parse(localStorage.getItem(id));
      } catch (error) {
        continue;
      }

      if (!currentProduct || typeof currentProduct !== "object") {
        continue;
      }

      if (typeof currentProduct.price === "undefined" || typeof currentProduct.quantity === "undefined") {
        continue;
      }

      localProducts.push(currentProduct);
    }
    
    setlocalStorageProducts(localProducts);
  }
  

  

    return (
        <> 
        {added==="Confirmed"? 
        <Redirect push to = "/home"/>:
        ""}
        <div>
            <div className="productheight">
                <Row className="bott">
                    <h1 className="font-wght">{productName}</h1>
                </Row>
                <Row className="bott2">
                        <h3 className="prc-wght">{`$${price} MXN `}</h3>
                </Row>
                <Row className="prodDesc">
                    <div>
                        <h4>Description:{' '}</h4>
                        {description}
                    </div>
                </Row>
            </div>
            <div className="align">
                <Row>
                    <div className="col-lg-2 col-sm-12">
                        <h3>Select:</h3>
                    </div>
                    <div className="col-lg-10 col-sm-12">
                        <form>
                            <div className="form-row align-items-right">
                                <div className="col-auto my-1 align-items-right">
                                    <label className="mr-sm-2 sr-only" htmlFor="quantity">Preference</label>
                                    <select className="custom-select mr-sm-2" id="quantity" defaultValue="1">
                                        <option>Quantity</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className="col-auto my-1 align-items-right">
                                    <div type="submit" className="add" onClick={() => {
                                        if(document.querySelector('#quantity').value>0){
                                            console.log("click add")
                                            let productAndQuantity = {
                                                 ...product,                               
                                                  quantity: document.querySelector('#quantity').value                              
                                              }      
                                              localStorageProducts.forEach(element => {
                                                  if (element._id===productId){
                                                      productAndQuantity.quantity = parseInt(productAndQuantity.quantity) + parseInt(element.quantity)
                                                      
                                                  }
                                              })                                                     
                                            localStorage.setItem(productId, JSON.stringify(productAndQuantity));
                                            alert("Product added to your cart");
                                            setAdded("Confirmed")
                                        }else{
                                            alert("You must select at least one item");
                                        };
                                        
                                        }
                                        }>
                                            Add
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Row>
            </div>

        </div>
        </>
    );
}

export default ProductDetail;
