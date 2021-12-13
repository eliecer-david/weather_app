const fs = require("fs");

class StorageManager {

  constructor(filePath = '') {
    this.filePath = filePath;
  }

  saveData(data) {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(data));
    } catch (error) {
      return ;
    }
  }

  loadDataAsJson() {
    try {
      const data = fs.readFileSync(this.filePath, { encoding: 'utf-8' });
      return JSON.parse(data);
    } catch (error) {
      return null
    }
  }
}

module.exports = StorageManager;
