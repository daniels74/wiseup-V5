const express = require("express");
const app = express();
const cors = require("cors");
//const path = require("path");
const PORT = process.env.PORT || 443;

//Middleware

app.use(cors());
app.use(express.json());

// routes

app.use("/landing", require("./routes/landing"));


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

if (process.env.NODE_ENV === "production") {
    // server static content
    // npm start
    app.use(express.static(path.join(__dirname, "./wiseup-v5/build")));

    app.get("*", function (_, res) {
        res.sendFile(
          path.join(__dirname, "./wiseup-v5/build/index.html"),
          function (err) {
            if (err) {
              res.status(500).send(err);
            }
          }
        );
      });
}

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "wiseup-v4/build/index.html"))
// })

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

// if (process.env.NODE_ENV === "production") {
//     //server static content
//     //npm start
//     app.use(express.static(path.join(__dirname, "wiseup-v5/build")))
//   }

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "wiseup-v5/build/index.html"))
//   })

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});

module.exports = app;