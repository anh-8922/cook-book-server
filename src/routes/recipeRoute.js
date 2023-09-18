import express from 'express'
import {handleListRecipe,
        handleAddRecipe,
        handleEditRecipe,
        handeleDeleteRecipe,
        handleSearchRecipe} from '../controllers/recipeController.js'
//import multer from "multer";


const router = express.Router()

router.get('/list', handleListRecipe)
//router.get('/search', handleSearchRecipe)
//router.post('/add', upload.single('image'), handleAddRecipe)
//router.put('/edit', upload.single('image'),handleEditRecipe)
//router.delete('/delete/:id', handeleDeleteRecipe)

export default router