let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *what's up?* ${htka}

        💬 Any help needed
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Chat', url: 'https://wa.me/917025770987'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.customPrefix = /^(owner|doubt|p)$/i
handler.command = new RegExp

export default handler
