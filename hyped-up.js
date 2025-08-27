setCpm(42)

const kick = n("1 1 1 1".fast(1))
  .s("tr909_bd")
  // .lpf(1000)
  .color("#FF00AA")
  .distort(0.7)
  .dec(0.4)
  // .release(0)
  // ._scope()
const hh = s("[~ ~ hh:2 ~]".fast(4))
  .distort(1.2)
  .bank("tr909")
  .attack(0.004)
  .dec("[0.2 0.2 1 0.2]")
  .release(1)
  .hpf(1200)
  .color("#FFEEAA")
  // ._punchcard()

const hh2 = s(`
[hh hh hh:2 ~]
[hh hh hh:2 ~]
[hh hh hh:2 hh(1,3)]
[hh hh hh:2 hh/2]
`.fast(1))
  .bank("tr909")
  .dec("0.1 0.4 0.1 0.05")
  .hpf(1000)
  .delay(0.2)

const perc = s("[cp sn hh hh:2]".fast(2)
  .bank("tr808")
  .dec(0.2)
  .release(0)
  .delay(0.2))

const ride = s("[~ ~ rolandtr909_rd ~ ]".fast(4))
  .dec("2")
  .attack(0.1)
  // .jux(rev)
  // .gain("0.5 0.8 1 0.8")
  .gain(0.4)

const cp = s("<[~!2 cp ~]!4>".fast(4))
  .bank("tr909")
  .dec(0.2)
  .room(0.2)
  // .jux(rev)
const keyrib = ["80 120 0", "8 16 32 64 128@2".fast(2)]
const key = n(irand("-8 8 16 6".slow(1)).rib(0, "4 12"))
  .struct("x x*2 x x x x*2 x x".fast(1)).scale("C3:minor C2:minor")
  .s("pulse:1200,supersaw:800 sine")
  .dec(sine.fast("4"))
  // .release(sine)
  // .hpf(1200)
  .fm(sine)
  .fmh(cosine.range("0.95 0.99@2 0.8@2", "1 2"))
  // .distort(0.5)
  // .crush(32)
  // .vib("0.1 0.5 8")
  // .vibmod("0@2 0.1 0 -44@2 0.2")
  .gain(0.5)
  .lpf(2200)
  // .lpf("2000 1200 1200")
  // .hpf("6000 1200 12000@2 600")
  // .delay(0.125)
  // .delaytime(1200)
  // .jux(rev)
  .phaser(2)
  // .color("#AAFFEE")
  
// .scope()
  // ._punchcard()._scope()

const bass = n(irand(16).rib(0, 4)).struct("x [x*2 x] x x*2").scale("C1:pentatonic")
  .s("square:10,sine:500 pulse")
  .attack(0)
  .dec(0.25)
  // .hpf(200)
  .lpf("300 880 300 1500 1200")
  .fm(perlin.range(80, 90).fast(1))
  .fmh(berlin)
  .fmattack(perlin.range(0, 0.001))
  .fmdecay(perlin.range(0, 0.01))
  .room(0.5)
  .phaser(2)
  // .vib(0.01)
  // .vibmod("2 3 2 6")
  // .delay(0.125)
  // .delaytime(0.75)
  .gain(0.8)
  .distort(0.6)
  .color("#BBEE22")
  .compressor("-5:10:10:.5:.02")
// ._scope()

const shit = n("2 5 4 2").struct("x x x@2 x".fast(2)).scale("C4:pentatonic")
  .s("square:40,sine:20,gm_alto_sax,gm_tubular_bells")
  .attack(0.1)
  .dec(0.01)
  .lpf(2200)
  .phaser(1)
  .vib("2 100 500 20")
  .vibmod("120 1200 80")
  // .room(2)
  // .delay(0.2)
  .gain(1)

const b2 = n("[c3 c3 c4 c6]!4 [c9 c8 c4 c6]!4".slow(4)).s("pulse,sine supersaw:20,pulse")
 .distort(0.3)
 .phaser("2")
 .dec("0.15")
 .room(0.15)
 .roomlp(1220)
 .fm(sine.range(0, 1))
 .fmh(perlin.range(0.99, 1))
 .lpf("1200 1000 1500")

const md = n(irand(16).rib(0, 4)).arp("0 [0,2] 8 [0,2]".fast(4))
  .scale("C3:pentatonic,C6:pentatonic")
  .degradeBy(0.3)
  .s("<pulse square sine supersaw square tri>")
  .fm(sine2)
  .fmh(itri2)
  .pw(tri.range(0, 0.1))
  .dec(0.05)
  .size(5)
  .lpf(3200)
  .room(0.25)
  .delay(0.125)
  .leslie(0.2)


// hi!!!

// anotehr day another session

// lets play with duck thingy
// lets finish this before it starts popping more LOL

const hpf = slider(478, 0, 1000)

$: stack(
  kick.duckorbit(2).duckattack(0.2).duckdepth(0.8),
  // hh.gain(0.03).delay(0.125),
  // hh2.gain(0.05),
  b2.orbit(2).gain(0.7),
  md.orbit(1).gain(0.2),
  // cp.gain(0.25),
 // perc.gain(0.12),
  // ride.gain(0.05),
  // key.gain(0.5).orbit(2),
  // key.orbit(2),
 // bass,
 // shit
)
.color('red')
// .scope()
// .phaser(sine)
.hpf(hpf)
