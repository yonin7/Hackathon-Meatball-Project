const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  cuisine: {
    type: String,
  },
  subRecipes: {
    type: [
      {
        recipeName: String,
        ingredients: [
          {
            name: String,
            amount: String,
          },
        ],
      },
    ],
  },

  intructions: {
    type: [String],
  },
  rating: {
    type: Number,
  },
  tags: {
    type: [String],
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
