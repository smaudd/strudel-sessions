// Jam https://www.youtube.com/watch?v=VGSsrsBmoZQ


setCps(145/60/4)
samples('github:smaudd/strudel-samplepack-template/joonies-dnb-collection')
samples('github:tidalcycles/dirt-samples')

const kick = n(
  `
  0 0 0 0
  `
).s("house")
  .lpf(800)
  .release(1)
  .dec(1)
  .distort(0.5)

const hh = n("~ ~ 0 ~".fast(4)).s("rolandtr909_hh")
  .hpf(1200)
  .dec(0.2)

const hh2 = n("0 0 0 0".fast(2)).s("rolandtr909_hh")
  .hpf(1200)
  .dec(0.2)
  // .distort(1)

const tom = n(
  `
  5 ~ 4/2 ~
  `.slow(2)
).s("house")
  .lpf(800)
  .release(1)
  .attack(0.1)
  .room(0.2)
  .delay(0.5)
  .dec(1)
  // .distort(0.5)

const hh3 = n("0 2 5 2".fast(4)).s("akaixr10_hh")
  .hpf(1200)
  .dec(0.2)
  // .distort(1)

const cp = n("~ ~ 0 ~ ~ ~ 0 ~".fast(1)).s("dpm48_cp")
  .hpf(1200)
  .dec(0.2)

const lead = n("<2,2> <0,2> <0,2>").struct("<x x x x x>".fast(8)).scale(
  `E2:minor`)
  .s("sine")
  .dec("0.6 0.5 0.1")
  // .degradeBy(sine.range(0.1, 0.015).fast(2))
  // .attack(perlin.range(0.01, .0001))
  // .coarse("<2!8 3>")
  .dec(sine2.range(0.20, 0.15))
  // .release(sine2.range(0.01, 0.05))
  .room(0.2)
  // .size(4)
  // .roomlp(1200)
  .fm("2@2 1@2 0@8 3200@2")
  // .sustain("0.2 0.5")
  // .release(0.1)
  // .fmdecay("0.1 1")
  .lpf("800 200")
  // .phaser("2")
  // .attack(0.05)
  // .fmh(sine.div(16).range(0.00008, 0.0005))
  // .delay(0.25)
  // .fmsustain("<0.1 0.5>")
  // .fmenv("lin".slow(4))
  // .lpf(3200)
  .compressor("-15:20:10:0.1:.02")
 // .attack(sine.segment(16).range(0,15))
  .color("cyan")
 ._punchcard({ width: 500 })._scope()

   // .pace(8)

const bk = s("essentials:20")
  .fit()
  .scrub("{1 4 2 3 2 3 6 2}%8".div(16).seg(8))
  // .orbit(2)
  .hpf(1200)
  .lpf(800)
  .dec(1)
  .distort(0.5)
  // .room(0.1)
  // .vib(2)
  // .div(16)
  // .seg(8)
  // .scrub("0")

const hpf = slider(0, 0, 1200)

$: stack(
  kick.gain(0.6).orbit(1),
  // bk.gain(0.05).delay(0.125).orbit(2),
  // hh.gain(0.08).delay(0.05).orbit(2), 
  // hh2.gain(0.01).orbit(2),
  // cp.gain(0.05).orbit(2),
  // tom.gain(1).orbit(2),
  // hh3.gain(0.005).delay(0.1),
  lead.gain(0.05),
)
.hpf(hpf)
// hiiii :)
// today we going for some dubtechno but high speed i guess..
// hope u like it :)

// i think thats all for today "thnsxx for watching? i guess lol"

//byeeee 
