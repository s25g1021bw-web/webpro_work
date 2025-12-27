"use strict";

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

let zelda = [
    { title: "ゼルダの伝説", releaseYear: "1986", image: "zelda.jpg", console: "ファミリーコンピュータディスクシステム", impression: "記念すべき最初のゼルダである。最近の作品でも聞き覚えのある曲が聞けて満足度が高い。"},
    { title: "リンクの冒険", releaseYear: "1987", image: "link.jpg", console: "ファミリーコンピュータディスクシステム", impression: "この作品だけかなり異色で横スクロールの2Dでタイトルもゼルダではなくリンクの冒険となっている。難易度がめちゃくちゃ高くクリアまでの道のりは地獄だった。"},
    { title: "ゼルダの伝説 神々のトライフォース", releaseYear: "1991", image: "zeldak.jpg", console: "スーパーファミコン", impression: "SFCになったことで曲とグラフィックがかなり向上した。初代ゼルダをプレイしてから今作をプレイすると進化に感動する。難易度もちょうど良く満足度が高い。"},
    { title: "ゼルダの伝説 夢を見る島", releaseYear: "1993", image: "zelday.jpg", console: "ゲームボーイ", impression: "航海の途中に嵐に巻き込まれ漂着した島での冒険を描いている。まずらしく夢オチでありなんとも言えぬ後味がある。店で物を盗むことができ、ドロボーと言われるようになってしまう要素も楽しい"},
    { title: "ゼルダの伝説 時のオカリナ", releaseYear: "1998", image: "zeldat.jpg", console: "NINTENDO 64", impression: "ゼルダ作品初の3Dである。今のゼルダ作品の原型でとっても完成度が高い。個人的にも1、2を争う作品である。ちなみにこの作品によってこれからの作品は三つの世界に分岐する。"},
    { title: "ゼルダの伝説 ムジュラの仮面", releaseYear: "2000", image: "zeldam.jpg", console: "NINTENDO 64", impression: "三日で落ちてくる月をどうにかする話。三日ごとに世界をやり直し、何回も同じ日を繰り返すゲーム性はかなり珍しい。ホラー要素が多く小学3年生の自分には厳しかった。しかし「時のオカリナ」に並ぶほど好きな作品である。"},
    { title: "ゼルダの伝説 ふしぎの木の実", releaseYear: "2001", image: "zeldah.jpg", console: "ゲームボーイカラー", impression: "さらわれたディンとホロドラムの四季を取り戻すため、リンクが冒険へと向かう話。ハードを所持していないため未プレイ。やりたい。"},
    { title: "ゼルダの伝説 風のタクト", releaseYear: "2002", image: "zaldakaze.jpg", console: "ニンテンドーゲームキューブ", impression: "『時のオカリナ』で大人リンクがガノンドロフを封印してから、数百年後の世界である。海に沈んだハイラルの大地を復活させようとするガノンドロフの野望が成就しそうになった瞬間ハイラル王によってトライフォースを取られてしまい笑うしかなくなってしまう様子はかなり哀愁が漂う。ハイラル王は流石にきったない"},
    { title: "ゼルダの伝説 4つの剣+", releaseYear: "2004", image: "zelda+.jpg", console: "ニンテンドーゲームキューブ", impression: "ゼルダ作品にしては珍しく4人プレイまでできる。異色だったためかあまり売れなかったらしい。それでも結構評判はいい。"},
    { title: "ゼルダの伝説 ふしぎのぼうし", releaseYear: "2004", image: "zeldahu.jpg", console: "ゲームボーイアドバンス", impression: "主人公リンクの体を縮小させたり元の大きさに戻したりしながら冒険を進める。ハードを所持していないため未プレイ。やりたい。"},
    { title: "ゼルダの伝説 トワイライトプリンセス", releaseYear: "2006", image: "zeldatw.jpg", console: "ニンテンドーゲームキューブ", impression: "神ゲーの一つ。相棒のミドナがとっても可愛い。マスコット姿の方が人気だが真の姿の方がどう考えてもいいに決まっている。"},
    { title: "ゼルダの伝説 夢幻の砂時計", releaseYear: "2007", image: "zeldamu.jpg", console: "ニンテンドーDS", impression: "「風のタクト」の続編。しかし、やったことがないためよくわからない。多分安くなってるだろうからそろそろ買おうかな。"},
    { title: "ゼルダの伝説 大地の汽笛", releaseYear: "2009", image: "zeldad.jpg", console: "ニンテンドーDS", impression: "「夢幻の砂時計」の続編しかし、同様にやったことがないためよくわからない。やってみたい。"},
    { title: "ゼルダの伝説 スカイウォードソード", releaseYear: "2011", image: "zeldas.jpg", console: "Wii", impression: "面白かった。シリーズの中では最古の時代にあたる。雲の上と大地を行ったり来たりするゲーム性がいい。ゼルダが可愛い。神ゲー"},   
    { title: "ゼルダの伝説 神々のトライフォース2", releaseYear: "2013", image: "zeldak2.jpg", console: "ニンテンドー3DS", impression: "なんだかんだやったことがない。シリーズファンとしてはやらないといけないがやる時間がない。大学ってもっと楽だと思ってたのになぁ？？自分が間抜けなだけか。"}, 
    { title: "ゼルダの伝説 トライフォース3銃士", releaseYear: "2015", image: "zeldatr.jpg", console: "ニンテンドー3DS", impression: "これもやったことがない。確か発売当初友達が一緒にやろうといっていたがあの話はなんだったんだろうか。声をかけてみようかな。でもあいつも俺も忙しいからしばらく先送りかもね。"}, 
    { title: "ゼルダの伝説 ブレスオブザワイルド", releaseYear: "2017", image: "zeldab.jpg", console: "Wii U、Nintendo Switch", impression: "今までの作品とのつながりが見受けられない。もしかしたら全く新しいストーリーかもしれない。言わずと知れた神ゲーで自分は多分合計500-600時間ぐらいはやった。大便を900個も集めさせられるゲームでもある。ある意味糞ゲーである。"}, 
    { title: "ゼルダの伝説 ティアーズオブザキングダム", releaseYear: "2023", image: "zeldath.jpg", console: "Nintendo Switch", impression: "ブレスオブザワイルドの続編。ガノンドロフが完全復活し平和になった世界にまた大騒動が引き起こされた。前作に登場したシーカー族の技術がほぼほぼ消えており若干悲しい。ちなみに前作と同様大便集めが重要である。やっぱり糞ゲーじゃないか"}, 
    { title: "ゼルダの伝説 知恵のかりもの", releaseYear: "2024", image: "zeldati.jpg", console: "Nintendo Switch", impression: "時間がなくてやっていないしかってもいない。時間をください。たくさん。切実に。頼むから。ね？"}, 
]

