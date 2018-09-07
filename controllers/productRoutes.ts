import mongoose from 'mongoose';
import {Router, Request, Response} from 'express';
import IQueryOptions from  '../interfaces/IQueryOptions'
const Product = mongoose.model("products");

const router:Router = Router();
  router.get("/api/products", (req:Request, res:Response) => {
    const { limit, skip, category } = req.query;

    
    var query:IQueryOptions = {};

    if (category) {
      query.category = category;
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


  router.get("/api/products/amount", (req:Request, res:Response) => {
    const {category} = req.query;
    var query:IQueryOptions = {};

    if (category) {
      query.category = category;
    }
    Product.countDocuments({...query}, (err,c)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(c);
            const result = {
                count: c
            }
            res.send(result);
        }
    })


  });



  router.get("/api/products/:id", (req:Request, res:Response) => {
    try {
    
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

  export const ProductController: Router = router;