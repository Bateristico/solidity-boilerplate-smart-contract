const path = require('path');
const fs = require('fs');
const solc = require('solc')


const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const inboxSource = fs.readFileSync(inboxPath, 'utf8');


// compile code will go here
module.exports = solc.compile(inboxSource, 1).contracts[':Inbox'];

