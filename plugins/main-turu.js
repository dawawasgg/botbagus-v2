let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/c98503d281e1e251211a0.jpg', m, { packname: "πΌππππ½πππ", author: "@πππΏππ" })
}

handler.customPrefix = /^(turu)$/i
handler.command = new RegExp

module.exports = handler
