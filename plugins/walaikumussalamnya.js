import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let walaikumussalamnya = fs.readFileSync('./mp3/walaikumussalam.opus') 
conn.sendFile(m.chat, walaikumussalamnya, '', '', m, true)
}

handler.customPrefix = /^(help|menu|test|.menu|allmenu|listmenu)$/i
handler.command = new RegExp

export default handler
