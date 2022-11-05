import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let menuini = fs.readFileSync('./mp3/menuini.mp3') 
conn.sendFile(m.chat, menuini, '', '', m, true)
}

handler.customPrefix = /^(.menu)$/i
handler.command = new RegExp

export default handler
