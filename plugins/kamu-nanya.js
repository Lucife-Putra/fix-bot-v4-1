import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let cepmek = fs.readFileSync('./mp3/kamu_nanya yah.opus') 
conn.sendFile(m.chat, cepmek, '', '', m, true)
}

handler.customPrefix = /^(kamu nanya|apa|apaa|apaan|ap|Apa|Apaan|Ap|Kamu nanya)$/i
handler.command = new RegExp

export default handler
