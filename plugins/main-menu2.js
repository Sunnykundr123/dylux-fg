
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use estos comandos sin el prefijo_

▢ Si tienes más  audios   
envíame por t.me/fgsupp_bot el *audio + comando* con en el que responderá

┌─⊷ *AUDIOS* 
▢ Bot
▢ alive
▢ Buenas tardes 
▢ Buenas noches
▢ uyir
▢ Sad
▢ alive
▢ Aa
▢ Andi
▢ welcome
▢ ❤️
▢ Nanban
▢ Da
▢ Halo
▢ bgm
▢ Alfa
▢ good morning
▢ Nanban
└──────────────
`

    let pp = './src/fg_logo.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
