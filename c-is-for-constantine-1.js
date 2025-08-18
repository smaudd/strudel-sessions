samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')
samples('github:switchangel/breaks')
samples('github:yaxu/clean-breaks/main')

setCps(100/60/4)

const kick = n("<[0 0 [- 0] 0] [0 0 0 0]!3>").s("house")
  .gain(1)
  .distort(1.1)
  .attack(0.01)
  .dec(0.5)
  .lpf(500)

const hh = s("~ ~ hh:0 ~".fast(4)).gain(0.2)
  .distort(1.1)
  .dec(0.1)
  .delay(0.01)
  // .jux(rev)

const hh2 = s("hh [hh -] [<hh [hh hh]>] [hh]".fast(2))
 .gain(rand.range(0.8, 0.7))
 .dec(rand.range(0.5, 0))
 .attack(rand.range(0, 0.01))
 .delay(cosine.range(0, 0.2))
 .rarely(rev)


const cp = s("~ ~ cp:5 ~ ~ ~ ~ ~".fast(0.5))
 .dec(0.1)
 .delay(0.125)
 .gain(0.4)


// const tom = s(`
// ~ sn@2 ~ hh - sn ~ -
// ~ sn cp - hh ~ ~ -
// `.fast(2)).gain(0.1)
//   .distort(1)
//   .dec(0.1)
//   // .delay(0.125)

const groove = s("breaks:2/2").fit()
 .scrub("{0 1 [2 0] 2 [2 2] [5 2] 6/2 [7 2]}%8".div(8).seg(8))
 .gain(1)
 .hurry(0.5)
 .dec(0.03)
 .release(1.2)
 .room(sine.range(0, 0.2))
 .roomlp(1200)
 .phaser("2 5")
 // .delay(0.1)
 .hpf(1200)
 .release(0.2)
 // .delay(0.25)

const groove2 = s("breaks:3/2").fit()
 .scrub("{0 1 0 2 [2 2] 0 6/2 [7 2]}%8".div(8).seg(8))
 .gain(0.5)
 .rarely(rev)
 .dec(0.01)
 .release(1.2)
 // .room(0.2)

const birds = n("0@2 0@4 1 5".fast(2)).s("sine")
  .hurry(0.5)
  .fast("0.25 0.125")
  .gain(0.75)
  .hpf(1200)
  // .delay(0.125)
  .room(0.3)

const bass = irand("0 1").rib(0, 2).scale("B1:minor,[B2:minor,B2:pentatonic]").struct("x x x x/2".fast(2)).s("sine")
  // .fast("0.5")
  .fm("2@2 2.2 2.7 3")
  .vib(1)
  .lpf(sine.range(200, 300).mul(8))
  .fmattack("0.1 0@2 0@2")
  // .sustain(0.5)
  .dec(0.25)
  .release(0.25)
  .distort(1.2)
  .legato(1)
  .gain(0.2)

const lead = n("<[0 1 2]!3 [1 [2 3] [3 -]]> <[2 1 0] [[- 3] [1 1] [2 1]]>").scale("E2:minor").s("gm_acoustic_guitar_steel")
  .gain(rand.range(0.7,0.9))
  .room(0.3)
  .sustain("0.5 0.125")
  .decay("0.5 0.125")
  .release("0.5 1")
  .legato(1)
  // .hpf(1200)
  .fast(0.75)

const lead2 = n(irand("8 16").rib(0, 1)).struct("[x,x@2 x,x [x,x - x/2]]".fast("2 4@2")).scale("E3:minor,E2:minor E2:minor")
  .s("pulse:20,sine")
  .gain(sine.range(0.4, 0.3))
  // .rarely(rev)
  .dec("0.3 0.25 0.4")
  .release("0.5 0.3")
  .hpf("600 1220 0 400 0")
  .lpf("800 600")
  .fm(cosine.range(1, 4).mul("12 4@2 3"))
  .fmattack(0)
  .delay(0.125)

$: stack(
  kick.fast(1),
  bass.fast(1),
  //lead.hurry(2),
  lead2.hurry(0.25),
  hh.fast(1),
  hh2.fast(1),
  //groove.fast(1),
  //groove2.fast(1),
  // cp.fast(2),
  //birds,
)
// .hpf("00")





// silenc
