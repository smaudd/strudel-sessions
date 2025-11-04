samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')

setcpm(140/4)

const karr = [
  "0,4,8,12",
  arrange([15, "0,4,8,12"], [1, "0,4,8,12,14"]),
  "0"
]

const kick = (index) => s("house").beat(karr[index], 16)
.distort(0.3)
.room(0.01)
.attack(0)
// .lpf(200)

const kickSub = s("sine,z_sine").beat("0,4,8,12", 16)
.distort(0.3)
.attack(0.4)
// .room(0.01)
.lpf(1200)

const rarr = [
  "[x x x x*2 x]",
  "[x ~ ~ x*2 x/2]",
]

const rumble = (index) => n(rarr[index].fast(2)).sound("pulse,z_sine")
// .distort(1)
.attack(0.1)
.dec(0.1)
.slide("-.8 -.4 0 1 0")
// .fm("0.1 1 2(4, 5)")
.lpf(600)
.lpe(1)
.size(8)
.room(0.3)

const hh = s("[~ ~ rolandtr909_hh:8 ~]!4")
.phaser(0.1)
.distort(0.4)
.dec(0.05)

const hh2 = s("[~ ~ rolandtr909_hh rolandtr909_hh:1]!3 [~ rolandtr909_hh:8 rolandtr909_hh:1 rolandtr909_hh:8]!1")
.phaser(0.1)
// .gain("1 0.5 1 0.5!8")
.dec(0.05)

const ride = s("[~ ~ rolandtr909_rd:3 ~]!4")
.hpf(2200)
.phaser(0.1)
.attack(0.04)
// .gain("1 0.5 1 0.5!8")

const cp = s("[rolandtr909_cp:8 ~ ~ ~]!2")
.dec(sine.range(0, 0.3))

const cpFill = s("[rolandtr909_cp:8 ~ ~ ~]!16")
.dec(0.8)

const bipbap = s("<supersaw square pulse>")
.scale("<C:minor C:in-sen>").beat("0,1 2 3,5,6 7", "<13 16 12>").slow(2)
.distort(1)
.dec(sine.range(1, 0.1))
.attack(sine.range(0, 0.1))
.fm("<0.1 80 0.5>")
.lpf("[400 1200]!128")
.chorus(0.1)
.room(1)

const notes = n(irand("8,8 8,16").rib(0, 4))
.sound("sine square".fast(4))
.scale("<C:minor!2 G:minor>")
.fm(sine.range(0, 16))
.struct("[x x ~ ~]!2")
.phaser(2)
.add(0.12)
.attack(0.05)
.dec(sine.range(1, 0.1))
.chorus(2)
// .chorus(2)
.every(4, x=>x.jux(rev))
.every(2, x=>x.add(8))
.lpf(1200)
.room(0.4)

const notes2 = n(sine.range(10, 64)).struct("x x x x*2".fast(2))
  // .scale("C4:minor")
  .s("pulse")
  .dec(0.125)
  .room(2)
  .chorus(2)
  .size(10)
  .hpf(200)
  // .distort(0.4)
  // .pw(sine.range(0, 1))
  
  // .dec(0.2)
  // .sustain(0.1)
  // .lpf(1200)

const wtarr = [
  "0 0.25 0.5 0.75 1".fast(2),
  "0 0.25 0 0.75 1".fast(2),
  "0 0.25 0.5 0 0.3".fast(4),
]

const wtarrs = [
  "wt_digital_crickets wt_digital_bad_day wt_vgame:6",
  "wt_digital_crickets:2 wt_digital_bad_day wt_vgame:10",
  "wt_digital_crickets:2 wt_vgame:4 wt_vgame:0  ~",
  
]

const wt = (index) => s(wtarrs[index]).seg(8).note("C2").wt(wtarr[index])
.lpf(1200)
.delay(0.3)
// .phaser(0.2)
.room(0.7)

const bkarr = [
  "breaks157/2",
  "breaks165:1/2",
  "breaks125:2/2",
  "breaks125:1/2",
]

const bk = (index) => s(bkarr[index]).fit()
  .dec(0.2)
  // .release(0.1)
  // .attack(0.2)
  // .phaser(0.2)
  .scrub(
    arrange(
      [1, "{8 2 0 1}%8"],
      [1, "{8 2 2 1}%8"],
      [6, "{8 2 2 6}%8"]
    ).seg(8).div(16)
   )
  // .distort(0.3)
  .room(0.24)

// hi :) again
// firefox is way better for this its day and night

// let it bee :)

$: stack(
  // kick(1).duckattack(0.2).duckdepth(0.8).duckorbit(2),
  // kickSub.orbit(2).delay(0.5),
  // rumble(0).orbit(2),
  // hh.orbit(3).chorus(1).delay(0.25).gain(0.5),
  hh2.orbit(3).gain(sine.range(0.2, 0.1)).jux(rev),
  // ride.orbit(2).gain(0.04).distort(0.8),
  // cp.orbit(3).gain(0.4),
  // cpFill.orbit(3).gain(0.1),
  // bipbap.orbit(2).delay(0.125).gain(0.3),
  // notes2.orbit(2).delay(0.125).gain(0.7),
  notes.delay(0.6).gain(0.3),
  // wt(0).orbit(2).gain(0.5).phaser(2),
  // bk(0).gain(0.3),
  // bk(2).orbit(2).jux(rev).gain(0.2).delay(0.125).size(0.1),
  // bk(2).dec(0.1).orbit(2).jux(rev).gain(0.3).delay(0.125),
  // bk(3).dec(0.5).orbit(2).gain(0.2).chop("<2 1 2 0>"),
).hpf(slider(1200, 0, 1200))
// .scope()
