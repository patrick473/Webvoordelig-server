
import {Router, Request, Response} from 'express';
import Database from '../models/Database'
const router:Router = Router();
  router.get("/api/products", async(req:Request, res:Response) => {
    const { limit, skip, category } = req.query;
    const results = await Database.Tradingcard.findAll()
   res.send(results)

  });


  router.get("/api/products/amount", (req:Request, res:Response) => {
    const {category} = req.query;
   


  });



  router.get("/api/products/:id", (req:Request, res:Response) => {
    
  });

  export const ProductController: Router = router;