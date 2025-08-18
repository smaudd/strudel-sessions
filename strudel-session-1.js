samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')
setCpm(33)

const kick = s(`
house house house house
house house house [house house]/2
`).slow(2)
 .lpf(1200)
 .distort(0.6)
 .gain(0.5)

const rumble = s(`
~ ~ house ~ ~ ~ ~ house ~ ~ ~ ~ ~ ~ house ~
`).slow(1)
 .attack(0.2)
 .room(0.1)
 .lpf(100)
 .distort(0.6)
 .gain(0.4)

const hh = s("~ ~ hh ~".fast(4)).bank("tr909")
 .dec(0.2)
 .distort(0.4)
 .gain(0.05)
 .delay(0.125)

const hh2 = s("hh:3 hh:3 hh hh:2".fast(4)).bank("tr909")
 .dec(0.2)
 .distort(0.2)
 .gain(0.003)
 .delay(0.75)

const ride = s("~ ~ rd:5 ~".fast(4)).bank("tr909")
 .dec("0.4 0.8")
 .attack(0.05)
 .distort(0.5)
 .gain(0.01)
 .room(0.5)
 .delay(0.1)
 .hpf(5000)

const cp = s("~ ~ cp:2 ~ ~ ~ cp ~".fast(2)).bank("tr909")
 .dec(0.2)
 .distort(0.5)
 .gain(0.05)

const sq = s("sequential ~")
  .dec(0.1)
  .delay("0.5@2 0.25@2 1")
  .delaytime(1/4)
  .hpf(1200)
  .room(0.25)
  // .jux(rev)
  .gain(0.05)
  ._scope()// "2 16 64 32 128@2"
// "x x/2 x@2 x x x/2 x x*2 x@2 x/4 x x/7"
// "1 8,4 2,64,4 5,1,8 64,4,1"
const lead = n(irand("1 8 16,8 4").rib(0, "2 8 32 16".slow(1)))
  .struct("x x x x".fast("4")).scale("E4:minor")
  .sound('sine')
  .fmh("<1 1 1.005 1.01>")
  .fmattack("0.01 0.1")
  .fm(sine.mul(16).mul("<0.1 0.01 0.1 0.1 0.3 0.1 -0.2 0.3 0.01>".fast(2)))
  // .fm("<1 3 <2 1> 1>")
  .dec("<0.1 0.2@2 0.15 0.2>".fast(2))
  .release("<0.05 0.1 0.1>".fast(2)) 
  .delay("0.125 0.25 0.1")
  .phaser("2 0 3@2")
  .room("0.2 0.01")
  .roomlp(1200)
  .hpf(sine.mul(2048).range(0, 1200))
  .gain(0.15)
  // ._punchcard()// x x x@2 x*4"

const bass = n(irand("1").rib(0, 2)).struct(`x!14 x x`).scale("E2:minor") // minora gain
 .s('supersaw')
 .gain(0.5)
 .fm("0.2 6 3 5 8 16 32")
 .dec("0.08 0.1 0.125")
 .lpf("200 300 100")
 .lpf(slider(583, 0, 1000))
 .gain("0.3")
 .distort(1)

const pad = n(irand("2 8").rib(0, 2)).struct("[x x@2 x x@2]".fast(2)).scale("E3:minor")
 .s("gm_pad_metallic")
 .attack(0.1)
 .dec(0.125)
 .release(0.3)
 .lpf("1200")
 .lpf(slider(419, 0, 1000))
 .room('0.2 2')
 .phaser(0.2)
 .distort(0.5)
 .delay(0.125)
 .gain(slider(0.1665, 0, 0.3))
 // .jux(rev)

const hpf = slider(581, 0, 1000)
$: stack(
  kick,
  rumble,
  // hh,
  // hh2,
  // cp,
  // ride,
  // sq,
  bass,
  lead,
  // pad
)
.hpf(hpf)
// .delay(hpf.range(0, 0.0005)) 
// .room(hpf.range(0, 0.0001)) 


// welcome to this techno kinda session :)

// i hope you enjoy, leave your like and subscribe haha
