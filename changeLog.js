import'dotenv/config'
import fs from 'fs'
import dayjs from 'dayjs'

let apiBase = process.env.MONGO_API_BASE
let endpoint = apiBase + `/client_versions/find`
console.log('Getting versions from remote...')
let resp = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.MONGO_API_KEY
  },
  body: JSON.stringify({
    sort: {
      created: -1
    },
    projection: {
      _id: 0,
      userName: 0
    }
  })
})

let json = await resp.json()

console.log('Generating markdown...')

let markdown = `# 版本更新日志
`

json.forEach((item) => {
  markdown += `
## ${item.version_num}

<span style="font-size: 12px">${dayjs(item.created).format('YYYY-MM-DD')}</span>

${item.version_desc}

`
})

fs.writeFileSync('./CHANGELOG.md', markdown)

console.log('Done')
