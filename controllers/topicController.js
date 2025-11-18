const fs = require("fs");
const path = require("path");

exports.getTopics = (req, res) => {
  try {
    const { search, sort } = req.query;

    // Validate query
    if (!search || search.trim() === "") {
      return res.status(400).json({
        error: "Invalid query. Please provide a valid 'search' parameter."
      });
    }

    const filePath = path.join(__dirname, "../data/topics.json");

    const data = fs.readFileSync(filePath, "utf-8");
    let topics = JSON.parse(data);

    // Filter (case-insensitive)
    let filteredTopics = topics.filter((topic) =>
      topic.name.toLowerCase().includes(search.toLowerCase())
    );

    // Bonus: Sorting
    if (sort === "name") {
      filteredTopics.sort((a, b) => a.name.localeCompare(b.name));
    }

    res.status(200).json(filteredTopics);
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Server error, please try again." });
  }
};
