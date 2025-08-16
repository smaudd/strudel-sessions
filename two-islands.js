samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')
setCpm(33) // llike this?
// let cc = await midin('OP-Z')

const kick = s(`
house house house house
house house house [house house]/2
`).slow(2)
 .lpf(800)
 .gain(0.5)
const hh = s("~ ~ hh ~".fast(4)).bank("tr909")
 .dec(0.2)
 .distort(0.4)
 .gain(0.1)
 .delay(0.125)

const hh2 = s("hh:3 hh:3 hh hh:2".fast(4)).bank("tr909")
 .dec(0.2)
 .distort(0.5)
 .gain(0.01)
 .delay(0.5)

const ride = s("~ ~ rd:5 ~".fast(4)).bank("tr909")
 .dec("0.4 0.2 0.5".fast(2))
 .attack(0.05)
 .distort(0.5)
 .gain(0.03)
 .delay(0.125)
 .hpf(5000)

const cp = s("~ ~ cp:2 ~ ~ ~ cp cp".fast(2)).bank("tr909")
 .dec(0.2)
 .distort(0.5)
 .gain(0.05)

const sq = s("sequential ~")
  .dec(0.1)
  .delay("0.5@2 0.25@2 1") // thats the same? im not sue
  // i think it can be changed
  .delaytime(1/4)
  .hpf(1200)
  .room(0.25)
  // .jux(rev)
  .gain(0.05)
  ._scope()// "2 16 64 32 128@2" save this for later liked
// "x x/2 x@2 x x x/2 x x*2 x@2 x/4 x x/7"

const lead = n(irand("1 8 2,64 0 64").rib(0, "2 4"))
  .struct("x x x x".fast(1)).scale("E4:minor")
  .s('sine')
  // .fma
  .fmh("<1 1 1.005 1.01>")
  .fmattack("0.01 0.1")
  .fm(sine.mul(16).mul("<0.1 0.01 0.1 0.1 2 0.1 -0.2 0.5 0.01>".fast(4)))
  // .fm("<2 6 <2 1> 1>")
  .dec("<0.1 0.05@2 0.15 2*2>".fast(2))
  .release("<0.3 0.1 0.1>".fast(2)) 
  .delay(0.125)
  .phaser("2 0 3@2")
  .room("0.1 0.01")
  .roomlp(1200)
  .vib("0.2")
  .lpf("<880 1200 1000 @1500 2000>")
  .gain(0.3)
  ._punchcard()// x x x@2 x*4"

const bass = n(irand("1").rib(0, 1)).struct("x x x".fast(4)).scale("E2:minor") // minora gain
 .s('supersaw')
 .gain(0.5)
 .dec("0.08 0.1@2 0.5")
 .lpf(sine.mul(2048/8))
 .gain(0.6)
 .distort(1)

const pad = n(irand("8").rib(0, 2)).struct("[x x@2 x x@2]".fast(4)).scale("E3:minor")
 .s("gm_pad_metallic")
 // .attack(0.3)
 .dec(0.15)
 .release(0.15)
 .lpf("1200")
 .lpf(slider(331, 0, 1000))
 .room('0.2 2')
 .phaser(0.2)
 .distort(0.5)
 .delay(0.5)
 .gain(0.8)
 .jux(rev)

const hpf = slider(553, 0, 1000) // its so cliche its funny but it works hahaha
$: stack(
  kick,
  // hh,
  // hh2,
  // cp,
  // ride,
  sq,
  bass,
  lead,
  pad
)
.hpf(hpf)
// .delay(hpf.range(0, 0.0005)) 
// .room(hpf.range(0, 0.0001)) 
