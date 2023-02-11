const express = require('express');
const bodyParser = require('body-parser');
const DecisionTree = require('decision-tree');
const getLocation = require('./currentLoc');


const app = express();
const router = express.Router();
app.use(bodyParser.json());

// Load the data into a variable
const training_data = [
  { "location": "Mumbai", "climate": "Tropical", "soil": "Sandy", "crop": "Tomatoes" },
  { "location": "Delhi", "climate": "Semi-Arid", "soil": "Clay", "crop": "Corn" },
  { "location": "Bengaluru", "climate": "Tropical", "soil": "Red", "crop": "Rice" },
  { "location": "Hyderabad", "climate": "Tropical", "soil": "Black", "crop": "Cotton" },
  { "location": "Ahmedabad", "climate": "Arid", "soil": "Silty", "crop": "Groundnuts" },
  { "location": "Chennai", "climate": "Tropical", "soil": "Sandy", "crop": "Sugarcane" },
  { "location": "Kolkata", "climate": "Subtropical", "soil": "Alluvial", "crop": "Wheat" },
  { "location": "Pune", "climate": "Tropical", "soil": "Red", "crop": "Maize" },
  { "location": "Jaipur", "climate": "Arid", "soil": "Sandy", "crop": "Barley" },
  { "location": "Lucknow", "climate": "Subtropical", "soil": "Silty", "crop": "Potatoes" },
  { "location": "Guwahati", "climate":"Moderate", "soil":"Silty", "crop":"Rice"}
];

const test_data = [
  { "location": "Mumbai", "climate": "Tropical", "soil": "Sandy", "crop": "Tomatoes" },
  { "location": "Delhi", "climate": "Semi-Arid", "soil": "Clay", "crop": "Corn" },
  { "location": "Kolkata", "climate": "Subtropical", "soil": "Alluvial", "crop": "Wheat" },
  { "location": "Lucknow", "climate": "Subtropical", "soil": "Silty", "crop": "Potatoes" }
];

var class_name = "crop";
var features = ["location", "climate", "soil"]
// Train the decision tree algorithm using the data
// const dt = new DecisionTree(data, 'crop', ['location', 'climate', 'soil']);
var dt = new DecisionTree(class_name, features);
dt.train(training_data);

// getLocation().then(location => {
//   console.log(location);
// }).catch(error => {
//   console.error(error);
// });


router.post('/', async(req, res) => {

  const location = await getLocation()
  const {climate, soil } = req.body;
  
  // Use the decision tree to make predictions
  const crops = dt.predict({ location: location.city, climate, soil });

  // Return the result as a response
  res.json({
    success: true,
    crops
  });
});

module.exports = router;
