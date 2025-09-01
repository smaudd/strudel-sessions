samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')
setCpm(145/4)
// let cc = await midin('OP-Z')

const kptrn = arrange(
  [1, "house house house house"],
  // [1, "house house [house house] house"]
)

const kick = s(kptrn)
 .distort(0.3)

const hh = n("~ ~ 0 ~".fast(4)).s("9000_hh")
 .dec(0.2)
 .distort(0.5)

const hh2 = s("~ 0 0 0".fast(4)).s("compurhythm1000_hh")
 .dec(0.15)
 .delay(0.125)

const cp = s("<0 0 0 0>".fast(2)).s("akailinn_cp,rolandtr808_cp")
 .dec(0.15)

const bptrn = arrange(
  // [1, "-16 -8 -6"],
  // [2, "-32 -8 -6"],
  [1, "-6"]
).rib(0, 1)

const bass = n("<[0 x 0/2 x [2/2 <x>]]>!2")
  .scale("E1:pelog,E2:pelog")
  .s("sine:20,pulse:1200")
  .dec("0.05 0.125")
  .sustain(0.1)
  .release(0.1)
  // .fma
  // .noise(0.3)
  .fm(sine.slow(2).rangex(2, 0.1))
  // .fmdecay(0.1)/
  // .fmsustain(5)
  // .fmh(sine.rangex(0.008, 0.0005))
  .pw(sine.rangex(0.3, 1))
  // .pwrate(cosine.rangex(0.1, 0.2))
  // .pwsweep(tri.rangex(0.2, 0.5))
  .phaser(2)
  .vib(0.01)
 
  .lpf("2000 1500 1500!2")
  .delay(0.125)
  .room(0.4)
  // .delaysync("<1 2 3 128>")
  // .amp(10)
  // .tremolo("0.1")
  // .phaser("2 2.2")
  .distort(0.5)
  .leslie("<0 0.5 1>")
  .compressor("-10:20:10:.002:.02")
  // .fm(4)
  // .vib("1")
  // .lpf(1200)
  // ._punchcard()

const birds = n(irand("8 16").rib(0,"1")).struct("x x x x x".fast("2")).scale(
  `E3:pelog,E2:pelog`)
  .dec("0.4 0.3 0.8")
  .delay(0.125)
  .s("gm_synth_strings_2,sin,pulse")
  .pw(2)
  .fm("80 0 620 2000@2")
  .fmh("<0 0 5 0.00001@2>")
  // .degradeBy(0.5)
  // .phaser(2)
  .dec("0.5 0.08 0.1")
  .color("magenta")

  

const perc = n("<2 0 [3 2]>")
 .struct("<x x x>".fast(2))
 .s("<mridangam_nam casiorz1_lt mridangam_nam>")
 .coarse(16)
 // .degradeBy("0.5 0")
 .phaser("<2 8 2>")
 // .chop("<5 2>")
 .distort(0.8)
 // .hpf(sine)
 .room(0.3)
 .roomlp(5200)
 .dec(0.5)
 .delay(0.125)

const hpf = slider(0, 0, 1200)

stack(
  kick.gain(1),
  // birds.gain(0.3),
  hh.gain(0.3).delay(0.125),
  hh2.gain(0.2),
  // cp.gain(0.4),
  perc.gain(0.8),
  bass.gain(0.7)
)
.hpf(hpf)
  // .bank("909")
