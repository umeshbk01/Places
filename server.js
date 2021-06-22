const express = require('express');
const cors = require('cors');

const app = express();

app.use(
    express.urlencoded({
      extended: false,
    })
  );
app.use(express.json());

app.use(cors());

app.use("/api/places", require("./routes/api/place"));

const PORT = process.env.PORT ||5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);