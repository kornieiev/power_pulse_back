const express = require('express')
const { googleAuth, googleRedirect } = require('../controllers/google')

const googleOAUTH = express.Router()

googleOAUTH.get('/google', googleAuth)
googleOAUTH.get('/google-redirect', googleRedirect)

module.exports = googleOAUTH