let mg = [
    { title: "METAL GEAR", releaseYear: "1987", image: "mg.jpg", console: "MSX2", impression: "戦術核弾頭を装備した歩行戦車「メタルギア」を発見・破壊するために送り込まれた主人公のスパイ「ソリッド・スネーク」の活躍を描く。プレイしたのがかなり前なので全く記憶がない。"},
    { title: "METAL GEAR 2 SOLID SNAKE", releaseYear: "1990", image: "mg2.jpg", console: "MSX2", impression: "「メタルギア」の4年後を描く続編で、ソリッド・スネークが再び潜入任務に挑む。積みゲー化しているためまだプレイしていない。"},
    { title: "METAL GEAR SOLID", releaseYear: "1998", image: "mgs.jpg", console: "PlayStation", impression: "核施設を占拠したテロリストの野望を阻止し人質を救出するため、伝説のソリッド・スネークが単身アラスカの孤島シャドー・モセスへ挑む物語。3Dになり、良質なボイスとムービーが付いたことで深い作品になった。まだ荒いグラフィックに味がある。めちゃくちゃ渋い声がいい"},
    { title: "METAL GEAR SOLID 2 SONS OF LIBERTY", releaseYear: "2001", image: "mgs2.jpg", console: "PlayStation2", impression: "「メタルギアソリッド」後のソリッド・スネークを描きつつ、舞台は新主人公「雷電」の戦いへと移る。機種がPS2になったおかげでグラフィックが非常に進化した。新人の雷電は未熟なところが目立つが、それが成熟し切ったスネークからのギャップがあり良い。ストーリーにおいても話していた相手がAIであったなどとどんでん返しが面白い。"},
    { title: "METAL GEAR SOLID 3 SNAKE EATER", releaseYear: "2004", image: "mgs3.jpg", console: "PlayStation2", impression: "ソリッド・スネークではない「最古のスネーク」、ネイキッド・スネークを主人公に据え、「メタルギアシリーズ」の原点ともいうべきストーリーが語られた。初めてプレイした作品ということもあり、個人的に一番好きな作品である。ゲーム本編では無線でのキャラの掛け合いがあるが今作では非常に無線でのネタ要素が豊富で、ボリューミーである。"},
    { title: "METAL GEAR SOLID PORTABLE OPS", releaseYear: "2006", image: "mgspo.jpg", console: "PlayStationPortable", impression: "「メタルギアソリッド3」の6年後が描かれている。デモムービーではデジタルコミックが採用されている。PSPは所持していないのでプレイできていない。マスターコレクションで収録されるのを願う。"},
    { title: "METAL GEAR SOLID 4 GUNS OF THE PATRIOTS", releaseYear: "2008", image: "mgs4.jpg", console: "PlayStation3", impression: "『メタルギアシリーズ』の完結編として発売された。ソリッド・スネークの最後の戦いを描き、全ての謎が明かされる。完結編というだけあって今までのシリーズに出てきた人物が多く登場している。最終決戦は今までの作品のUIが続々と出てきたり、メタルギアソリッドでプレイヤー自身が破壊したメタルギアを操縦できるといった熱い要素がある。"},
    { title: "METAL GEAR SOLID PEACE WALKER", releaseYear: "2010", image: "mgspw.jpg", console: "PlayStationPortable", impression: "「メタルギアソリッド3」の10年後である1974年が描かれている。デモムービーでは『ポータブル・オプス』同様にデジタルコミックが採用されている（一部リアルタイムポリゴンデモも存在。)PSPを所持していないのでこちらもプレイできていない。早くマスターコレクションVol2を出してほしい。"},
    { title: "METAL GEAR RISING REVENGEANCE", releaseYear: "2013", image: "mgsr.jpg", console: "PlayStation3", impression: "雷電を再び主人公とし、「メタルギアソリッド4」の4年後を描く。ジャンルは敵を豪快に斬り伏せて進む「ライトニングボルトアクション」。従来のメタルギアにはないアクション要素が爽快である。ネットミームにもなり爆発的な人気を誇るアームストロング上院議員も今作で登場する。「上院議員を舐めんじゃねえ!」というセリフはなかなか秀逸。上院議員になってこれを言えたら気持ちがいいはずである。あと非常に激しい曲調がめっちゃ好き"},
    { title: "METAL GEAR SOLID V GROUND ZEROES", releaseYear: "2014", image: "mgsg.jpg", console: "PlayStation3、PlayStation4、Xbox360、XboxOne、PC", impression: "『メタルギアソリッドV』のプロローグ。「ピースウォーカー」の1年後が描かれている。プロローグであることからかなり短い。今作から「FOXエンジン」を使用して開発されているため操作が一新された。結構いい。自由度が高く潜入の方法にかなり幅がきくようになり良作。"},
    { title: "METAL GEAR SOLID V THE PHANTOM PAIN", releaseYear: "2015", image: "mgs5.jpg", console: "PlayStation3、PlayStation4、XboxOne、PC", impression: "前作『グラウンド・ゼロズ』の9年後の世界が描かれた、『メタルギアソリッドV』の本篇に当たる作品。小島秀夫監督がなんらかの理由で解雇されたためストーリーがいきなり終わってしまい消化不良感がある。ゲーム自体は良作なためしっかりと完結させてほしかったところである。続きがやりたい。"},
]

