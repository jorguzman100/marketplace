const db = require("../models");

// Defining methods for the consumersController
module.exports = {
  findAll: function(req, res) {
    db.Consumer
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("find by Id");
    db.Consumer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
      let value = { email: req.body.email}
      console.log("user Login: ",value)
    db.Consumer
      .findOne(value)
      .then(dbModel => {
        let user = {}
          if(dbModel.password===req.body.password){
              user=dbModel
              delete user.password;
              console.log("Log in succesful: ", user)
              res.json(user)
          } else{
              res.json("Wrong User or Password")
          }
        })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Save New User: ", req.body)
    db.Consumer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },
  update: function(req, res) {
    db.Consumer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Consumer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
