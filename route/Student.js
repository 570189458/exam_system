const express = require('express')
const Student = express.Router()

Student.get('/addExam', require('./Student/addExam'))

Student.get('/getExamInfo', require('./Student/getExamInfo'))

Student.get('/printExamInfo', require('./Student/printExamInfo'))

Student.get('/getFileExamInfo', require('./Student/getFileExamInfo'))

module.exports = Student