let baki = [
    { title: "グラップラー刃牙", releaseYear: "1991 - 1999", image:"grappler_baki.jpg", volume1: "42", volume2: "371", impression: "普段は平凡な高校生だが、東京ドームの地下で行われる格闘試合では無敗のチャンピオンとして君臨する主人公・範馬刃牙とその父親で最強の生物である範馬勇次郎を中心にした格闘ドラマ。「地闘技場編」「幼年編」「最大トーナメント編」の三つから成るが、最初のシリーズということもあり全て面白い。これからのシリーズにも登場する主要なキャラクターの大半はここで勢揃いする。初期ということもありまだキャラが確立していないために、最強のはずの範馬勇次郎が麻酔銃で簡単に眠らされたり、格下にドアノブを抑えられたことでドアノブを捻ることができず、驚く様子が描写されている。現在の傍若無人ぶりと照らし合わせてみるとなんとも滑稽である。"},
    { title: "バキ", releaseYear: "1999 - 2005" ,image:"baki.jpg", volume1: "31", volume2: "276", impression: "「最凶死刑囚編」「中国大擂台賽編」「神の子激突編」の三つから成る。死刑囚編と大擂台賽はバキシリーズの中でも多くの人気を誇る場所であり、印象深い。この二つの編は味方チーム対敵チームという展開で非常にわかりやすく盛り上がる場が多い。だが神の子激突編ではマホメド・アライJrを主要キャラがボコボコにする展開となっており、いささか可哀想である。その後も刃牙の彼女である梢を手に入れるために刃牙と戦うが、見せ場もなく瞬殺され、主人公である刃牙が父親に挑戦状を叩きつけるまでのかませになっている。いささかどころではなく非常に可哀想である。"},
    { title: "範馬刃牙", releaseYear: "2006 - 2012" ,image:"hanmabaki.jpg", volume1: "37", volume2: "312", impression: "「実戦シャドーファイティング編」「超絶!!監獄バトル編」「野人戦争（ピクル・ウォーズ）編」「強者達の闘い編」「地上最強の親子喧嘩編」の五つから成る。父、範馬勇次郎とついに親子喧嘩という名の決戦を行い一旦バキシリーズは綺麗に完結した。全編通してベストバウトが多く、内容が濃い。初登場から大きな印象を残したオリバや腑抜けいていた愚地克巳の覚醒なども目が離せない。今までもバキシリーズお馴染みの謎理論が展開されていたが今シリーズからますます増えたような気がする。ハッタリを通すのが厳しいと感じることが増えた。"},
    { title: "刃牙道", releaseYear: "2014 - 2018" ,image:"bakidou.jpg", volume1: "22", volume2: "198", impression: "ストーリーの区切りはなく、一貫して最新の科学技術とトンチキな降霊術で蘇ったクローン宮本武蔵と現代のグラップラーの戦いが描かれる。前作の原人ピクルに続き、クローンで蘇った宮本武蔵が登場し、なかなかぶっ飛んでいる。どちらも非常に強く、現代の人気キャラが足や手を欠損したり、死亡していることから賛否両輪が目立つ。しかし、この続編の不評ぶりに比べたらかなり面白い気はする。名シーンも迷シーンも多いし。"},
    { title: "バキ道", releaseYear: "2018 - 2023" ,image:"bakidou2.jpg", volume1: "17", volume2: "151", impression: "前作と同じく、ストーリーに区切りがなく、一貫して国技である相撲との戦いが描かれる。相撲という題材は良いが、扱うのが遅すぎた節がある。ボクシングやってた「範馬刃牙」とかの前後にやっていればよかったのに。ピクル、宮本武蔵に続き、強い格があるキャラを出すのは難しかったようで前述した二人よりも強さに説得力がない。加えて、ずっと高い格を維持していたオリバが噛ませにされたせいで非常に不評が目立つ。"},
    { title: "刃牙らへん", releaseYear: "2023 -" ,image:"bakirahen.jpg", volume1: "56(12月25日現在)", volume2: "5(12月25日現在)", impression: "ついにずっと活躍が乏しい気味な刃牙の腹違いの兄のジャック・ハンマに焦点が当てられる。自分なりのファイティングスタイルの噛道を立ち上げそれを武器にして戦う。正直今のところそこそこ面白いが噛道を用いる都合上、原人ピクルとの戦いで噛みつき合戦になるのだが、そこで二人でディープキスの状態になっているのがとてつもなく気持ちが悪い。なんでそうなった。おかしいだろ。作者はもしかしたら時代の流れを受けてホモになってしまったのかもしれない。まあ悪いことではないが描写するのは勘弁してほしいところである。"},
]

