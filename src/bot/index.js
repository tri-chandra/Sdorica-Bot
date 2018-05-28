import redis from 'redis';
import { Client } from 'ghastly';

import { token, prefix } from '../config';

const client = new Client({ prefix });
const redisClient = redis.createClient();

client.on('ready', () => {
  console.log('Sdorica Bot Ready');
});

redisClient.on('error', (err) => {
  console.log(`RedisErr ${err}`);
});

client.login(token);
