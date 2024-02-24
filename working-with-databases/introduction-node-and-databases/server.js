const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

const start = async () => {
    try {
        await client.connect();
        console.log('Соединение установлено...');
    } catch(e) {
        console.log(e);
    }
}

start();