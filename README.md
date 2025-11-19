🚀 TOTLE – Backend Developer Intern (Round 1 Submission)
📌 Topic Retrieval API (Node.js + Express)

This project implements a Topic Retrieval API that reads data from a JSON file, filters topics using a search query, and optionally sorts them alphabetically.

✅ Features

GET /api/topics?search=<query>

Case-insensitive topic filtering

Optional sorting using ?sort=name

JSON response with { id, name, category }

Proper error handling (400 & 500)

Clean folder structure (routes, controllers, data)

📂 Folder Structure
totle-topic-api/
│
├── server.js
├── package.json
├── README.md
│
├── routes/topics.js
├── controllers/topicController.js
└── data/topics.json

🛠️ How to Run
git clone https://github.com/Sahildevkar789/totleapi.git
cd totleapi
npm install
npm start


Server runs at:
👉 http://localhost:5000

🔍 API Usage
Search topics
GET /api/topics?search=node

Search + Sort
GET /api/topics?search=a&sort=name

📌 Example Response
[
  {
    "id": 2,
    "name": "Node.js Backend Development",
    "category": "Backend"
  }
]

🎥 Video Explanation

video link here:
👉 https://drive.google.com/drive/folders/1q9Qnt5mf-5hCcWI4SI_OV2ozFwA08eQf?usp=drive_link

🔗 GitHub Repository

https://github.com/Sahildevkar789/totleapi