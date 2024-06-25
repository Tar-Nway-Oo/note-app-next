import { error } from "console";
import mongoose from "mongoose";

export default async function connectToDB() {
     
   mongoose.connect("mongodb+srv://tar-nway-oo:tno54321@atlascluster.wub9jyu.mongodb.net/")
   .then(() => {
      console.log("Database connected.");
   })
   .catch((error) => {
      console.log(error);
   });

}