const Recipe = require('../models/recipe.model');

const addRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  try {
    await recipe.save();
    res.status(201).send(recipe);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    // logger.info(`${req.user.name} ask for recier ${recipes}`); - if we will do users.
    res.send(recipes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(id.params);
    if (!recipe) {
      return res.status(400).send({ error: 'Cannot find recipe' });
    }
    res.send(recipe);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
};
