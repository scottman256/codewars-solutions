class Dictionary {
  constructor() {
     this.dictionary = [];
  }
  
  newEntry(key, value) {
    this.dictionary[key] = value;
  }
  
  look(key) {
   if (this.dictionary[key]) return this.dictionary[key];
    else return "Can't find entry for " + key;
  }
}