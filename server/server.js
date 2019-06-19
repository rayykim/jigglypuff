const express = require("express");
const app = express();
const { PORT } = process.env;
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/api");

const passport = require("passport");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

// Static route to access images hosted in server
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/api", routes);

app.use(function(req, res, next) {
  //404
  res.locals.message = "PAGE NOT FOUND";
  const err = new Error("RESOURCE NOT FOUND");
  err.status = 404;
  return next(err);
});

// google auth
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/"
  })
);

// Dedicated error handler
app.use(function(err, req, res, next) {
  res.status(404).json(err);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
