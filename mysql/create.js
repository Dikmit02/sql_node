const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS person(
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL, 
        city VARCHAR(30)
        )
    `,
    function(err,result){
        if(err){
            console.error(err)
        }
        else{
            console.log("Table craeted successfully");
        }
        connection.close();
    }
)