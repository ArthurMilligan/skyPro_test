/* eslint-disable no-console */
import express from 'express';
import { resolve, join } from 'path';

const BUILD_PATH = resolve('./dist');
const server = express();

server.use(express.static(BUILD_PATH));
server.get('/*', (req, res) => {
  res.sendFile(join(BUILD_PATH, 'index.html'));
});

server.listen(3001, () => {
  console.info(`Server running on port: ${3001}`);
});
