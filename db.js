const mysql = require("mysql2");
const connection = mysql.createConnection({
    user:"myuser",
    password:"mypass",
    database:"mydatabase",
    host:"localhost"
});

function getAllPerson()
{
    return new Promise(function(resolve,reject)
    {
        connection.query(
            `SELECT * FROM persons`,
            function(err,row,col)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve(row);
                }
            }
        )
    })
}

function addNewPerson(name,age,city)
{
    return new Promise(function(resolve,reject)
    {
        connection.query(
            `INSERT INTO persons(name,age,city) VALUES(?,?,?)`,
            [name,age,city],
            function(err,results)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve();
                }
            }
        )
    })
}

module.exports = {
    getAllPerson,
    addNewPerson
}