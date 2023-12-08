import mongoose from "mongoose";
const taskSchema = mongoose.Schema( {
  title:{
    type:String,
    required:[true, 'Title is required'],
  }  ,
  date:{
    type:String,
    required:[true, 'Date is required'],
  }  ,
  isFinited:{
    type:Boolean,
    default:false
  }
  
})
const Tasks =mongoose.model('tasks',taskSchema)
export default Tasks