const express = require("express");
const app = express();
const Connector = require("./models/Connector");

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", async (req, res) => {
  await Connector("barang").insert({
    id: 7,
    namaBarang: "Mouse Logitech Wireless",
    harga: 500000,
  });
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
