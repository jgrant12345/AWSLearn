const express = require('express')

const app = express()
const port = 8080




app.get('/', async (req, res) => {
  res.send("Fortune of the day app coming soon!!!!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})