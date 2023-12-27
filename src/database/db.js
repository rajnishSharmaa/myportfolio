import mongoose from "mongoose"


export const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: "next_project",
          });

        console.log("Database connected");
        // console.log(connection);

    } catch (error) {
        console.log("database not connected");
        console.log(error);

    }
}