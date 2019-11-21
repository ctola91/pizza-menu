module.exports = app => {
  const Pizzas = app.models.pizzas;
  const Toppings = app.models.toppings;
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
          res.status(404).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      let id = req.params.id;
      Toppings.findOne({ _id: req.body.topping })
        .then(topping => {
          Pizzas.findOne({ _id: id })
            .then(pizza => {
              let toppingsAdded = pizza.toppings;
              console.log(toppingsAdded);
              console.log(topping);
              let index = toppingsAdded.findIndex(t => t === topping._id);
              console.log(index);
              if (index === -1) {
                toppingsAdded.push(topping);
                Pizzas.findByIdAndUpdate(id, { toppings: toppingsAdded}, { new: true })
                  .then(result => res.status(200).json(result))
                  .catch(error => {
                    res.status(400).json({ msg: error.message });
                  });
              } else {
                res.status(406).json({msg: `currently ${topping.name} was added to pizza.`})
              }
            })
            .catch(err => {
              res.status(400).json({ msg: err.message });
            });
        })
        .catch(err => {
          res.status(412).json({ msg: err.message });
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
