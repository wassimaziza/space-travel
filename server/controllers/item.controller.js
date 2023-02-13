
 const db = require("../database-mysql");


const selectAll = function (req, res) {  
  db.query("SELECT * FROM trip", (err, trip, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(trip);
    }
  });
};
 const deleteOne = function (req,res){
    db.query(`DELETE  FROM trip WHERE idTrip=?`, [req.params.id],(err,trip,fields) => {
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(trip);
          }
        });
      };
const addOne = function (req,res){
    db.query(`INSERT INTO trip (name,date,description,price,place,duration,image) VALUES (?,?,?,?,?,?,?)`,[req.body.name,req.body.date,req.body.description,req.body.price,req.body.place,req.body.duration,req.body.image], (err,trip,fields)=>{    
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).send(trip)
        }
    });
};
const updateOne = function (req,res){
    db.query(`UPDATE trip SET date=?,price=?,duration=? WHERE idTrip=?`,[req.body.date,req.body.price,req.body.duration,req.params.id],(err,trip,fields)=>{
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).send(trip)
        }
    });
};
const selectA = function (req, res) {  
  db.query("SELECT * FROM userInfo", (err, userInfo, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(userInfo);
    }
  });
};
const deleteO = function (req,res){
  db.query(`DELETE  FROM userInfo WHERE iduserInfo=?`, [req.params.id],(err,userInfo,fields) => {
      if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(userInfo);
        }
      });
    };
    const addO = function (req,res){
      db.query(`INSERT INTO userInfo(name,lastName,adress,password,seatNumber,trip_idTrip) VALUES (?,?,?,?,?,?)`,[req.body.name,req.body.lastName,req.body.adress,req.body.password,req.body.seatNumber,req.body.trip_idTrip], (err,userInfo,fields)=>{    
          if (err){
              res.status(500).send(err)
          } else {
              res.status(200).send(userInfo)
          }
      });
  };

module.exports = { selectAll,deleteOne,addOne,updateOne,selectA,deleteO,addO };

