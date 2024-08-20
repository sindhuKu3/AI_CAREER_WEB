const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    studentStatus: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    exam: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const virtual = studentSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
studentSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
