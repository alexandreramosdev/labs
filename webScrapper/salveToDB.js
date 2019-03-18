const mongoose = require("mongoose");

const url =
  "mongodb://%40webscrapper:S4QRikyWKFcKP6S@ds054999.mlab.com:54999/webscrapping";

const bookSchema = new mongoose.Schema({
  title: String,
  date: Date,
  fonte: String
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports = books => {
  let items = [];
  books.forEach(book => {
    items.push({ title: book, date: new Date(), fonte: "desconhecida" });
  });

  mongoose.connect(url, { useNewUrlParser: true }, err => {
    if (!err) {
      bookModel
        .insertMany(items)
        .then(docs => {
          console.log("Sucess");
          mongoose.disconnect();
        })
        .catch(err => {
          console.log("Error 2", err);
          mongoose.disconnect();
        });
    } else {
      console.log("Error 1", err);
    }
  });
};
