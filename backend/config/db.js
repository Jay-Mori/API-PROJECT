const mongoose = require('mongoose');   

const ConnectToDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to database successfully");
    }
    
    catch (error) {
        console.log("Error connecting to database", error);
    }
}

module.exports = ConnectToDB;