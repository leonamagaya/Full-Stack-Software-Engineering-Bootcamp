import express from "express"


const app = express();
const port = 3000;



app.get("/", (req, res) => {
  const date = new Date();
  const todaysDate = date.getDay();
  const isWeekday = todaysDate >= 1 && todaysDate <= 5;
  
  res.render('index.ejs', { isWeekday });
})

app.listen(port, () => {
  console.log(`listening on port ${3000}`);
})
    