const db = require("../models/db");

exports.registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const checkEmailQuery = "SELECT user_id FROM usertable WHERE email = $1";
    const emailCheck = await db.query(checkEmailQuery, [email]);

    if (emailCheck.rows.length > 0) {
      res.status(400).json({ error: "Email already exists" });
    } else {
      const query = `INSERT INTO usertable (username, password, email)
            VALUES ($1, $2, $3)
            RETURNING user_id`;
      const values = [username, password, email];
      const user = await db.query(query, values);

      res.status(201).json({
        message: "User Added Successfully",
        user_id: user.rows.user_id,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add user");
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkemail = `select user_id from usertable where email = $1 `;
    const checked = await db.query(checkemail, [email]);

    const checkpass = `select user_id from usertable where password = $1 `;
    const checkedpass = await db.query(checkpass, [password]);

    if (checked.rows.length === 0 || checkedpass.rows.length === 0) {
      res.status(400).json({ error: "Invalid Email or Password" });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to Authenticate");
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await db.query(`select * from usertable`);
    res.json(user.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
