const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const distPath = path.join(__dirname, "dist", "resume");

app.use(compression());

app.use(
  express.static(distPath, {
    maxAge: "1y",
    immutable: true,
    index: false,
  }),
);

app.get("*", (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(distPath, "index.html"));
});

const port = process.env.PORT || "3001";
app.listen(port, () => console.log("Running"));
