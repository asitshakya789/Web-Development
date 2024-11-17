const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databaseName = 'Personal-website';

async function getData() {
    try {
        await client.connect();
        console.log('Connected to the database');

        const db = client.db(databaseName);
        const collection = db.collection('Information');
        
        const resp = await collection.find({}).toArray();
        console.log(resp);
    } catch (error) {
        console.error('Error connecting to the database or fetching data:', error);
    } finally {
        await client.close();
        console.log('Connection to the database closed');
    }
}

getData();