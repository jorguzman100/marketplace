import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Bar, Pie, Line } from "react-chartjs-2";


const Dashboard = ({ consumers, stores, products, orders }) => {
    const [salesPerStoreChartData, setSalesPerStoreChartData] = useState({});
    const [productsChartData, setProductsChartData] = useState({});
    const [ordersPerDateChartData, setOrdersPerDateChartData] = useState();


    const [itemsSold, setItemsSold] = useState(0);
    const [totalSales, setTotalSales] = useState(0);
    const [avgSalesPerStore, setAvgSalesPerStore] = useState(0);
    const [salesPerStore, setSalesPerStore] = useState([]);
    const [storeNames, setStoreNames] = useState([]);
    const [storeAmounts, setStoreAmounts] = useState([]);

    const [ordersPerDateLabel, setOrdersPerDateLabel] = useState([]);
    const [ordersPerDateValues, setOrdersPerDateValues] = useState([]);

    let leaderProducts = [];
    let ordersThisWeek = [];


    // console.log('itemsSold: ', itemsSold);

    let productNames = [];
    let uniqueProductNames = [];
    let result = {};

    useEffect(() => {
        let salesPerProductID = [];
        let salesPerStore = [];

        //let filteredSalesPerStore = [{}];

        if (consumers && stores && products && orders) {
            consumers.length > 0 ? console.log('consumers: ', consumers) : console.log('');
            stores.length > 0 ? console.log('stores: ', stores) : console.log('');
            products.length > 0 ? console.log('products: ', products) : console.log('');
            orders.length > 0 ? (console.log('orders: ', orders)) : console.log('');
            if (orders.length > 0) {
                let itemsCount = 0;
                let salesSum = 0;
                let avgSales = 0;


                orders.forEach(order => {
                    // ordersPerDateLabelArr.push(order.date);
                    itemsCount += order.products.length;
                    salesSum += order.totalAmount;
                    stores.length > 0 ? avgSales = salesSum / stores.length : avgSales = 0;

                    // Get sales per product id sold
                    order.products.forEach((product) => {
                        salesPerProductID.push({
                            productName: product.productName,
                            productID: product._id,
                            sales: parseFloat(product.quantity) * parseFloat(product.price)
                        });
                        productNames.push(product.productName);
                    });
                });

                // Count product names
                // How to find duplicate element/value in an array in js
                // Source: https://medium.com/@amirdanish126/how-to-count-duplicate-value-in-an-array-in-javascript-e942b59af8f2

                productNames.forEach((x) => {
                    result[x] = (result[x] || 0) + 1;
                });
                console.log('result: ', result);

                // Get unique product names
                if (productNames.length > 0) {
                    uniqueProductNames = productNames.filter(onlyUnique);
                }



                // Get store's products ids
                if (stores.length > 0) {
                    //stores.forEach((store) => {
                    //store.products.forEach((product) => {
                    salesPerProductID.forEach((salePerID) => {
                        stores.forEach((store) => {
                            store.products.forEach((product) => {
                                if (salePerID.productID === product) {
                                    //console.log(salePerID.productID + ' === ' + product);
                                    //order.products.forEach((orderProduct) => {
                                    salesPerStore.push({
                                        storeName: store.storeName,
                                        amount: salePerID.sales
                                    });
                                    //});
                                }
                            });
                        });

                    });
                    //});
                    //});
                }

                //console.log('salesPerProductID: ', salesPerProductID);
                //console.log('salesPerStore: ', salesPerStore);
                //console.log('filteredSalesPerStore: ', filteredSalesPerStore);
                let salesPerStore2 = [];

                stores.forEach((store) => {
                    let storeAmount = 0;
                    salesPerStore.forEach((salePerStore) => {
                        if (salePerStore.storeName === store.storeName) {
                            //console.log('salePerStore: ', salePerStore);
                            //console.log('parseFloat(salePerStore.amount): ', parseFloat(salePerStore.amount));
                            storeAmount += parseFloat(salePerStore.amount);
                            //console.log('storeAmount: ', storeAmount);
                        }
                    });

                    salesPerStore2.push({
                        storeName: store.storeName,
                        amount: parseFloat(storeAmount)
                    });
                });
                //console.log('salesPerStore2: ', salesPerStore2);

                let storeNamesArr = storeNames;
                let storeAmountsArr = storeAmounts;
                //console.log('salesPerStore2: ', salesPerStore2);
                salesPerStore2.forEach((salePerStore2) => {
                    // console.log('salePerStore2: ', salePerStore2);
                    if (Object.entries(salePerStore2).length > 0) {
                        //console.log('salePerStore2.storeName: ' + salePerStore2.storeName + ' salePerStore2.amount: ' + salePerStore2.amount);
                        storeNamesArr.push(salePerStore2.storeName);
                        storeAmountsArr.push(salePerStore2.amount);
                    }
                });

                //console.log('storeNamesArr: ', storeNamesArr);
                //console.log('storeAmountsArr: ', storeAmountsArr);

                setStoreNames(storeNamesArr);
                setStoreAmounts(storeAmountsArr);

                setItemsSold(itemsCount);
                setTotalSales(salesSum);
                setAvgSalesPerStore((avgSales.toFixed(2)));
                setSalesPerStore(salesPerStore2);
            }
        }


        console.log('salesPerProductID: ', salesPerProductID);
        console.log('productNames: ', productNames);
        console.log('uniqueProductNames: ', uniqueProductNames);

        salesPerStorechart();
        leaderProductsChart();
    }, [consumers, stores, products, orders]);



    let ordersPerDateLabelArr = [];
    let ordersPerDateValuesArr = [];
    useEffect(() => {

        if (orders) {
            orders.forEach(order => {
                let minute = new Date(order.Date).getMinutes();
                ordersPerDateLabelArr.push(minute.toString());
                ordersPerDateValuesArr.push(order.totalAmount);
            });
            //console.log('ordersPerDateLabelArr: ', ordersPerDateLabelArr);
            //console.log('ordersPerDateValuesArr: ', ordersPerDateValuesArr);
            setOrdersPerDateLabel(ordersPerDateLabelArr);
            setOrdersPerDateValues(ordersPerDateValuesArr);
            ordersPerDateChart();
        }
    }, [orders]);


    //let ordersPerDateLabel0 = ['1', '2', '3'];
    //let ordersPerDateValues0 = [1, 2, 1.5];

    // Number with thousands separation
    // Source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Return only unique values of an array
    // Source: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    // usage example:
    // var a = ['a', 1, 'a', 2, '1'];
    // var unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }


    const salesPerStorechart = () => {
        setSalesPerStoreChartData({
            labels: storeNames,
            datasets: [
                {
                    label: "",
                    data: storeAmounts,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        });
    };

    const leaderProductsChart = () => {
        setProductsChartData({
            labels: Object.keys(result),
            datasets: [
                {
                    label: "",
                    data: Object.values(result),
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        });
    }

    const ordersPerDateChart = () => {
        //console.log('In ordersPerDateChart()');
        //console.log('ordersPerDateLabel: ', ordersPerDateLabel);
        //console.log('ordersPerDateValues: ', ordersPerDateValues);
        setOrdersPerDateChartData({
            labels: ordersPerDateLabelArr,
            datasets: [
                {
                    label: "",
                    data: ordersPerDateValuesArr,
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(75, 192, 192, 1)",
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        });
    }




    console.log('**** RE-RENDER ****');
    return (
        <div>
            <h4>
                <strong>Marketplace Dashboard</strong>
            </h4>

            <Row>
                <Col>
                    <Card>
                        <Card.Header className="py-1">Total Registered</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <span>Users: {consumers.length}</span> <br />
                                <span>Stores: {stores.length || '0'}</span> <br />
                                <span>Products: {products.length || '0'}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Items Sold</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">{itemsSold}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Total Sales</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">$ {numberWithCommas(totalSales)}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Average Sales Per Store</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">${numberWithCommas(avgSalesPerStore)}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Sales Per Store</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%" }}>
                                <Bar
                                    data={salesPerStoreChartData}
                                    options={{
                                        responsive: true,
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Leader Products</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%" }}>
                                <Pie
                                    data={productsChartData}
                                    options={{
                                        responsive: true,
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Last Orders Sales</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%", height: '50%' }}>
                                {ordersPerDateChartData &&
                                    <Line
                                        data={ordersPerDateChartData}
                                        options={{
                                            responsive: true,
                                            legend: {
                                                display: false
                                            }
                                        }}
                                    />}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
