const path = require('path')
const express = require('express')


const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '/dist/news-app/')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.listen(2000, () => {
    console.log('Server is up on port 2000.')
})