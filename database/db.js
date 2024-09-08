import mongoose from "mongoose";


export const Connection = async (username, password)=>{
    const URL = `mongodb://${username}:${encodeURIComponent(password)}@cluster0ecommerce-web-shard-00-00.3w838.mongodb.net:27017,cluster0ecommerce-web-shard-00-01.3w838.mongodb.net:27017,cluster0ecommerce-web-shard-00-02.3w838.mongodb.net:27017/?ssl=true&replicaSet=atlas-adjce0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0ecommerce-web`;
    try{
       await mongoose.connect(URL)
            //connect function
        console.log("database connected successfully");
    }catch(error){
        console.log("Error while connecting with the database",error.message);
    }
};

export default Connection;