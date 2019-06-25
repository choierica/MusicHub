const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://my-user:myuser@musicrequests-nrhiw.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "music";

app.listen(port, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("request");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let database, collection;

// let list =
//     ["Fur Elise by Beethoven",
//         "Liebestraum by Liszt",
//         "Rondo in A minor K.511 by Mozart"];

app.get("/questions", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send({express: result});
    });
});

// app.post('/post', (req, res) => {
//     const username = req.body.body;
//     list = list.concat(username);
//     res.send({response: username});
// });
app.post("/post", (request, response) => {
    collection.insertOne(request.body, (error, result) => {
        if(error) {
            return result.status(500).send(error);
        }
        response.send({response: result.ops[0]});
    });
});

app.delete('/questions/:id', (req, res) => {
    // list.slice();
    // list.splice(req.params.id, 1);
    // collection.deleteOne({"_id": ObjectId(req.params.id)});
    collection.deleteOne({"_id": ObjectId(req.params.id)}, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        console.log(result);
    });
    // res.send({response: list});
});