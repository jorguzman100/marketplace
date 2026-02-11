import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Carousel from '../components/carouselPDP'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Details from '../components/pdpdetailtabs'
import ProductDetail from '../components/pdpproductdetail'
import Related from '../components/pdprelatedproducts'
import { useHistory } from 'react-router-dom';
import API from "../utils/API";
import NavCustomer from '../components/navcustomer'
import Categories from '../components/categoriescustomer'
import Footer from '../components/footercustomer'

function PDP() {

    const [product, setProduct] = useState();
    const [categories, setCategories] = useState([])
    const [topProducts, setTopProducts] = useState([])

    const history = useHistory();
    const id = history.location.pathname.split('/')[3];
    // console.log('history.pathname: ', history.location.pathname.split('/')[3]);
    /* let product = {
        sku: "293853",
        productName: "Lego car",
        categoryName: "Toys",
        price: 205,
        stock: 29,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        picture: "https://images-na.ssl-images-amazon.com/images/I/91B2ftaRW7L._AC_SL1500_.jpg",
        picture2: "https://images-na.ssl-images-amazon.com/images/I/71St4QL1z%2BL._AC_SL1000_.jpg",
        picture3: "https://images-na.ssl-images-amazon.com/images/I/8146hMBYeJL._AC_SL1500_.jpg"
    } */

    useEffect(() => {
        loadProduct(id);
    }, [id]);

    useEffect(() => {
        loadCategories()
    }, [id])

    useEffect(() => {
        loadProducts()
    }, [id])

    function loadCategories() {
        API.getCategories()
            .then(res => {
                setCategories(res.data);
                //console.log('loadCategories - res.data: ', res.data);
            }
            )
            .catch(err => console.log(err));
    };

    function loadProducts() {
        API.getProducts()
            .then(res => {
                setTop4(res.data);
                //console.log('loadProducts - res.data: ', res.data);
            }
            )
            .catch(err => console.log(err));
    };

    const loadProduct = (id) => {
        API.getProduct(id)
            .then(res => {
                setProduct(res.data);
                //console.log('loadProduct - res.data: ', res.data);
            }
            )
            .catch(err => console.log(err));
    };

    function setTop4(array) {
        let top4 = []
        let baseArray = array.slice(0);

        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * baseArray.length)
            top4.push(baseArray[index])
            baseArray.splice(index, 1);
        };
        setTopProducts(top4);
    }



    return (
        <>
            <NavCustomer />
            <Categories categories={categories} />
            <Container className="minht">
                {product && (
                    <Row>
                        <div className="col-lg-6 col-sm-12">
                            <Carousel
                                picture={product.picture}
                                picture2={product.picture2}
                                picture3={product.picture3}
                            />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <ProductDetail
                                product={product}
                                productId={product._id}
                                productName={product.productName}
                                description={product.description}
                                price={product.price}
                            />
                        </div>
                    </Row>
                )}
                <Row>
                    <Col>
                        <h2>Product Specification</h2>
                        <Details />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Related products</h2>
                        <Related products={topProducts} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default PDP;
