const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

// router.get('/', (req, res) => {
//   recipeController.getRecipes(req, res);
// });

// module.exports = router;

router
  .get('/', (req, res) => {
    //get all recipes
    recipeController.getRecipes(req, res);
  })
  .get('/:id', (req, res) => {
    //get specific recipe
    recipeController.getRecipe(req, res);
  })
  .post('/', (req, res) => {
    //create Recipe
    recipeController.addRecipe(req, res);
  });

module.exports = router;
