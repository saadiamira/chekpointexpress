const express =require ('express')
const path=require ('path')
const app =express ()
const date=new Date();
const middle = (req,res,next) => {
if (date.getHours()<9||date.getHours()>17||date.getDay()==0||date.getDay()==6)
res.sendFile(path.join(__dirname,"public","close.jpeg"))
else
next()

};
app.use(middle)

app.use(express.static(path.join(__dirname,'public')))
app.listen(5000)

