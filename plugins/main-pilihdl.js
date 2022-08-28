let levelling = require('../lib/levelling') 
 let fs = require('fs') 
 let path = require('path') 
 let fetch = require('node-fetch') 
 let moment = require('moment-timezone') 
 let jimp = require('jimp') 
 let PhoneNumber = require('awesome-phonenumber') 
let handler = async (m, { conn, usedPrefix: _p, args, command }) => { 
	let hao = ` 
 *Official Bot By @${'0'.split('@')[0]}* 
 *Powered By @${'16199961931'.split('@')[0]}*` 
  let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 21, 2023 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('April 5, 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    const natal = new Date('December 25, 2022 23:59:59')
    const kapanatal = new Date().getTime() 
    const natalnya = natal - kapanatal
    const nhari = Math.floor( natalnya / (1000 * 60 * 60 * 24));
    const njam = Math.floor( natalnya % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const nmenit= Math.floor( natalnya % (1000 * 60 * 60) / (1000 * 60))
    const mdetek = Math.floor( natalnya % (1000 * 60) / 1000)
    let pe = '```'
    let { premium, premiumTime } = global.db.data.users[m.sender]
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mode = global.opts['self'] ? 'Private' : 'Public'
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let user = db.data.users[m.sender]
  let id = m.chat
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let sender = m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
const fkgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6283160327945@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":`𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙 🌱 ┊ 𝗥𝗣𝗚 Whatsapp ʙᴏᴛ`,
                 "title": `𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙 🌱 ┊ 𝗥𝗣𝗚 Whatsapp ʙᴏᴛ`,
                 'jpegThumbnail': await (await fetch('https://telegra.ph/file/5cd3cc7381bce4a4a65ec.jpg')).buffer()
                        }
	                  } 
                     }
                     
                     let tksk = `${pe}${ucapan()}, @${m.sender.split`@`[0]} ${pickRandom(['😅', '🥰', '😜'])}${pe}

●────━───༺༻───━────●
                *《 BOT INFO 》*
⚘ *Bot Name: 𝐀𝐒𝐄𝐏 𝐁𝐎𝐓𝐙*
⚘ *Creator: 𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙*
⚘ *Contact Owner Bot*
*http://wa.me/6283160327945*
⚘ *Tanggal: ${date}*  
⚘ *Jam: ${time} WIB*
⚘ *Status: 「 ${mode} 」*
⚘ *Prefix: 「 MULTI PREFIX 」*

●────━───༺༻───━────●
           *《 INFO WAKTU 》*
✧ 𝙏𝘼𝙃𝙐𝙉 𝘽𝘼𝙍𝙐
_*${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik*_
✧ 𝙍𝘼𝙈𝘼𝘿𝘼𝙉
_*${harii} Hari ${jamm} Jam ${menitt} Menit ${detikk} Detik*_ 
✧ 𝙉𝘼𝙏𝘼𝙇
_*${nhari} Hari ${njam} Jam ${nmenit} Menit ${mdetek} Detik*_ 
✧ 𝙐𝙇𝘼𝙉𝙂 𝙏𝘼𝙃𝙐𝙉 𝙊𝙒𝙉𝙀𝙍 
_*${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik*_
●────━───༺༻───━────●

❉───────────────────❉
               *《 USER INFO 》*
◦ *Nama: ${name}*
◦ *Status :* ${premium ? 'Premium' : 'Free'} User
◦ *Limit: ${limit}*
◦ *Your Api:* wa.me/${m.sender.split('@')[0]}

             *《 YOUR PROGRESS 》*
◦ *Level: ${level}*
◦ *XP: ${exp}*
◦ *Rank: ${role}*

●────━───༺༻───━────●
             *《 BOT STATUS 》*
❏ *Runtime ${uptime}*
𒍮 *User Register: ${totalreg}*
●────━───༺༻───━────●`

