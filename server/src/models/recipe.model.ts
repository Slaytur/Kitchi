import Mongoose from 'mongoose';

interface RecipeDoc extends Mongoose.Document {
    name: string
    id: number
    minutes: number
    contributor_id: number
    tags: number
    nutrition: number[]
    n_steps: number
    steps: number
    description: string
    ingredients: string
    n_ingredients: number
}

const RecipeSchema = new Mongoose.Schema({
    name: { type: String, required: false },
    id: { type: Number, required: false },
    minutes: { type: Number, required: false },
    contributor_id: { type: Number, required: false },
    tags: { type: Number, required: false },
    nutrition: { type: Array, required: false },
    n_steps: { type: Number, required: false },
    steps: { type: Number, required: false },
    description: { type: String, required: false },
    ingredients: { type: String, required: false },
    n_ingredients: { type: Number, required: false }
});

const Recipe = Mongoose.model<RecipeDoc>(`Recipes`, RecipeSchema);

export {
    Recipe,
    type RecipeDoc
};
