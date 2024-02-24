const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

const start = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    await client.db().createCollection('users')
    const users = client.db().collection('users')

    // Create
    const insertResult = await users.insertOne({ name: 'Raven Dexter', age: 30 });
    console.log('Cread:', insertResult.insertedId);

    // Read
    const findResult = await users.findOne({ name: 'Raven Dexter' });
    console.log('Found:', findResult);

    // Update
    const updateResult = await users.updateOne({ name: 'Raven Dexter' }, { $set: { age: 35 } });
    console.log('Updated:', updateResult.modifiedCount);

    // Delete
    const deleteResult = await users.deleteOne({ name: 'Raven Dexter' });
    console.log('Document deleted:', deleteResult.deletedCount);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

start();
