const route = require("express").Router();
const db = require("../db");

route.get("",(req,res)=>
{
    db.getAllPerson()
        .then((persons)=>
        {

        })
        .catch((err)=>
        {
            res.send(err);
        })
})

route.post("",(req,res)=>
{
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
        .then(()=>
        {

        })
        .catch((err)=>
        {
            res.send(err);
        })
})

module.exports = {
    route
}