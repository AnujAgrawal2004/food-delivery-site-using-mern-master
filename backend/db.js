const mongoose = require('mongoose');

const mongoURI = "mongodb://anujagrawalcs20:53euamGLA*@ac-vz1pnut-shard-00-00.l3faz6l.mongodb.net:27017,ac-vz1pnut-shard-00-01.l3faz6l.mongodb.net:27017,ac-vz1pnut-shard-00-02.l3faz6l.mongodb.net:27017/foodDelivery?replicaSet=atlas-czan42-shard-0&ssl=true&authSource=admin";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    
    const foodData = await mongoose.connection.db.collection("food").find({}).toArray();
    const foodCategoryData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

    global.food = foodData;
    global.foodCategory = foodCategoryData;

    console.log(global.food);
    console.log(global.foodCategory);
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoDB;
