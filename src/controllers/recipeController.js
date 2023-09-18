import Recipe from "../model/recipe.js"

export const handleListRecipe = async (req, res) => {
    try{
        const recipes = await Recipe.find()
        .select("-__v")
        console.log("Recipe list:" , recipes)
        res.send(recipes)
    } catch (error) {
        console.log('Error list recipes:', error.message)
        res.send('Error in listing recipes' + error.message)
    }

}

export const handleAddRecipe = async (req, res) => {
  console.log("handleAddRecipe:", req.body);

  try {
    let {title, category, ingredients, instructions, image } = req.body;
    
    if (req.file) {
      image  = req.file.filename;
    }
    const addNewRecipe = await Recipe.create({
      title,
      category,
      ingredients,
      instructions,
      image,
    });

    console.log("New Recipe added:", addNewRecipe);
    res.send('New recipe added to the DB');
  } catch (error) {
    console.log("Error adding recipe:", error.message);
    res.send('Error in adding recipe: ' + error.message);
  }
};


export const handleEditRecipe = async (req, res) => {
    try {
      const { _id, title, category, ingredients, instructions } = req.body;
      let image = req.body.image;
  
      
      if (req.file) {
        image = req.file.filename; 
      }
  
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        _id,
        {
          title,
          category,
          ingredients,
          instructions,
          image,
        },
        { new: true }
      );
  
      console.log("Updated Recipe:", updatedRecipe);
      res.send("Recipe updated in the DB");
    } catch (error) {
      console.log("Error updating recipe:", error.message);
      res.send("Error in updating recipe: " + error.message);
    }
  };
  

export const handeleDeleteRecipe = async (req, res) => {
    console.log("Delete recipe:", req.params)

    try{
        const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id)
        console.log('Delete recipe:', deleteRecipe)
        res.send("Recipe deleted from the DB")
    } catch (error) {
        console.log('Error deleting recipe:', error.message)
        res.send('Error in deleting recipe:', error.message)
    }

}


export const handleSearchRecipe = async (req, res) => {
    try {
      const text = req.query.text;
      console.log("Search text:", text);
      if (!text) {
        return res.send({ success: false, error: "No search text provided" });
      }
      const regExp = new RegExp(text, "i");
  
      const searchRecipes = await Recipe.find({
        $or: [
          { title: regExp },
          { ingredients: regExp },
          { instructions: regExp }
        ]
      })
        .select("-__v");
  
      res.send({ success: true, searchRecipes });
      console.log(searchRecipes)
    } catch (error) {
      console.log("Search error:", error.message);
      res.send({ success: false, error: error.message });
    }
  };
  

  //image  = req.file.filename;