// トップページ
app.get("/top", (req, res) => {
  res.render('top');
});

app.get("/zelda", (req, res) => {
  res.render('zelda', {data: zelda} );
});

app.get("/zelda/:number", (req, res) => {
  const number = req.params.number;
  const detail = zelda[ number ];
  res.render('zelda_detail', {data: detail} );
});

app.get("/zelda_add", (req, res) => {
  let newdata = {
    title: req.query.title,       
    releaseYear: req.query.releaseYear, 
    console: req.query.console,
    impression: req.query.impression,     
  };
  baki.push(newdata);
  res.redirect('/zelda');
});

app.get("/zelda_delete", (req, res) => {
  let id = req.query.id;
  baki.splice(id, 1);
  res.redirect('/zelda');
});

app.get("/zelda_edit_page", (req, res) => {
  let id = req.query.id;
  res.render('zelda_edit', { data: zelda[id], id: id });
});

app.get("/zelda_update", (req, res) => {
  let id = req.query.id;
  let updatedData = {
    title: req.query.title,
    releaseYear: req.query.releaseYear,
    console: req.query.console,
    impression: req.query.impression,
  };
  zelda[id] = updatedData;
  res.redirect('/zelda');
});

app.get("/mg", (req, res) => {
  res.render('mg', {data: mg} );
});

