import React from "react";

const UserContext = React.createContext({
    userName: "",
    userType: "",
    consumerAddress: {},
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobile: "",
    picture: "",
    paymentMethod: "",
});

  export default UserContext;