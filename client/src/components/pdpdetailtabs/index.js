import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "./style.css";


function pdpTabs() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" >
            <Tab eventKey="home" title="Details" className="tabsheight">
                <div>
                    <h3>The seller hasn't added more info for this product</h3>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Shipment" className="tabsheight">
                <div>
                    <h3>Shipping cost:</h3>
                    <ul>
                        <li>Mexico: $100 MXN</li>
                        <li>USA: $100 MXN</li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey="contact" title="Reviews" className="tabsheight">
                <div>
                    <h3>There are no reviews for this product</h3>
                </div>
            </Tab>
        </Tabs>
    );
}

export default pdpTabs;
