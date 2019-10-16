import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    scraps: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);
export default model;
