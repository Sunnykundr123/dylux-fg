
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
     if (!text) throw `✳️ _Send the text_\n\n📌Example *${usedPrefix + command}* dylux-fg`
    //let stiker = await sticker(null, global.API('xteam', '/attp', { file: '', text }), global.packname, global.author)
     let stiker = await sticker(null, global.API('fgmods', '/api/maker/attp', { text }, 'apikey'), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m )
    throw stiker.toString()
}
handler.help = ['attp <text>']
handler.tags = ['sticker']
handler.command = ['attp'] 

export default handler
