/* eslint-disable no-console */

const fs = require('fs');

const source = process.argv[2]; // Path to input config json file

try {
  if (!source) {
    throw new Error('Source file path not provided');
  }

  if (!fs.existsSync(source)) {
    throw new Error(`Source file not found '${source}'`);
  }

  const replacement = `config.js?${new Date().valueOf()}`;

  fs.readFile(source, 'utf8', (error1, data) => {
    if (error1) {
      throw new Error(`Source file unreadable ${error1.message}`);
    } else {
      const result = data.replace(/config.js/g, replacement);

      fs.writeFile(source, result, 'utf8', (error2) => {
        if (error2) {
          throw new Error(`Source file unwriteable ${error2.message}`);
        }

        console.log(`Source file '${source}' prepared (config.js -> ${replacement})`);
      });
    }
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
