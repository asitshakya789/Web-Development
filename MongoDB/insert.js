const { MongoClient } = require('mongodb'); // Ensure MongoClient is imported
const dsConnect = require('./mongodb'); // Assuming this exports a function to connect to MongoDB
const database = 'Personal-website';
const url = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string

const insert = async () => {
    try {
        const db = await dsConnect(); // Connect to the database
        const collection = db.collection('Information'); // Corrected from 'bdb' to 'db'

        const res = await collection.insertOne({ // Use insertOne for a single document
            "name": "John",
            "age": 30,
            "city": "New York"
        });

        if (res.acknowledged) {
            console.log("Data inserted successfully");
        }
    } catch (error) {
        console.error("Error inserting data:", error);
    }
};

// Call the insert function
insert();