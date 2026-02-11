import React from "react";
import Footer from '../components/footeradmin'
import Header from '../components/navadmin'
import HomeAdmin from './HomeAdmin'

function MasterCustomer() {
  return (
    <div>
        <Header />
           <HomeAdmin />
         <Footer />
    </div>
  );
}

export default MasterCustomer;
