module.exports = app => {
  const Pizzas = app.models.pizzas;
  const Toppings = app.models.toppings;
  app
    .route("/pizzas")
    .get((req, res) => {
      let perPage = Number(req.query.limit) || 5;
      let page = req.query.page || 0;
      let sort = req.query.sort || "asc";
      Pizzas.countDocuments({})
        .then(count => {
          Pizzas.find({})
            .limit(perPage)
            .skip(perPage * page)
            .sort({
              name: sort
            })
            .then(result => res.json({ total: count, pizzas: result }))
            .catch(error => {
              res.status(412).json({ msg: error.message });
            });
        })
        .catch();
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
        .populate("toppings")
        .then(result => {
          Toppings.find({});
          res.json(result);
        })
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
              let index = toppingsAdded.findIndex(t => t.equals(topping._id));
              if (index === -1) {
                toppingsAdded.push(topping);
                Pizzas.findByIdAndUpdate(
                  id,
                  { toppings: toppingsAdded },
                  { new: true }
                )
                  .then(result => res.status(200).json(result))
                  .catch(error => {
                    res.status(400).json({ msg: error.message });
                  });
              } else {
                res.status(406).json({
                  msg: `currently Topping '${topping.name}' was added to pizza.`
                });
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
    .put((req, res) => {
      let id = req.params.id;
      let toppingToRemove = req.body.topping;
      Pizzas.findById(id)
        .then(pizza => {
          let index = pizza.toppings.findIndex(idT =>
            idT.equals(toppingToRemove)
          );
          if (index > -1) {
            let toppingsEdited = pizza.toppings;
            toppingsEdited.splice(index, 1);
            Pizzas.findByIdAndUpdate(
              id,
              { toppings: toppingsEdited },
              { new: true }
            )
              .then(result => {
                res.status(201).json(result);
              })
              .catch(err => {
                res.status(404).json({ msg: err.message });
              });
          } else {
            res.status(404).json({
              msg: `Topping '${req.body.topping}' was not found on this pizza`
            });
          }
        })
        .catch(error => {
          res.status(404).json({ msg: error.message });
        });
    });
};
