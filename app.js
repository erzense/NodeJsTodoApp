require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const mainRouter = require("./routers/app")

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('public'))
app.use(mainRouter)


const port = process.env.PORT || 3000

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };

start()