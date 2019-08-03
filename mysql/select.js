const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})

connection.query(
    `SELECT * FROM  person
    `
    ,
    function(err,row,col){
        if(err){
            console.error(err)
        }
        else{
            console.log(row);
            console.log(col)
        }
        connection.close()
    }
)