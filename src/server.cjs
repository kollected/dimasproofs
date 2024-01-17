// proof i can set up a basic back-end with node.js

const express = require('express')
const app = express()

const port = 2121

app.get('/api/hello', (req, res) => {
  res.json({ message: `hello from port ${port}` })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})