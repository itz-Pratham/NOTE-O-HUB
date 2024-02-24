const express=require("express");
const path=require("path")
const app=express();
const pug= require("pug");
const Register=require("./models/studentdetails.js")
require("./db/conn");
const port= 5000;

const static_path=path.join(__dirname,"../templates/views")
const static_path1=path.join(__dirname,"../public")
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.use(express.static(static_path1));
app.set("view-engine","pug");
app.set("views",static_path);

app.get("/",(req,res)=>{
    res.render("home.pug")
});
app.get("/home",(req,res)=>{
    res.render("home.pug")
});
app.get("/signup",(req,res)=>{
    res.render("signup.pug")
});
app.get("/login",(req,res)=>{
    res.render("login.pug")
});
app.get("/myteam",(req,res)=>{
    res.render("myteam.pug")
});
app.get("/delhi",(req,res)=>{
    res.render("delhi.pug")
});
app.get("/cse",(req,res)=>{
    res.render("CSE.pug")
});
app.get("/ap1",(req,res)=>{
    res.render("AP1.pug")
});
app.get("/bba",(req,res)=>{
    res.render("BBA.pug")
});
app.get("/ece",(req,res)=>{
    res.render("ECE.pug")
});
app.get("/it",(req,res)=>{
    res.render("IT.pug")
});
app.get("/mba",(req,res)=>{
    res.render("mba.pug")
});


app.post("/signup",async(req,res)=>{
    try {
        const password=req.body.Password
        const cpassword=req.body.ConfirmPassword
        if(password!==cpassword){
            res.send("passwords are not matching")
        }
        else{
            const registerStudent=new Register({
                DisplayName:req.body.DisplayName,
                Username:req.body.Username,
                Status:req.body.Status,
                Email:req.body.Email,
                Password:req.body.Password,
                ConfirmPassword:req.body.ConfirmPassword,
                College:req.body.College,
                PassingYear:req.body.PassingYear,      
                Branch:req.body.Branch,
                           
            })
            const registered=await registerStudent.save()
            res.status(201).render("signup.pug")

        }
    } catch (error) {
        res.status(400).send(error);
    }
});
app.post("/login", async(req, res) => {
    try {
        const Email = req.body.Email;
        const Password = req.body.Password;
        const userEmail = await Register.findOne({ Email: Email })
        if (userEmail.Password === Password) {
            res.render('home.pug');
        }
        else {
            res.send('invalid details')
        }
    } catch (error) {
        res.status(400).send("invalid details")
    }
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
