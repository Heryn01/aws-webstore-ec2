const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ALL ROUTES GO HERE:
/** 
 *  example route:
 *    app.get("/endpoint-name", (req, res) => {
 *    
 *     // DB call would go here -> return a data set
 *     res.status(200).send(dataset);
 * })
 * 
 * */ 
// simple route
app.get("/home", (req, res) => {
  res.json({ message: "Welcome to home." });
});

app.get("/products", async (req, res) => {
  res.status(200).send({ products: ["Product 1", "Product 2"]});
});


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});