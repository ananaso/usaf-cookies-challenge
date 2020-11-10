const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(cookieParser('keepitsecretkeepitsafe'));

app.post('/login', (req, res) => {
  let name = req.body.name;
  if (name) {
    res.cookie("name", name)
    //   signed: true,
    //   secure: true,
    //   httpOnly: true
    // });
    res.send(`Logged in as ${name}!`);
  } else {
    let result = {
      status: "failure",
      message: "Name wasn't passed to login page"
    }
    res.json(result);
  }
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));