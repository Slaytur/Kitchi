import Mongoose from 'mongoose';
import type { Snowflake } from '@boatgame-io/id-utils';

interface RecipeDoc extends Mongoose.Document {
    created: Date
    id: Snowflake

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    ingredients: Record<any, any>
    steps: string[]
}

const RecipeSchema = new Mongoose.Schema({
    created: { type: Date, required: true },
    id: { type: String, required: true, unique: true },

    name: { type: String, required: true },
    description: { type: String, required: false, default: `` },

    ingredients: { type: Object, required: false, default: {} },
    steps: { type: Array, required: false, default: [] }
});

const Recipe = Mongoose.model<RecipeDoc>(`Recipe`, RecipeSchema);

export {
    Recipe,
    type RecipeDoc
};
