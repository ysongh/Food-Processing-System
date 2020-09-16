const mongoose = require("mongoose");

const mongoURI = require('./keys').mongoURI;

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;