const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var Connection = require('tedious').Connection; 

var config = {  
    server: 'testdb-1.ccopgex7ytvv.us-east-1.rds.amazonaws.com', 
    authentication: {
        type: 'default',
        options: {
            userName: 'amazonian', 
            password: 'zYca!GRJzw#H9w' 
        }
    },
    options: {
        encrypt: false,
        database: 'acmeDB' 
    }
};  



var connection = new Connection(config);  
  connection.on('connect', function(err) {    
    console.log("Connected");  
  });

connection.connect();

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/** 
ROUTE TEMPLATE:

// You will need to replace 'endpoint-name' with the name of your page (App.js)
app.get("/endpoint-name", (req, res) => {
    
  // Put your SQL query here
  request = new Request("SELECT * FROM TableName;", function(err) {  
    if (err) {  
        console.log(err);
    }  
  });

  // The following code will store the values from the SQL query in an array of json objects called rows
  let rows = [];
  request.on('row', function(columns) { 
    let jsonData = {};
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        jsonData[column.metadata.colName] = column.value;
      }  
    });  
    rows = rows.concat(jsonData);
  });  

  // This will send the data from the SQL query to the front-end
  request.on("requestCompleted", function (rowCount, more) {
    res.json({ data: rows });
  });

  connection.execSql(request);
 
 })

*/

app.options("/*", function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// NATHAN'S ROUTES BEGIN

app.get("/products", async (req, res) => {

  request = new Request("SELECT * FROM Product;", function(err) {  
    if (err) {  
        console.log(err);
    }  
  });

  let rows = [];
  request.on('row', function(columns) { 
    let jsonData = {};
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        jsonData[column.metadata.colName] = column.value;
      }  
    });  
    rows = rows.concat(jsonData);
  });  

  request.on("requestCompleted", function (rowCount, more) {
    res.json({ products: rows });
  });

  connection.execSql(request);

});

 app.post("/cart", (req, res) => {

  const products = req.body.products;
  const timeOfPurchase = req.body.time;

  products.forEach(product => {
    // Put your SQL query here
    const insertString = "INSERT INTO Purchase (PurchaseDate, PurchaseQuantity, ProductID, PurchaseID) VALUES ('" + timeOfPurchase + "', 1, " + product.id + ", " + parseInt(Math.floor(Math.random() * 500000000) + 4) + ");";
    request = new Request(insertString, function(err) {  
      if (err) {  
          console.log(err);
      }  
    });
  })

  request.on("requestCompleted", function (rowCount, more) {
    res.status(200).send();
  });

  connection.execSql(request);
 
 })

 app.get("/broker", (req, res) => {
    
  // Put your SQL query here
  request = new Request("SELECT * FROM Product;", function(err) {  
    if (err) {  
        console.log(err);
    }  
  });

  // The following code will store the values from the SQL query in an array of json objects called rows
  let rows = [];
  request.on('row', function(columns) { 
    let jsonData = {};
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        jsonData[column.metadata.colName] = column.value;
      }  
    });  
    rows = rows.concat(jsonData);
  });  

  // This will send the data from the SQL query to the front-end
  request.on("requestCompleted", function (rowCount, more) {
    res.json({ data: rows });
  });

  connection.execSql(request);
 
 })

 app.post("/new-product", (req, res) => {
   
  const insertString = "INSERT INTO Product (ProductID, ProductName, ProductType, Price, Description) VALUES (" + parseInt(Math.floor(Math.random() * 500000000) + 4) + ", '" + req.body.name + "', '" + req.body.cat + "', " + req.body.price + ", '" + req.body.desc + "');";
  request = new Request(insertString, function(err) {  
    if (err) {  
        console.log(err);
    }  
  });

  request.on("requestCompleted", function (rowCount, more) {
    res.status(200).send();
  });

  connection.execSql(request);
})

 app.post("/edit-product", (req, res) => {

    const updateString = "UPDATE Product SET ProductName = '" + req.body.name + "', ProductType = '" + req.body.cat + "', Price = " + req.body.price + ", Description = '" + req.body.desc + "' WHERE ProductID = '" + req.body.id + "';";
    request = new Request(updateString, function(err) {  
      if (err) {  
          console.log(err);
      }  
    });

  request.on("requestCompleted", function (rowCount, more) {
    res.status(200).send();
  });

  connection.execSql(request);
 
 })

 app.post("/delete-product", (req, res) => {

    const insertString = "DELETE FROM Product WHERE ProductID = '" + req.body.id + "';";
    request = new Request(insertString, function(err) {  
      if (err) {  
          console.log(err);
      }  
    });

  request.on("requestCompleted", function (rowCount, more) {
    res.status(200).send();
  });

  connection.execSql(request);
 
 })

// END OF NATHAN'S ROUTES

// BEGINNING OF JOSH'S ROUTES


// END OF JOSH'S ROUTES

// BEGINNING OF HESTON'S ROUTES
app.get("/department", (req, res) => {
    
  request = new Request("SELECT * FROM Employee;", function(err) {  
    if (err) {  
        console.log(err);
    }  
  });

  let rows = [];
  request.on('row', function(columns) { 
    let jsonData = {};
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        jsonData[column.metadata.colName] = column.value;
      }  
    });  
    rows = rows.concat(jsonData);
  });  

  request.on("requestCompleted", function (rowCount, more) {
    res.json({ employees: rows });
  });

  connection.execSql(request);
  
});

app.get("/reporting", (req, res) => {
    
  request = new Request("SELECT * FROM RecentPurchaseReport", function(err) {  
    if (err) {  
        console.log(err);
    }  
  });

  let products = [];
  request.on('row', function(columns) { 
    let jsonData = {};
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        jsonData[column.metadata.colName] = column.value;
      }  
    });  
    products = products.concat(jsonData);
  });

  let purchases = [];
  request.on('row', function(columns) { 
    let jsonData = {};
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        jsonData[column.metadata.colName] = column.value;
      }  
    });  
    purchases = purchases.concat(jsonData);
  });

  let receipt = [];
  request.on('row', function(columns) { 
    let jsonData = {};
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        jsonData[column.metadata.colName] = column.value;
      }  
    });  
    receipt = receipt.concat(jsonData);
  });


  request.on("requestCompleted", function (rowCount, more) {
    res.json({ product: products, history: purchases, purchase:receipt });
  });

  connection.execSql(request);
  
});

app.get("/marketing", (req, res) => {
    
  request = new Request("SELECT * FROM Employee;", function(err) {  
    if (err) {  
        console.log(err);
    }  
  });

  let rows = [];
  request.on('row', function(columns) { 
    let jsonData = {};
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        jsonData[column.metadata.colName] = column.value;
      }  
    });  
    rows = rows.concat(jsonData);
  });  

  request.on("requestCompleted", function (rowCount, more) {
    res.json({ employees: rows });
  });

  connection.execSql(request);
  
});

// END OF HESTON'S ROUTES


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});