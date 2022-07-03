let handler = async (m, { conn, text }) => {
    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['🎧','🤖','😍','😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '💙','🤖','🐦','🤨','🥴','😐','🦄','😔','👀','👎'])}`,
            key: m.key,
          }})

  }

handler.customPrefix = /(da|menu|play|help|hi|list|bro|sc|git|poda|gourav|ok|p(a)?nt(e)?k|hello|owner)/i
handler.command = new RegExp
  
handler.mods = false

export default handler
  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
