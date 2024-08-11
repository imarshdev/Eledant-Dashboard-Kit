// model for new and registered users
const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: String,
  password: String,
});
// colletion with the schema
const FormDataModel = mongoose.model("log_reg_form", FormDataSchema);

module.exports = FormDataModel;

// ×͜× 