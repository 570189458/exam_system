const puppeteer = require('phantom')
const Pro = require('../../dao/Pro_dao')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    const examId = req.query.examId
    var pro = new Pro()
    console.log(examId)
    res.send('adasd')
}