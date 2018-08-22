const mongoose = require("mongoose");
const Card = mongoose.model("tradingcards");

module.exports = app =>{

    app.get('/api/cards',(req,res)=>{
        const {limit,skip} = req.query;
        try{
        console.log(req.query);
        Card.find({},null,{skip:parseInt(skip),limit:parseInt(limit)},(err,docs)=>{
            if(err){
                console.log(err);
                res.send({error:'400'});
            }
            else{
               res.send(docs);
            }
        });
    }
    catch(error){
        console.log(error);
        res.send({error:'400'});
    }
});

    app.get('/api/cards/category',(req,res)=>{
        const {limit,skip,game,set} = req.query;
      
        var query = {};

        if(game){
            query.game = game;
        }
        if(set){
            query.set = set;
        }

       
        console.log(query);
        try{
      
        Card.find({...query},null,{skip:parseInt(skip),limit:parseInt(limit)},(err,docs)=>{
            if(err){
                console.log(err);
                res.send({error:'400'});
            }
            else{
               res.send(docs);
            }
        });
    }
    catch(error){
        console.log(error);
    }
    });

    app.get('/api/cards/:id',(req,res)=>{
        try{
        console.log(req.query);
        Card.findById(req.params.id,null,(err,docs)=>{
            if(err){
                console.log(err);
                res.send({error:'400'});
            }
            else{
               res.send(docs);
            }
        });
    }
    catch(error){
        console.log(error);
    }
    });
};