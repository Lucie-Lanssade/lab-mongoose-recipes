const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
  },

  ingredients: [Schema.Types.String],

  cuisine: {
    type: String,
    required: true,
  },

  dishType: {
    type: String,
    enum: [
      'breakfast',
      'main_course',
      'soup',
      'snack',
      'drink',
      'dessert',
      'other',
    ],
  },

  Image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg',
  },

  duration: {
    type: Number,
    min: 0,
  },

  creator: Schema.Types.String,

  created: { type: Date, default: new Date() },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
