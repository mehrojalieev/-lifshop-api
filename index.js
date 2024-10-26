const express = require("express")
require("dotenv").config()
const cors = require("cors")

const mongoose = require("mongoose")

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5050


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error !!!:'));
db.once('open', () => console.log('Connected to MongoDB !'));

app.use("/api/product", require("./routes/products"))

app.listen(PORT,() => console.log('Server started on port ' + PORT))