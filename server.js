const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL =
  "mongodb+srv://my-user:myuser@musicrequests-nrhiw.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "music";

app.listen(port, () => {
  MongoClient.connect(CONNECTION_URL, (error, client) => {
    if (error) throw error;
    database = client.db(DATABASE_NAME);
    collection = database.collection("request");
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let database, collection;

app.get("/questions", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send({ express: result });
  });
});

app.post("/post", (request, response) => {
  collection.insertOne(request.body, (error, result) => {
    if (error) return result.status(500).send(error);
    response.send({ response: result.ops[0] });
  });
});

app.delete("/questions", (req, res) => {
  collection.deleteMany({}, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});

app.delete("/questions/:id", (req, res) => {
  collection.deleteOne({ _id: ObjectId(req.params.id) }, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}



// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // API calls
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.post('/api/world', (req, res) => {
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

// app.listen(port, () => console.log(`Listening on port ${port}`));
