const express = require("express");
const cors = require("cors");
//const { request } = require("express");
//const path = require("path");
const Database = require("better-sqlite3");

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: "10mb" }));
server.set("view engine", "ejs");

// init express aplication
const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));

const db = new Database("./src/data/database.db", { verbose: console.log });

server.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * from card WHERE id=?`);
  const data = query.get(req.params.id);
  res.render("pages/card", data);
});

server.post("/card/", (req, res) => {
  console.log("Petición en /card");
  console.log(req.body);
  const response = {};

  if (req.body.name === "") {
    response.success = false;
    response.error = "Missing name";
  } else if (isNaN(parseInt(req.body.palette))) {
    response.success = false;
    response.error = "Missing palette";
  } else if (req.body.job === "") {
    response.success = false;
    response.error = "Missing job";
  } else if (req.body.email === "") {
    response.success = false;
    response.error = "Missing email";
  } else if (req.body.phone === "") {
    response.success = false;
    response.error = "Missing phone";
  } else if (req.body.linkedin === "") {
    response.success = false;
    response.error = "Missing linkedin";
  } else if (req.body.github === "") {
    response.success = false;
    response.error = "Missing github";
  } else if (req.body.photo === "") {
    response.success = false;
    response.error = "Missing photo";
  } else {
    // preparamos la query
    const query = db.prepare(
      `INSERT INTO card (palette, name, job, phone, email, linkedin, github, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    );
    // ejecutamos la query
    const result = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.photo
    );

    response.success = true;
    if (req.hostname === "localhost") {
      response.cardURL = `http://localhost:${serverPort}/card/${result.lastInsertRowid}`;
    } else {
      response.cardURL = `https://awesome-profile-cards-onchange.herokuapp.com/card/${result.lastInsertRowid}`;
    }
  }

  res.json(response);
});

server.get("*", (req, res) => {
  const notFoundFileRelativePath = "../web/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
