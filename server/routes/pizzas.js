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
      // let arrayToppings = req.body.toppings;
      // // arrayToppings.forEach(topping => {
      // //   Toppings.find({_id: topping}).then(res)
      // // })
      Toppings.findOne({ _id: topping })
        .then(topping => {
          console.log(topping);
          Pizzas.findOne({ _id: id })
            .then(pizza => {
              let index = pizza.toppings.findIndex(t => t === topping._id);
              if (index === -1) {
                Pizzas.findByIdAndUpdate(id, { topping }, { new: true })
                  .then(result => res.status(200).json(result))
                  .catch(error => {
                    res.status(400).json({ msg: error.message });
                  });
              } else {
                throw new Error("topping is part of the pizza");
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
