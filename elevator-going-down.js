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

const bass2 = note("a1 e2 ~  ~ [g2 g1]").s("z_sine,sine")
  // .attack(0.1)
  .dec(0.45)
  .detune(2)
  .fm(sine.range(-1, 2))
  // .slide("-0.5 -0.45 -.3")
  .lpe(8)
  .lpf(1800)
  .distort(0.8)
  // .size(10)
  // .dec(0)

// const g1 = s("bd bd bd 5").bank("RolandTR909")

const lead = n(irand("~ 2 6").rib(0,8).sub("7").seg("8"))
  .scale("A:minor")
  .s("sine,square")
  .phaser(2)
  .dec(0.25)
  .fm(sine.range(-8, 8))
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

const pad = chord("Am9/2 Em9".slow(4)).arp("[1 1 1 1]!2")
  // .attack(0.3)
  .dec(0.1)
  .release("0.1")
  .s("z_sine")
  // .slide(-0.5)
  // .detune(sine.range(0, 1))
  // .pw(0.5)
  .lpf(sine.range(300, 1200))
  .lpe(sine.range(-2, 2))
  .fm(sine.range(-16,16))
  .voicing()
  .room(0.4)
  .delay(0.125)

const notes = note("[g a b e]!2")
  // .arp("0 [0,2] 1 [0,2]")
  // .attack(0.3)
  .s("supersaw,pulse")
  .dec(0.3)
  // .release("0.1")
  // .detune(sine.range(0, 1))
  .pw(2)
  .fm(2)
  .lpf(sine.range(800, 1200))
  .lpe(sine.range(-2, 2))
  // .fm(sine.range(-16,16))
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

const sprinkle = n("0!8".add(berlin.fast(4).mul(14)))
  .scale("A:minor")
  .s("supersaw")
  .phaser(2)
  .dec(0.1)
  .fm(sine.range(0, 128))
  // .slide("0.1 0 0 0")
  .lpe(32)
  .lpf(1500)
  .room(0.5)
  .delay(0.25)

$: stack(
  // kick909,
  kick.duckorbit(2).duckattack(0.2).duckdepth(0.6),
  // lead.gain(0.4).orbit(2),
  bass2.gain(0.2).orbit(2),
  hhfill.gain(0.5),
  // bk3.gain(0.3).orbit(2),
  pad.gain(0.2).orbit(2),
  notes.gain(0.1),
  hh.distort(sine.range(0, 1)),
  // poly.gain(0.2),
  sn.orbit(2),
  // sprinkle.gain(0.3).orbit(2),
).hpf(slider(0, 0, 1200))

$: stack(
  // bk.gain(0.2).pan(sine.range(0.5, 0.5)),
  // bk2.gain(0.4),
  // bk3.gain(0.1),
).orbit(2).hpf(2200)

  // .scope()
  // .pianoroll()
  // .scope()
  // .hpf(slider(0, 0, 1200))
