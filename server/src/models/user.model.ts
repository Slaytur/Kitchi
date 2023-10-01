import Mongoose from 'mongoose';
import type { Snowflake } from '@boatgame-io/id-utils';

interface UserDoc extends Mongoose.Document {
    created: Date
    id: Snowflake

    banned: boolean
    rank: `USER` | `EXPERT` | `ADMIN`

    pantry: string[]
    cookbook: string[]

    username: string
    displayName: string

    email: string
    password: string
    avatar: string

    creationIP: string
    lastIP: string

    token: string

    settings: {
        skillLevel: number
        restrictions: Record<string, boolean>
        interests: Record<string, boolean>
    }
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

    username: { type: String, required: true, unique: true, maxlength: 20 },
    displayName: { type: String, required: true, unique: true, maxlength: 20 },

    email: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false, default: `/assets/img/misc/burger_pfp.png` },

    creationIP: { type: String, required: false },
    lastIP: { type: String, required: false },

    token: { type: String, required: true, unique: true },

    settings: {
        skillLevel: { type: Number, required: false, default: 0 },
        restrictions: { type: Object, required: false, default: {} },
        interests: { type: Object, required: false, default: {} }
    }
});

const User = Mongoose.model<UserDoc>(`User`, UserSchema);

export {
    User,
    type UserDoc,
    UserRank
};
