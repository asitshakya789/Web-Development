const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Personal-website';
const client = new MongoClient(url);

 async function getData() {
    
    let result = await client.connect();
    const bdb = result.db(database);
    const collection = bdb.collection('Information');

    // let data = await collection.find({}).toArray();
    // console.log(data);

}

getData().then((resp )=>{
    console.log(resp.find().toArray());
})