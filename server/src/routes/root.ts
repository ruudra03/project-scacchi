import express from 'express'

import fileUtils from '../utils/file.js'

const router = express.Router()

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(fileUtils.getFileFromPath(['..', 'assets', 'views', 'index.html']))
})

export default router