import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let toxicc = fs.readFileSync('./mp3/dosa pantek.mp3') 
conn.sendFile(m.chat, toxicc, '', '', m, true)
}

handler.customPrefix = /^(anj|babi|monyet|asw|tai|kanjut|knjut|Kaniut|Knjut|knjt|Knjt)$/i
handler.command = new RegExp

export default handler
