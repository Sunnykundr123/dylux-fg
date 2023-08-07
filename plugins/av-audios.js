
let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler


let audioMsg = {
  'alive' : 'https://j.top4top.io/m_26464yyei1.mp3',
  'poda':'https://i.imgur.com/e2PKT60.mp4',
  'lyfe':'https://i.imgur.com/73QMUoC.mp4',
  'sed':'https://i.imgur.com/B71ASsj.mp4',
  'raganork' : 'https://i.imgur.com/u5Pp11A.mp4',
  'bot' : 'https://i.imgur.com/dqgoyna.mp4',
  'hi' : 'https://i.imgur.com/6mjEiA6.mp4', 
'hey':'https://i.imgur.com/2AbxJCd.mp4', 
'pavam':'https://i.imgur.com/kYzbJbx.mp4', 
'admin':'https://i.imgur.com/DVuOkgD.mp4', 
'ok':'https://i.imgur.com/5lniXiJ.mp4', 
'nirthipoda':'https://i.imgur.com/c6wEqlx.mp4', 
'sad':'https://i.imgur.com/5NZDe8m.mp4', 
'eda':'https://i.imgur.com/iaHKsGW.mp4', 
'tag':'https://i.imgur.com/NGWrUkQ.mp4', 
'umma':'https://i.imgur.com/GUtD1hr.mp4', 
'velachil':'https://i.imgur.com/PBuALN3.mp4', 
'gold':'https://i.imgur.com/79YoX98.mp4', 
'pavam':'https://i.imgur.com/Cjd55is.mp4', 
'arada':'https://i.imgur.com/HzIz3ls.mp4', 
'para':'https://i.imgur.com/2jzZauR.mp4', 
'phub':'https://i.imgur.com/oKVVwIj.mp4', 
'fan':'https://i.imgur.com/AzqHkeV.mp4', 
'duet':'https://i.imgur.com/pf1BWXN.mp4', 
'aa':'https://i.imgur.com/N2N6S7C.mp4', 
'thanks':'https://i.imgur.com/IrEdvwL.mp4', 
'kozhi':'https://i.imgur.com/4fdJUoj.mp4', 
'umfi':'https://i.imgur.com/FaOtaF5.mp4', 
'who':'https://i.imgur.com/wsrdnP8.mp4', 
'vaa':'https://i.imgur.com/imr3bC8.mp4', 
'sheri':'https://i.imgur.com/Xgzkbsk.mp4', 
'pedi':'https://i.imgur.com/0WML13D.mp4', 
'nannayi':'https://i.imgur.com/b491tUX.mp4', 
'kundan':'https://i.imgur.com/GuAnUuf.mp4', 
'killadi':'https://i.imgur.com/yVwoqYp.mp4', 
'bhai':'https://i.imgur.com/WgMgTBP.mp4', 
'kk':'https://i.imgur.com/LQBlI1y.mp4', 
'hy':'https://i.imgur.com/EQn2BvM.mp4', 
'violence':'https://i.imgur.com/SIj26aP.mp4', 
'suii':'https://i.imgur.com/IWlTmTE.mp4', 
'single':'https://i.imgur.com/c4E7E1k.mp4', 
'Mass':'https://i.imgur.com/D5PREWe.mp4', 
'Chunk':'https://i.imgur.com/JL6FWpS.mp4', 
'Ooi':'https://i.imgur.com/rvD8PlZ.mp4', 
'Haha':'https://i.imgur.com/ChUKdPk.mp4', 
'Jao':'https://i.imgur.com/z9oQd4N.mp4', 
'Beeshma':'https://i.imgur.com/z9oQd4N.mp4', 
'Kalipan':'https://i.imgur.com/vkdcGHu.mp4', 
'Ettayi':'https://i.imgur.com/vkdcGHu.mp4', 
'Mothalali':'https://i.imgur.com/K2QlmTc.mp4', 
'Kaliyakunne':'https://i.imgur.com/AeGNKo3.mp4', 
'Nenben':'https://i.imgur.com/Qe5khtL.mp4', 
'Cr7':'https://i.imgur.com/lCZl3Af.mp4', 
'Ethokke':'https://i.imgur.com/AsEfT76.mp4', 
'Sheri enna':'https://i.imgur.com/KraBTPf.mp4', 
'Gangster':'https://i.imgur.com/fbvDI1g.mp4', 
'Idiot':'https://i.imgur.com/uazVUOH.mp4', 
'Ff':'https://i.imgur.com/YN04ot5.mp4', 
'ff':'https://i.imgur.com/YN04ot5.mp4', 
'Free fire':'https://i.imgur.com/YN04ot5.mp4', 
'Hlo':'https://i.imgur.com/tZFBfRR.mp4', 
'Helo':'https://i.imgur.com/P9ntmn3.mp4', 
'Big fan':'https://i.imgur.com/5My5AdW.mp4', 
'Myre':'https://i.imgur.com/kGBtBXV.mp4', 
'Endi':'https://i.imgur.com/2nzjJPc.mp4', 
'Perfect ok':'https://i.imgur.com/z2JJQFh.mp4', 
'Ooi':'https://i.imgur.com/kjUcXHD.mp4', 
'Arum ille':'https://i.imgur.com/67wdgg4.mp4', 
'Njan vanne':'https://i.imgur.com/BYx4Q0t.mp4', 
'Kooi':'https://i.imgur.com/NIrmfFy.mp4', 
'Ne oru killadi thanne':'https://i.imgur.com/AlUiq7V.mp4', 
'Killadi':'https://i.imgur.com/AlUiq7V.mp4', 
'Ara':'https://i.imgur.com/2pBlu1Z.mp4', 
'Hacker':'https://i.imgur.com/wF8xr4k.mp4', 
'Hecker':'https://i.imgur.com/wF8xr4k.mp4', 
'Ayo ayo':'https://i.imgur.com/wF8xr4k.mp4',
'mwonu':'https://i.imgur.com/fkmoBaC.mp4'
  }
  
