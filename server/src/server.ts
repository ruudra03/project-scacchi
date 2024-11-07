import express, { Request } from 'express'

// Import Utils
import fileUtils from './utils/file.js'

const PORT = 8080

// Create an instance of Express App
const app = express()

app.use(express.json()) // provide JSON support
app.use(express.urlencoded({ extended: true }))

// STATIC FILES
app.use('/', express.static(fileUtils.getFileFromPath(['..', 'assets'])))

// Add Express Routers
import indexRouter from './routes/root.js'

// ROUTES
app.get('/', indexRouter)

// START LISTENING FOR CONNECTIONS
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})