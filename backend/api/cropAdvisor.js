const express = require('express');
const bodyParser = require('body-parser');
const { DecisionTree } = require('decision-tree');

const app = express();
const router = express.Router();
app.use(bodyParser.json());

// Load the data into a variable
const data = [
  { location: 'Mumbai', climate: 'Tropical', soil: 'Sandy', crop: 'Tomatoes' },
  { location: 'Delhi', climate: 'Semi-Arid', soil: 'Clay', crop: 'Corn' },
  // ...
];

// Train the decision tree algorithm using the data
const dt = new DecisionTree(data, 'crop', ['location', 'climate', 'soil']);

router.post('/', (req, res) => {
  const { location, climate, soil } = req.body;
  
  // Use the decision tree to make predictions
  const crops = dt.predict({ location, climate, soil });

  // Return the result as a response
  res.json({
    success: true,
    crops
  });
});

module.exports = router;
