module.exports = app => {
  const Pizzas = app.models.pizzas;

  app
    .route("/pizzas")
    .get((req, res) => {
      Pizzas.find({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      Pizzas.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });

  app
    .route("/pizzas/:id")
    .get((req, res) => {
      Pizzas.findOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .delete((req, res) => {
      Pizzas.findByIdAndRemove({ _id: req.params.id })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .put((req, res) => {
      let id = req.params.id;

      Pizzas.findByIdAndUpdate(id, req.body, { new: true })
        .then(result => {
          if (result === undefined || result === null) {
            res.status(404).json({ msg: "Pizza not found" });
            return;
          }
          res.json(result);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
};
