const Express =require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const dModel=require("./models/doctorModel")

Mongoose.connect("mongodb+srv://college:college12345@cluster0.nk3uqez.mongodb.net/doctordb?retryWrites=true&w=majority",{useNewurlParser:true})


var app=Express()
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
res.send("welcome")
})

app.post("/home",async(req,res)=>{
    let data=new dModel(req.body)
    console.log(data)
    await data.save()
    res.send(data)
    })

    app.get("/viewall",async(req,res)=>{
        let data=await dModel.find()
        res.send(data)
        })

        app.post("/search",async(req,res)=>{
            let data=await dModel.find()
            res.send(data)
            })

app.listen(3000)