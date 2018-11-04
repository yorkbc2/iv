const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const SALT = 11;
const userSchema = new Schema({
    name: {
        first: {type: String, required: true},
        last: {type: String, required: true}
    },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    number: {type: String, required: false},
    interests: [{type: String}],
    address: {type: String, required: false},
    born_at: {
        day: {type: Number, required: false},
        month: {type: Number, required: false},
        year: {type: Number, required: false}
    }
});

userSchema.pre('save', function (next) {
	let user = this;

	if (!user.isModified("password")) return next();
	bcrypt.genSalt(SALT, (err, salt) => {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) return next(err);

			user.password = hash;
			next();	
		});
	});
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
