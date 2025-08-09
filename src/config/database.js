const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://suraj:8J9y7QeafX9IrF0m@namastesuraj.gw9etsu.mongodb.net/devTinder');
};

module.exports = {
    connectDB
}