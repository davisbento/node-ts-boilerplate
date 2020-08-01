import mongoose from 'mongoose';

const uri = process.env.MONGODB || 'mongodb://localhost:27017/myapp';

const options: mongoose.ConnectionOptions = {
  useNewUrlParser: true
};

export const createConnection = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log('connect to mongo');
  } catch (err) {
    console.log('error', err);
  }
};
