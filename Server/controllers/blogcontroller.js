const db = require("../models/db");

exports.getBlog = async (req, res) => {
  try {
    const blog = await db.query("select * from blogtable");
    res.json(blog.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.getBlogDetails = async (req, res) => {
  const id = req.params.id;

  try {
    const query = "select * from blogtable where blog_id = $1";
    const blog = await db.query(query, [id]);
    if (blog.rows.length === 0) {
      res.status(404).send("Blog not found");
    } else {
      res.json(blog.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Wrong server Id");
  }
};

exports.postBlog = async (req, res) => {
  const { author, title, city, description, image } = req.body;
  try {
    const query = `insert into blogtable (author,title,city,description,image)
          values ($1, $2, $3, $4, $5)
          returning blog_id
          `;
    const values = [author, title, city, description, image];
    const blog = await db.query(query, values);
    res.status(201).json({
      message: "Blog Added Successfully",
      blog_id: blog.rows.blog_id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add blog");
  }
};
