
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

const rd = n("~ ~ 0 ~".fast(4)).s("rolandtr909_rd")
 .room(0.2)
 .attack(0.01)
 .dec(0.8)

const tom = n(
  `
  5 ~ 8/2 ~
  5*2 ~ 3*2 ~
  `.slow(2)
).s("sequential")
  .lpf(800)
  .coarse("32 16 64")
  .release(1)
  .attack(0.1)
  .room(0.2)
  .delay(0.5)
  .dec(0.1)
  // .distort(0.5)

const hh3 = n("0 2 5 2".fast(4)).s("akaixr10_hh")
  .hpf(1200)
  .dec(0.2)
  // .distort(1)

const cp = n("~ ~ 0 ~ ~ ~ 0 ~".fast(1)).s("dpm48_cp")
  .hpf(1200)
  .dec(0.2)

const lead = n(irand("-4").rib(0,"1")).struct("x x x x x".fast("1")).scale(
  `C3:iwato,C2:iwato`)
  .s("sine,pulse")
  .dec("0.4 0.3 0.3")
  // .degradeBy(sine.range(0.1, 0.015).fast(2))
  // .attack(perlin.range(0.01, .0001))
  // .coarse("<2!8 3>")
  // .dec(sine2.range(1, 2))
  .delay(0.125)
  .release(sine2.range(0.01, 0.05))
  .room(0.3)
  .size(4)
  // .roomlp(1200)
  // .fm(irand(8).rib(0, "6"))
  // .sustain("0.2 0.5")
  // .release(0.1)
  // .fmdecay("0.1 1")
  .lpf("2000 5200")
  .phaser("0.2 1")
  // .attack(0.05)
  // .fmh(sine.div(16).range(16, 8))
  // .delay(0.25)
  .fmsustain("<0.1 0.5>")
  // .fmenv("lin".slow(4))
  .compressor("-10:20:10:0.1:.02")

const bk = s("essentials:12,essentials:13")
  .fit()
  .scrub("{1 4 4 3 2 4 6 4}%8".div(16).seg(8))
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

// welcome back
// today is blue
// lets begin :)

// i think we good for today :)
// hope you like it and the pops doesnt make yo go crazy like me :)

// see ya

$: stack(
  // kick.gain(1.2).orbit(1),
  bk.gain(0.5).delay(0.125).orbit(2),
  // hh.gain(0.8).delay(0.125).orbit(2), 
  // hh2.gain(0.3).hurry("2@8 4 8").orbit(2),
  // rd.gain(0.2),
  cp.gain(0.6).orbit(2),
  // tom.gain(3).orbit(2),
  // hh3.gain(0.3).delay(0.1),
  lead.gain(0.85),
)
.color("yellow")
.scope()
.hpf(hpf)
// .color("gold")
// ._punchcard()


