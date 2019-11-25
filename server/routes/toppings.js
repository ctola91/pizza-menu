module.exports = app => {
  const Toppings = app.models.toppings;
  const Pizzas = app.models.Pizzas;
  app
    .route("/toppings")
    .get((req, res) => {
      Toppings.find({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      Toppings.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });

  app
    .route("/toppings/:id")
    .get((req, res) => {
      Toppings.findOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .delete((req, res) => {
      Toppings.findByIdAndRemove({ _id: req.params.id })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .put((req, res) => {
      let id = req.params.id;

      Toppings.findByIdAndUpdate(id, req.body, { new: true })
        .then(result => {
          if (result === undefined || result === null) {
            res.status(404).json({ msg: "Toppings not found" });
            return;
          }
          res.json(result);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
};
