import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load variables from file .env.

export const connectToDatabase = async () => {
  try {
    mongoose.connection.on('connecting', () => {
      console.log(`MongoDB: connecting.`);
    });
    mongoose.connection.on('connected', () => {
      console.log('MongoDB: connected.');
    });
    mongoose.connection.on('disconnecting', () => {
      console.log('MongoDB: disconnecting.');
    });
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB: disconnected.');
    });
    if (
      mongoose.connection.readyState !== 1 &&
      mongoose.connection.readyState !== 2
    ) {
      await mongoose.connect(process.env.DATABASE_MONGO as string);
    }
  } catch (error: any) {
    console.error(process.env.DATABASE_MONGO);
    console.error('Error connecting to MongoDB: ', error.message);
  }
};
