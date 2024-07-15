import Parser from 'rss-parser';
import PostsModel from '../../Posts/model';
import type { Response } from '../..';
import dotenv from 'dotenv';

dotenv.config();

const parser = new Parser();


const parse = async (req: any, res: Response) => {
  console.log('parse ', process.env.RSS_FEED)
  try {
    return await parser.parseURL(
      process.env.RSS_FEED as string,
      async (err: any, feed) => {
        if (err) {
          return res.json({ message: err.message, data: {} });
        } else {
          const { items } = feed;

          await PostsModel.insertMany(items.reverse(), {
            ordered: false,
          }).catch((err) => {
            console.error(
              `Prevent dublicates: ${
                err.writeErrors.length
              }, Objects was added to database: ${51 - err.writeErrors.length}`
            );
          });

          return res.json({
            message:
              'RSS Feed have been already parsed and pull to the database',
            data: items,
          });
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export { parse };
