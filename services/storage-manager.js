const fs = require("fs");

class StorageManager {

  saveFile(filePath = '', data) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (error) {
      return ;
    }
  }

  loadFileAsJson(filePath = '') {
    try {
      const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
      return JSON.parse(data);
    } catch (error) {
      return null
    }
  }
}

module.exports = StorageManager;
