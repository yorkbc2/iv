const mongoose = require("mongoose");
const User = require("./models/user.model");
const MedicineCard = require("./models/medicine.model");

module.exports = (function() {
    return {
        connect: function (uri) {
            mongoose.connect(uri, {
                useNewUrlParser: true
            });
        },
        models: {
            User,
            MedicineCard
        }
    };
}());