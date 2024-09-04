const mongoose = require("mongoose");

const uri =
  "mongodb+srv://qq123:7E2XKmPNHEjj1aiG@be7.cpz6k.mongodb.net/?retryWrites=true&w=majority&appName=Be7";

const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

async function connectDB() {
  try {
    await mongoose.connnect(url, clientOptions);
    await mongoose.connection.db.admin().command({ping:1})
    console.log("berhasil")
  } catch (error) {
    process.exit(1);
  }
}

async function disconnectDB() {
    try {
        await mongoose.disconnect();
        console.log("berhasil disconnect");
    } catch (error) {
        process.exit(1);
    }
}