let ftt = `*Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner

 *Official Bot By @${'0'.split('@')[0]}* 
 *Powered By @${'6283160327945'.split('@')[0]}*`
       let judul = `${ucapanl()}`.trim() 
       const sections = [
                              {
                                "rows": [{
                                         "title": "📊 › 𝐁𝐔𝐘 𝐃𝐈𝐀𝐌𝐎𝐍𝐃 𝐋𝐎𝐂𝐊 ",
                                         "description": "𝐁𝐔𝐘 𝐑𝐀𝐓𝐄 𝟔.𝐊",
                                         "rowId": ".payment"
                                    }, {
                                         "title": "📊 › 𝐒𝐄𝐋𝐋 & 𝐁𝐔𝐘 𝐃𝐈𝐀𝐌𝐎𝐍𝐃 𝐋𝐎𝐂𝐊 ",
                                         "description": "𝐒𝐄𝐋𝐋 𝐑𝐀𝐓𝐄 𝟓.8𝐊 & 𝐁𝐔𝐘 𝐑𝐀𝐓𝐄 𝟔.𝐊",
                                         "rowId": ".pilihanstore"
                                    }, {
                                         "title": "🗒️› 𝐌𝐈𝐃𝐌𝐀𝐍 ",
                                         "description": "",
                                         "rowId": ".midman"
                                    }, {
                                         "title": "🎐 › 𝐃𝐎𝐍𝐀𝐒𝐈 ",
                                         "description": "",
                                         "rowId": ".donasi"                       
                              }],             
                                "title": "▮Pengaturan 」" 
                                }, {
                                "rows": [{
                                "title": "🗳️ ∫  Donasi ",
                                "description": "Donasi kak, jangan enak pakenya doang",
                                "rowId": ".donasi"
                                }, {
                                "title": "🔖 ∫  Sewa bot - Premium ",
                                "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium",
                                "rowId": ".sewa"
                                }, {
                                "title": "🌟 ∫  Premium ",
                                "description": "Menampilkan List Harga premium",
                                "rowId": ".premium"
                                }, {
                                "title": "💭 ∫  Pertanyaan Tentang Bot Ini ",
                                "description": "Especially WhatsApp users whose numbers start with +212",
                                "rowId": ".QnA"
                       }],
                                "title": "▮Thanks To  」"
                            }
           ] 
    const listMessage = {
      text: `Hai Kak ${name} Pilih MAU SELL DL ATAU BUY DL`.trim(),
      footer: 'YANG SERIUS YA KAK CAN BECANDA >//<',
      title: judul,
      buttonText: "Pilih Disini",
      sections
    }
     await conn.send3ButtonLoc(m.chat, await conn.resize(await genProfile(conn, m), 300, 180), tksk, ftt, 'RENT', '.sewa', 'OWNER', '.owner', m)
     //await conn.send3ButtonLoc(m.chat, await conn.resize(pp, 300, 300), tksk, ftt, 'RENT', '.sewa', 'OWNER', '.owner', 'CREDITS', '.tqto', m)
    return conn.sendMessage(m.chat, listMessage, { quoted: fkgif, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }
handler.customPrefix = /^(buy dl|sell dl|buy diamond lock|buy dl cheap|buy diamondlock|ohlx|ohlxstore|ohlx store|sell diamond lock|sell dl|sell dl cheap|sell diamond lock|need midman|need mm|buy jasa mm|\?)$/i
handler.command = new RegExp
 handler.owner = false 
 handler.mods = false 
 handler.premium = false 
 handler.group = false 
 handler.private = false 
  
 handler.admin = false 
 handler.botAdmin = false 
  
 handler.fail = null 
 handler.exp = 3 
  
 module.exports = handler 
  
 const more = String.fromCharCode(8206) 
 const readMore = more.repeat(4001) 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 } 
 function ucapan() { 
   const time = moment.tz('Asia/Jakarta').format('HH') 
   res = "Selamat dinihari" 
   if (time >= 4) { 
     res = "Selamat pagi" 
   } 
   if (time > 10) { 
     res = "Selamat siang" 
   } 
   if (time >= 15) { 
     res = "Selamat sore" 
   } 
   if (time >= 18) { 
     res = "Selamat malam" 
   } 
   return res 
 } 
 function ucapanl() {
    const timel = moment.tz('Asia/Jakarta').format('HH')
    resl = "Selamat dinihari 🎑"
    if (timel >= 4) {
        resl= "Good Morning 🌅"
    }
    if (timel > 10) {
        resl = "Good Afternoon 🏞️"
    }
    if (timel >= 15) {
        resl = "Good Afternoon 🌇"
    }
    if (timel >= 18) {
        resl = "Good Evening 🌃"
    }
    return resl
}
  
 //By fahri adison = https://github.com/FahriAdison 
  
  async function genProfile(conn, m) { 
   let font = await jimp.loadFont('./name.fnt'), 
     mask = await jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await jimp.read(thumbnailUrl.getRandom()), 
     avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
  
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
  
     await welcome.print(font, 550, 180, 'Name:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'About:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Number:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
 }