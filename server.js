const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')//added
const { MONGO_URL } = require("./config");
const postsRoutes = require("./routes/api/posts_controller");
const app = express();

app.use(cors())//added


app.use(express.json());

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
