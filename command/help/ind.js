exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Kamu sudah terdaftar di Database Bot`
	}
exports.eror = () =>{
	return` Yah eror`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}
β’ Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`β³ Sedang di proses ~`
	}
exports.ok = () =>{
	return` β Oke done ~`
	}
exports.welcome = () =>{
	return`Haii
Jangan lupa ikuti rules`
      }
exports.leave = () =>{
	return`
β
β°β α¬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
β­ββ§
ββ’INFO BOTβ’
βVERSI : 0.02
βFITUR : 230
βCREATOR : APRILIA
βMODEL SCRIPT : BETA
βSUBSCRIBE CHANNEL VENZ BOT
βhttps://www.youtube.com/c/Venzz - BOT
β°ββββββββββββββββ β³Ή

β­ββ¬£ *List Menu*
β β’ ${prefix}menu
β β’ ${prefix}help
β β’ ${prefix}apri
β
β *Download*
β β’ ${prefix}play [query]
β β’ ${prefix}song [judul lagu]
β β’ ${prefix}pinterest [query]
β β’ ${prefix}ytmp3 [url]
β β’ ${prefix}ytmp4 [url]
β β’ ${prefix}ig [url]
β β’ ${prefix}igstalk
β β’ ${prefix}githubstalk
β β’ ${prefix}ytsearch [query]
β β’ ${prefix}mediafire [url]
β β’ ${prefix}tiktok [url]
β β’ ${prefix}tiktoknowm [url]
β β’ ${prefix}tiktokwm [url]
β β’ ${prefix}tiktokaudio [url]
β β’ ${prefix}soundcloud [url]
β β’ ${prefix}telesticker [url]
β
β *Wibu*
β β’ ${prefix}otaku
β β’ ${prefix}komiku
β β’ ${prefix}chara
β β’ ${prefix}naruto
β β’ ${prefix}kaneki
β β’ ${prefix}rimuru
β β’ ${prefix}akira
β β’ ${prefix}kurama
β β’ ${prefix}dazai
β β’ ${prefix}miku
β β’ ${prefix}mikasa
β β’ ${prefix}eren
β β’ ${prefix}titan
β β’ ${prefix}levi
β β’ ${prefix}sakura
β β’ ${prefix}hinata
β β’ ${prefix}neji
β β’ ${prefix}shinobu
β β’ ${prefix}kurumi
β β’ ${prefix}rem
β β’ ${prefix}minato
β β’ ${prefix}jiraya
β β’ ${prefix}tsunade
β β’ ${prefix}kiba
β β’ ${prefix}boruto
β β’ ${prefix}sarada
β β’ ${prefix}sasuke
β β’ ${prefix}madara
β β’ ${prefix}obito
β β’ ${prefix}tanjiro
β β’ ${prefix}nezuko
β β’ ${prefix}luffy
β β’ ${prefix}zoro
β β’ ${prefix}sanji
β β’ ${prefix}gon
β β’ ${prefix}killua
β β’ ${prefix}sagiri
β β’ ${prefix}zenitsu
β β’ ${prefix}natsu
β β’ ${prefix}genos
β β’ ${prefix}saitama
β β’ ${prefix}inosuke
β β’ ${prefix}inori
β
β *Sfw Dan Nsfw*
β β’ ${prefix}waifu
β β’ ${prefix}husbu
β β’ ${prefix}loli
β β’ ${prefix}milf
β β’ ${prefix}cosplay
β β’ ${prefix}wallml
β β’ ${prefix}futanari
β β’ ${prefix}nekoh
β β’ ${prefix}anal
β β’ ${prefix}hentai
β β’ ${prefix}ahegao
β β’ ${prefix}ass
β β’ ${prefix}blowjob
β β’ ${prefix}bdsm
β β’ ${prefix}cuckold
β β’ ${prefix}cum
β β’ ${prefix}ero
β β’ ${prefix}femdom
β β’ ${prefix}foot
β β’ ${prefix}gangbang
β β’ ${prefix}glasses
β β’ ${prefix}masturbation
β β’ ${prefix}orgy
β β’ ${prefix}panties
β β’ ${prefix}pussy
β β’ ${prefix}things
β β’ ${prefix}yuri
β β’ ${prefix}neko
β
β *Asupan*
β β’ ${prefix}asupan
β β’ ${prefix}ukty
β β’ ${prefix}ghea
β β’ ${prefix}rikagusriani
β β’ ${prefix}bocil
β β’ ${prefix}santuy
β
β *Convert*
β β’ ${prefix}stiker [video/image]
β β’ ${prefix}semoji π
β β’ ${prefix}attp
β β’ ${prefix}ttp
β β’ ${prefix}toimg
β β’ ${prefix}smeme [text]
β β’ ${prefix}memegen [text|text2]
β β’ ${prefix}toptt
β β’ ${prefix}tomp3
β β’ ${prefix}tomp4
β β’ ${prefix}fast [video/vn]
β β’ ${prefix}tupai [video/vn]
β β’ ${prefix}vibra [video/vn]
β β’ ${prefix}tourl [image/video]
β β’ ${prefix}robot [video/vn]
β β’ ${prefix}slow [video/vn]
β β’ ${prefix}bass [video/vn]
β β’ ${prefix}nightcore [video/vn]
β
β *Education*
β β’ ${prefix}nuliskiri [text]
β β’ ${prefix}nuliskanan [text]
β β’ ${prefix}brainly [soal]
β β’ ${prefix}foliokiri [text]
β β’ ${prefix}foliokanan [text]
β β’ ${prefix}pantun
β 
β *Walpaper*
β β’ ${prefix}walpaper
β β’ ${prefix}teknologi
β β’ ${prefix}programmer
β β’ ${prefix}gamer
β β’ ${prefix}anime
β β’ ${prefix}muslim
β β’ ${prefix}cyber
β
β *Other*
β β’ ${prefix}ssweb
β β’ ${prefix}cekapikey [lolhuman]
β β’ ${prefix}delete
β β’ ${prefix}meme
β β’ ${prefix}readmore
β β’ ${prefix}infogempa
β β’ ${prefix}upswvideo
β β’ ${prefix}upswteks
β β’ ${prefix}upswimage
β β’ ${prefix}quotesanime
β β’ ${prefix}searchgc [link]
β β’ ${prefix}playstore [nama apk]
β
β *Islam*
β β’ ${prefix}kisahnabi
β β’ ${prefix}surah
β
β *Sound*
β β’ ${prefix}sound
β β’ ${prefix}sound1
β β’ ${prefix}sound2
β β’ ${prefix}sound3
β β’ ${prefix}sound4
β β’ ${prefix}sound5
β β’ ${prefix}sound6
β β’ ${prefix}sound7
β β’ ${prefix}sound8
β β’ ${prefix}sound9
β β’ ${prefix}sound10
β β’ ${prefix}sound11
β β’ ${prefix}sound12
β
β *Game*
β β’ ${prefix}tebakgambar 
β β’ ${prefix}suit
β β’ ${prefix}family100
β β’ ${prefix}caklontong
β β’ ${prefix}truth
β β’ ${prefix}dare
β β’ ${prefix}gaycek
β β’ ${prefix}sangecek
β β’ ${prefix}lesbicek
β β’ ${prefix}gantengcek
β β’ ${prefix}cantikcek
β β’ ${prefix}cantik
β β’ ${prefix}ganteng
β β’ ${prefix}jelek
β β’ ${prefix}goblok
β β’ ${prefix}bego
β β’ ${prefix}pinter
β β’ ${prefix}jago
β β’ ${prefix}nolep
β β’ ${prefix}monyet
β β’ ${prefix}babi
β β’ ${prefix}beban
β β’ ${prefix}baik
β β’ ${prefix}jahat
β β’ ${prefix}anjing
β β’ ${prefix}haram
β β’ ${prefix}kontol
β β’ ${prefix}pakboy
β β’ ${prefix}wibu
β β’ ${prefix}hebat
β β’ ${prefix}sadboy
β β’ ${prefix}sadgirl
β β’ ${prefix}apakah
β β’ ${prefix}kapankah
β β’ ${prefix}pakgirl
β β’ ${prefix}jadian
β
β *Photooxy*
β β’ ${prefix}narutobanner
β β’ ${prefix}shadow
β β’ ${prefix}romantic
β β’ ${prefix}smoke
β β’ ${prefix}burnpaper
β β’ ${prefix}lovemsg
β β’ ${prefix}grass
β β’ ${prefix}doubleheart
β β’ ${prefix}coffecup
β β’ ${prefix}lovetext
β β’ ${prefix}butterfly
β
β *Info*
β β’ ${prefix}owner
β β’ ${prefix}donasi
β β’ ${prefix}rules
β β’ ${prefix}daftar
β β’ ${prefix}creator
β
β *Owner*
β β’ ${prefix}bc [text]
β β’ ${prefix}bc2 [text]
β β’ ${prefix}leave
β β’ ${prefix}get [link]
β β’ ${prefix}shutdown
β β’ ${prefix}restart
β β’ ${prefix}buggc
β β’ ${prefix}creategrup @tag
β β’ ${prefix}listgroup
β β’ ${prefix}block
β β’ ${prefix}unblock
β β’ ${prefix}setppbot
β β’ >
β β’ $
β β’  => 
β
β *Group*
β β’ ${prefix}antilink 1 / 0
β β’ ${prefix}antivirtex 1 / 0
β β’ ${prefix}hidetag [text]
β β’ ${prefix}linkgrup
β β’ ${prefix}grup open/close
β β’ ${prefix}add 628
β β’ ${prefix}tagall
β β’ ${prefix}kick @tag
β β’ ${prefix}setdesc [text] 
β β’ ${prefix}setname [text] 
β°ββ¬£
β­ββ§ BIG THANKS TO β§
ββ ALLAH SWT
ββ ORTU
ββ ZEEONE OFC (MASTAH)
ββ ALDI FAUZI (MASTAH)
ββ VENZZ (NEWBIE)
ββ SIEGRIN (MASTAH)
ββ DINATA (MASTAH)
ββ SANZY YT (MASTAH)
ββ PENYEDIA MODULE
β°ββββββββββββββββ β³Ή
`
	}