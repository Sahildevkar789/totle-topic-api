const express = require("express");
const cors = require("cors");
const topicRoutes = require("./routes/topics");

const app = express();
app.use(cors());
app.use(express.json());

// API Route
app.use("/api/topics", topicRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
