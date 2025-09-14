samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')
// samples('shabda/speech/pt-BR/m:floresta,tropical,lluvia,cae,del,cielo')
setCpm(42)

const kar = [
  `[0 0 0 0]`,
  `[0 0 0 0]
   [0 0 0 [0 0]]`.slow(2)
]

const kick = n(kar[1]).s("house")
 .distort(0.5)

const cp = s("[~ ~ cp ~]!2").bank("tr909")
 // .delay(0.125)
 .room(0.2)
 .dec(0.1)

const hh = s("[~ ~ hh ~]!4").bank("tr909")
 .delay(0.1)
 .room(0.05)

const rd = s("[~ ~ rd ~]!4").bank("tr909")
 .delay(0.125)
 .room(0.2)
 .attack(0.1)

const sq = n("<[0 ~ 0 ~]!15 [0 ~ 0*2 0]!1>".fast(4)).s("akaixr10_bd:7")
 .add(0.25)
 .dec(0.5)
 .delay(0.1)
 .attack(0)

const bk = s("breaks125")
  .fit()
  .scrub(irand("<16>").rib(0, 8).div(16).seg(8))
  .dec(0.05)
  .room(0.2)
  .delay(0.5)


let i = 0
const ba = [
  "<1>",
  "<1 1 1 1 8 16 13 16>",
  "<16 8 10 30/2 10 2>",
  "<16 8 10 30/2 10 2>",
]

const bb = [
  "<[x x x [x x]]>",
  "<[x x x x]!4 [x x x [x x]]!2>",
  "<[x x x x]>",
  "<[x [x x] x]>",
]

const ac = [
  0,
  sine.range(0.2, 0.1),
  sine.range(0, 0.1),
  0
]

const bass = n(irand(ba[i]).rib(0, 10)).sub(8).struct(bb[i].fast(2))
  .scale("G1:minor G3:minor G3:minor G3:minor")
  .sound("<sine,pulse z_sine>")
  .dec(sine.range(0, 0.5))
  .attack(ac[i])
  .fm(sine.range(0, 6))
  .sustain(1)
  .delay(0.12)
  // .chorus()
  .lpe(sine.range(0, 18))
  .lpf(tri.range(100, 60))
  .distort(0.2)
  .room(0.25)
  .roomlp(1200)
  .size(0.2)
  // .jux(rev)

// hii :)) lets see whats up for today

$: stack(
  // kick.duckorbit(2).duckattack(0.2).duckdepth(0.4),
  // hh.gain(0.3),
  // cp.gain(0.5),
  // sq.loopAt(2).gain(0.6).orbit(2),
  // rd.gain(0.15).orbit(2),
  // bass.orbit(2),
  // bk.gain(0.4),
)
.hpf(slider(465.6, 0, 1200))
// .punchcard()
// .scope()
  // .bank("909")
