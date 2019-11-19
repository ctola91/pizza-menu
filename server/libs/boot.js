module.exports = app => {
  app.db
    .then(function() {
      app.listen(app.get("port"), () => {
        console.log(`Task API = Port ${app.get("port")}`);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};
