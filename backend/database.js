const mongoose = require('mongoose');
const URI = 'mongodb+srv://nachopad:Panyqueso2208@birabar-cluster.jljcenp.mongodb.net/restobarbd?retryWrites=true&w=majority';
mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
module.exports = mongoose;
