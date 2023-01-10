import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please provide name'],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    require: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Please provide password'],
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
    default: 'my city',
  },
});

export default mongoose.model('User', UserSchema);