app.get("/mg/:number", (req, res) => {
  const number = req.params.number;
  const detail = mg[ number ];
  res.render('mg_detail', {data: detail} );
});

app.get("/mg_add", (req, res) => {
  let newdata = {
    title: req.query.title,       
    releaseYear: req.query.releaseYear, 
    console: req.query.console,
    impression: req.query.impression,     
  };
  baki.push(newdata);
  res.redirect('/mg');
});

app.get("/mg_delete", (req, res) => {
  let id = req.query.id;
  baki.splice(id, 1);
  res.redirect('/mg');
});

app.get("/mg_edit_page", (req, res) => {
  let id = req.query.id;
  res.render('mg_edit', { data: mg[id], id: id });
});

app.get("/mg_update", (req, res) => {
  let id = req.query.id;
  let updatedData = {
    title: req.query.title,
    releaseYear: req.query.releaseYear,
    console: req.query.console,
    impression: req.query.impression,
  };
  mg[id] = updatedData;
  res.redirect('/mg');
});

app.get("/baki", (req, res) => {
  res.render('baki', {data: baki} );
});

app.get("/baki/:number", (req, res) => {
  const number = req.params.number;
  const detail = baki[ number ];
  res.render('baki_detail', {data: detail} );
});

app.get("/baki_add", (req, res) => {
  let newdata = {
    title: req.query.title,       
    releaseYear: req.query.releaseYear, 
    volume1: req.query.volume1,
    volume2: req.query.volume2,
    impression: req.query.impression,     
  };
  baki.push(newdata);
  res.redirect('/baki');
});

app.get("/baki_delete", (req, res) => {
  let id = req.query.id;
  baki.splice(id, 1);
  res.redirect('/baki');
});

app.get("/baki_edit_page", (req, res) => {
  let id = req.query.id;
  res.render('baki_edit', { data: baki[id], id: id });
});

app.get("/baki_update", (req, res) => {
  let id = req.query.id;
  let updatedData = {
    title: req.query.title,
    releaseYear: req.query.releaseYear,
    volume1: req.query.volume1,
    volume2: req.query.volume2,
    impression: req.query.impression,
  };
  baki[id] = updatedData;
  res.redirect('/baki');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));