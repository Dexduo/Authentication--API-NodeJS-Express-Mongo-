const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/noderest', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;