const mongoose = require('mongoose').default;
const TestModel = require('./testModel');


//DB connection
mongoose.set("strictQuery", false);

const mongoDB = 'mongodb://127.0.0.1/my_database'; //GOT FROM TUTOR

// Create an instance of model SomeModel
const test_instance = new TestModel({ name: "awesome" });

async function connectMongoose() {
    try{
        await mongoose.connect(mongoDB);
        //CREATE
        // Save the new model instance asynchronously
        // await test_instance.save();
        // or
        // await TestModel.create({ name: "also_awesome" });

        //READ
        // TestModel.find({name: 'also_awesome'}, "name").exec();
        //or
        // find all athletes that play tennis
        const query = TestModel.find({name: 'also_awesome'},);

        // selecting the 'name' and 'age' fields
            query.select("name");

        // limit our results to 5 items
            query.limit(5);

        // sort by age
        //     query.sort({ age: -1 }); //no age in our model

        // execute the query at a later time
            const answer = await query.exec();

            console.log(answer)
    } catch(error){
        console.log(error)
    }
}

module.exports = connectMongoose;