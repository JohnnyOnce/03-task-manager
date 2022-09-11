const mongoose = require('mongoose')

module.exports = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => console.log('connected to db')).catch((err) => console.log(err))
}