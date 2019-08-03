const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})

const insert={
    name:process.argv[2],
    age:parseInt(process.argv[3]),
    city:process.argv[4]    
}
connection.query(
    `
    INSERT INTO person(name,age,city) VALUES(
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`,
    function(err,result){
        if(err)
        {
            console.error(err)
        }
        else{
            console.log('inserting of data is successful')
        }
        connection.close();
    }
)