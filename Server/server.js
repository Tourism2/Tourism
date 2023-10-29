const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;
const hostname = "127.0.0.1";

var cors = require("cors");
app.use(cors());

const blogController = require("./controllers/blogcontroller");
const userController = require("./controllers/usercontroller");

app.get("/", blogController.getBlog);
app.get("/blog/:id", blogController.getBlogDetails);
app.post("/blogpost", blogController.postBlog);
app.post("/registration", userController.registerUser);
app.post("/login", userController.loginUser);
app.get("/user", userController.getUserDetails);

// app.listen(port, () => {
//   console.log(`server running at http://${hostname}:${port}/`);
// });

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
