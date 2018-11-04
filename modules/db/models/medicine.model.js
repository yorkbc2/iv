const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineCardSchema = new Schema({
    user_id: {type: String, required: true, unique: true},
    diagnoses: [{
        name: {type: String},
        doctor: {
            name: {type: String},
            ambulance: {type: String}
        },
        medicines: [{
            name: {type: String},
            dose: {type: String}
        }],
        date_from: {type: Number},
        date_to: {type: Number}
    }],
    alergics: [{
        name: {type: String}
    }]
});

const MedicineCardModel = mongoose.model("MedicineCard", medicineCardSchema, "medicine-cards");

module.exports = MedicineCardModel;