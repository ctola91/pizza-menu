import bodyParser from "body-parser";
import morgan from "morgan";

module.exports = app => {
  app.set("port", process.env.PORT || 3000);
  app.set("json spaces", 2);
  app.use(morgan("dev")); // only for dev
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    if (req.body && req.body._id) {
      delete req.body._id;
    }
    next();
  });
};
