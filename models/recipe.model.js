const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  kitchen: {
    type: String,
  },
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
  },

  intructions: {
    type: String,
  },
});

const Recipe = model('recipe', recipeSchema);

module.exports = Recipe;

// let data = {
//   recipes: [
//     {
//       name: "",
//       image: "",
//       descrition: "",
//       cuisine: "",
//       subRecipes: [
//         {
//           recipeName: rice,
//           ingredients: [
//             {
//               name: "",
//               amount: "",
//             },
//           ],
//         },
//       ],
//       intructions: ["dhbjds", "dvgfdg"],
//       rating: "",
//       tags: ["", "", ""],
//     },
//   ],
// }
