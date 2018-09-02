const mongoose = require("mongoose");
const Product = mongoose.model("products");

module.exports = app => {
  app.get("/api/products", (req, res) => {
    const { limit, skip, category } = req.query;

    var query = {};

    if (category) {
      query.category = game;
    }

    console.log(query);
    try {
      Product.find(
        { ...query },
        null,
        { skip: parseInt(skip), limit: parseInt(limit) },
        (err, docs) => {
          if (err) {
            console.log(err);
            res.send({ error: "400" });
          } else {
            const result = {
              amount: docs.length,
              documents: docs
            };
            res.send(result);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
  app.get("/api/products/amount", (req, res) => {
    const category = req.query.category;
    var query = {};

    if (category) {
      query.category = game;
    }
    Product.countDocuments({...query}, (err,c)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(c);
            result = {
                count: c
            }
            res.send(result);
        }
    })


  });



  app.get("/api/products/:id", (req, res) => {
    try {
      console.log(req.query);
      Product.findById(req.params.id, null, (err, docs) => {
        if (err) {
          console.log(err);
          res.send({ error: "400" });
        } else {
          res.send(docs);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
};
