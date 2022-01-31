const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

// router.get('/', (req, res) => {
//   recipeController.getRecipes(req, res);
// });

// module.exports = router;

router
  .get('/', (req, res) => {
    console.log(req);
    //get all recipes
    recipeController.getRecipe(req, res);
  })
  .get('/:id', (req, res) => {
    // console.log(req.params);
    //get specific recipe
    recipeController.getRecipe(req, res);
  })
  .post('/', (req, res) => {
    //create Recipe
    recipeController.addRecipe(req, res);
  });

module.exports = router;
