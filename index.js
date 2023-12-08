import  express from "express";
import mongoose from "mongoose";
import Tasks from './tasksmodel.js';
const app=express()
app.use(express.json())
const port =5555;
app.get('/',async(req, res)=>{
    const tasks = await Tasks.find()
    res.json(tasks)
    
})
app.post('/',async(req, res)=>{
    const{ title,date,finished}= req.body;
    const newTask = new Tasks({
        title,date,finished

 } );
 const task = await newTask.save();
 res.json(task)
})
app.put('/:id',async(req, res)=>{
    const{ title,date,finished}= req.body;
    const newTask = new Tasks({
        title,date,finished }
        );
        const task = await Tasks.findById(req.params.id)
        if (task){
            task.title =title
            task.date = date
            task.finished = finished
            const updateTask = await task.save();
            res.json(updateTask)
        }

 res.json(updateTask)
})
app.delete('/:Id',async(req, res)=>{
    const task =await Tasks.findByIdAndDelete(req.params.Id)
    res.json({message:"task deleted!"})      
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
mongoose.connect("mongodb+srv://fartamoha88:fartamoha88@ecomerce.s4vdfkg.mongodb.net/mytasksretryWrites=true&w=majority").then(()=>{
 console.log('connected to database');
})
