import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let walaikumussalamnya = fs.readFileSync('./mp3/walaikumussalam.opus') 
conn.sendFile(m.chat, walaikumussalamnya, '', '', m, true)
}

handler.customPrefix = /^(assalamualaikum|Assalamualaikum|Waalaikum salam|p)$/i
handler.command = new RegExp

export default handler
