let handler = async (m, { conn, text }) => {
    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['☣️','🤖','😍','😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '💙','🤖','🐦','🤨','🥴','😐','🦄','😔','👀','💎'])}`,
            key: m.key,
          }})

  }

handler.customPrefix = /(da|hlo|help|ghithub|hi|list|bro|ser|poda|gourav|ok|Dude|hello|thanks)/i
handler.command = new RegExp
  
handler.mods = false

export default handler
  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
