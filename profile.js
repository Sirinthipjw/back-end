const express = require("express");
const app = express();
const mysql = require("mysql2");
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "db_pro",
});

// connect to the database
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.post("/profile", async (req, res) => {
  const { ssid, password } = req.body.data;
  console.log(req.body.data);
});

connection.query("SELECT * FROM db_pro", (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.end();

// app.post('/', (req, res) => {
//     // handle the post request here
//     console.log(req.body);
//     res.send('POST request to the homepage');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
