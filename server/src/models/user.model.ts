import Mongoose from 'mongoose';
import { type Snowflake } from '@boatgame-io/id-utils';

interface UserDoc extends Mongoose.Document {
    created: Date
    id: Snowflake

    banned: boolean
    rank: `USER` | `EXPERT` | `ADMIN`

    pantry: string[]
    cookbook: string[]

    username: string
    email: string
    password: string

    creationIP: string
    lastIP: string

    token: string
}

enum UserRank {
    User,
    Expert,
    Admin
}

const UserSchema = new Mongoose.Schema({
    created: { type: Date, required: true },
    id: { type: String, required: true, unique: true },

    banned: { type: Boolean, required: false, default: false },
    rank: { type: Number, required: false, default: UserRank.User },

    pantry: { type: Array, required: false, default: [] },
    cookbook: { type: Array, required: false, default: [] },

    username: { type: String, required: true, maxlength: 32 },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: true },

    creationIP: { type: String, required: false },
    lastIP: { type: String, required: false },

    token: { type: String, required: true, unique: true }
});

const User = Mongoose.model<UserDoc>(`User`, UserSchema);

export {
    User,
    type UserDoc,
    UserRank
};
