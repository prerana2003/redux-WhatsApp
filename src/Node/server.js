const mysql = require('mysql') 
import { createConnection } from 'mysql';
const connection = createConnection({
    host: "localhost",
    // port: 3306,
    database: "whatsapp",
    user: "root",
    password: "PRE@div123"
});

connection.connect(function (err) {
    if(err){
        console.log("error occured while connecting")
    }
    else{
        console.log("successfully connected with mysql")
    }
})