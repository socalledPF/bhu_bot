const axios = require('axios')

async function checkZhihuStatus() {
  const res = await axios.get('https://zhihu.com')
  let status = res.status;
  let statusText
  if (status === 200) {
    statusText = "+1s"
  } else {
    statusText = `b乎目前的状态是： ${status}`
  }

  return statusText
}

module.exports = checkZhihuStatus