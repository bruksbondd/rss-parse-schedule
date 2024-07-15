
import RssParser from 'rss-parser';
import PostsModel from '../services/Posts/model';
import dotenv from 'dotenv';

dotenv.config();
const parser = new RssParser();

export default async function fetchPost() {
    try {
        return await parser.parseURL(
          process.env.RSS_FEED as string,
          async (err: any, feed) => {
            if (err) {
              console.error(err);
            return;
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
    
              return {
                message:
                  'RSS Feed have been already parsed and pull to the database',
                data: items,
              };
            }
          }
        );
      } catch (error) {
        console.error(error);
      }
}