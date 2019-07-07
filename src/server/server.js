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
        if(error) throw error;
        database = client.db(DATABASE_NAME);
        collection = database.collection("request");
    });
});
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let database, collection;


app.get("/questions", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send({express: result});
    });
});

app.post("/post", (request, response) => {
    collection.insertOne(request.body, (error, result) => {
        if(error) return result.status(500).send(error);
        response.send({response: result.ops[0]});
    });
});

app.delete('/questions', (req, res) => {
    collection.deleteMany({}, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});

app.delete('/questions/:id', (req, res) => {
    collection.deleteOne({"_id": ObjectId(req.params.id)}, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});
