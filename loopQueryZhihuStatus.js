const fs = require('fs')
const checkZhihuStatus = require('./zhihu')

function loopQueryZhihuStatus() {
  checkZhihuStatus().then((status) => {
    fs.writeFile('zhihu_status.log', status, {
      flag: 'a'
    }, (err) => {
      if (err) {
        throw err;
      }
    })
  })
}

setInterval(loopQueryZhihuStatus, 10000)