import dotenv from 'dotenv';
import express from 'express'; 
import router from './services'; 
import bodyParser from 'body-parser'; 
import cors from 'cors';
import compression from 'compression';
import { connectToDatabase } from './database/connect';
import registerTask from './lib/utils/registerTask';
import fetchPost from './tasks/fetchPosts';


dotenv.config();

const app = express();

connectToDatabase();


app.use(compression());


app.options('*', cors());
app.use((req: any, res: any, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token'
  );
  next();
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

const port = process.env.PORT || 8000;

// schedule a job
registerTask("fetch-posts", "* * * /1 * *", async () => await fetchPost());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
