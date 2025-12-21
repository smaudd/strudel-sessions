samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')
setCpm(35)

const kickpatterns = [arrange([14, "0 0 0 0"], [1, "[0 ~ 0 ~] 0 0 0"])]
const kickp = kickpatterns[0]

const kick909 = s(kickp).s("rolandtr909_bd")
   .lpf(1200)
   .distort(1.5)
   .dec(0.1)
   .hpf(2000)
   .gain(0.2)

const kick = s(kickp).s("house")
   .lpf(2200)

const bassLong = note("c2 g2 g#3 g c c/2").s("z_sine,sine")
  // .attack(0.1)
  .dec(0.8)
  .detune(2)
  .fm(sine.range(-1, 2))
  // .slide("-0.5 -0.45 -.3")
  .lpe(8)
  .lpf(800)
  .distort(0.5)
  .room(0.3)
  // .size(10)
  .gain(1)

const bass2 = note("[a1 a2 ~ [c g1/2]]!2").s("z_sine,sine")
  // .attack(0.1)
  .dec(0.1)
  .detune(2)
  .fm(sine.range(-1, 8))
  .fmh(sine.range(0.4, 0.2))
  // .slide("-0.5 -0.45 -.3")
  // .lpe(8)
  .lpf(400)
  .distort(0.8)
  // .size(10)
  // .dec(0)

// const g1 = s("bd bd bd 5").bank("RolandTR909")

const lead = n(irand("~ 2 6").rib(0,3).sub("0 7 3.5").seg("16"))
  .scale("E:minor")
  .s("sine,square")
  .phaser(2)
  .dec(0.25)
  // .fm(sine.range(-8, 8))
  .lpe(berlin.range(4, 3))
  .distort(0.5)
  .lpf(100)
  .delay(0.25)
  // .hpf(1200)

const bk = s("breakardo:33/4,sine")
  .fit()
  .scrub("{0 1*2 2 3}%4".seg(4).div(16))
  .room(0.5)
  .dec(0.1)
  .delay(0.125)

const bk2 = s("breakardo:30/4,sine")
  .fit()
  .scrub("{0 1*2 2 3}%4".seg(4).div(16))
  .room(0.25)
  .dec(0.05)
  // .delay(0.125)


const bk3 = s("breakardo:6/4,sine")
  .fit()
  .scrub("{0 1*2 2 3}%4".seg(4).div(16))
  .room(0.5)
  .dec(0.1)
  .delay(0.125)

const pad = chord("Am9!8")
  .arp("1 2@2 2 4".fast(4))
  // .sub(7)
  // .attack(0.1)
  .dec(0.8)
  // .release("1")
  .s("sine")
  // .wt(sine.range(-4, 7))  // .slide(sine.range(0, 0.1))
  // .detune(sine.range(0, 10))
  // .pw(0.5)
  .lpf(sine.range(300, 400))
  // .lpe(sine.range(-2, 2))
  .fm("0 2 3 1 2@2")
  .voicing()
  .room(0.4)
  .delay(0.125)

const notes = note("[e]!6 c!8 a!2")
  // .arp("1 [8,2] 1 [10,2]")
  // .attack(0.3)
  .s("supersaw,pulse")
  .dec(0.1)
  // .release("0.1")
  .detune(sine.range(0, 0.5))
  // .fm(20)
  .lpf(sine.range(800, 600))
  .lpe(sine.range(-2, 2))
  .fm(sine.range(-16,16))
  .room(0.8)
  .delay(1)

const hh = n("[~ ~ 0 ~]!4")
  .gain(0.2)
  .s("dr110_hh")
  .delay(0.125)

const hhfill = n("[~ ~ 0 0]!4")
  .s("rd")
  .speed(0)
  .every(4, x => x.speed(1))
  .every(8, x => x.speed(2))
  .every(2, x => x.dec(1))
  .phaser(1.5)
  .jux(rev)
  .gain(0.1)
  .dec(0.4)
  .delay(0.125)

const poly = s("koy dr hc kurt")
  // .fast(2)
  .distort(.8)
  // .sometimes(x => x.slow(5))
  .phaser(2)
  .pan(sine.range(-0.5, 1))
  .delay(0.125)

const sn = note("~ ~ ~ e")
  .s("sn:5/8")
  // .fit()
  // .sometimes(x => x.speed("1.5"))
  .attack(0.05)
  .dec(0.3)
  .release(1)
  // .room(0.5)
  // .distort(0.5)
  .delay(0.8)
  // .phaser(2)
  .gain(0.8)

const sprinkle = n("0!16".add(berlin.fast(2).mul(12)))
  .scale("E:minor")
  .s("sine")
  .phaser(2)
  .dec(0.5)
  .fm(sine.range(0, 4))
  // .slide("0.1 0 0 0")
  .lpe(32)
  .lpf(1500)
  .room(0.5)
  .delay(0.5)

$: stack(
  // kick909,
  kick.duckorbit(2).duckattack(0.2).duckdepth(0.6),
  lead.gain(0.1).orbit(2),
  bass2.gain(0.4).orbit(2),
  hhfill.gain(0.5),
  // pad.gain(0.2).orbit(2),
  // notes.gain(0.1),
  hh.distort(sine.range(0, 1)),
  // poly.gain(0.2),
  // sn.orbit(2),
  // sprinkle.gain(0.3).orbit(2),
).chop("<1>").hpf(slider(589.2, 0, 1200))

$: stack(
  // bk.gain(0.2).pan(sine.range(0.5, 0.5)),
  // bk2.gain(0.4),
  // bk3.gain(0.25),
).orbit(2).hpf(1200)

  // .scope()
  // .pianoroll()
  // .scope()
  // .hpf(slider(0, 0, 1200))
