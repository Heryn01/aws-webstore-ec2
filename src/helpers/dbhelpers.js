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
            encrypt: true,
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
  
    function executeStatement() {  
        request = new Request("SELECT * Product;", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);  
