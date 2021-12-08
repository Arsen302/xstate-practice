// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

import state from 'xstate';
import http from 'http';
// import { log } from 'xstate/lib/actions';

const app = http.createServer();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server listen on ${PORT};`, 'state:', state)
);
