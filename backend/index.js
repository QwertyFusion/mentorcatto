import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}. Open at http://localhost:${port}`
  );
});

app.get("/", (req, res) => {
  res.send("MentorCatto is here!");
});
