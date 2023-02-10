const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)

  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })

  //iteration 2
  .then(async () => {
    const garlicBread = await Recipe.create({
      title: 'garlic bread',
      level: 'Amateur Chef',
      ingredients: ['flour', 'salt', 'butter', 'garlic', 'herbs'],
      cuisine: 'mediteranean',
      dishType: 'other',

      duration: 120,
      creator: 'Martha Stewart',
    });
    //iteration 3
    const arrayOfRecipes = await Recipe.insertMany(data);

    //iteration 4
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { title: 'Rigatoni alla Genovese' },
      { duration: 100 },
      { new: true }
    );

    //iteration 5 and 6
    const removed = await Recipe.deleteOne({ title: 'Carrot Cake' });
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  })
  .finally(() => {
    mongoose.connection.close();
  });
