const db = require("../models");

// Defining methods for the categoriesController
module.exports = {
  findAll: function (req, res) {
    db.Category
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Category
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    // console.log('****** create ***** req.body: ', req.body);
    db.Category
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        // console.error('****** err ******: ', err);
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.Category
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Category
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
