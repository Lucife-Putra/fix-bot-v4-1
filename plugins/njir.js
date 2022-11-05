import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let njirrr = fs.readFileSync('./mp3/lu siapa anjir.mp3') 
conn.sendFile(m.chat, njirr, '', '', m, true)
}

handler.customPrefix = /^(njirr|anjir|njir|anjirr)$/i
handler.command = new RegExp

export default handler
