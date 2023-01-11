import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 6,
  },
  lastName: {
    type: String,
    maxLength: 20,
    trim: true,
    default: 'Last Name',
  },
  location: {
    type: String,
    maxLength: 20,
    trim: true,
    default: 'My City',
  },
});

UserSchema.pre('save', async function () {
  console.log(this.password);
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model('User', UserSchema);
