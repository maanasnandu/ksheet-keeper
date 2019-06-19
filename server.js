const express = require("express");
//node doesnt gave import statements like reqct unless we give babel etc.
//using express js
const app = express();
app.get("/", (req, res) => res.json({ msg: "Welcome to the K-Sheet Keeper!" }));

//Defning Routes using app.use
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
