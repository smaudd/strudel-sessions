samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')
setCpm(80/4)

const bk = s("breaks125")
  .fit()
  .scrub(`
  [{0 1 2 [3 2]}%8]
  [{0 1 2 0}%4]
  `.slow(2).div("8").seg("4"))
  .dec("<0.9 1@8>")
  .room(0.05)
  .distort(0.8)
  // .cut(2)

const hh = n(`
[~ 0 ~ ~]!4
`.slow(2)).s("9000_oh")
 .dec(0.1)
 .delay(0.1)
 .gain("<0.1 0.05>".fast(4))
 .distort(0.3)

const pad = note(`
<e2@2 c#2@2 b2@2 b2@2>
`.fast(4)).s("<chords:16/2 chords:16>")
 // .chop("2 0")
 .dec(1.5)
 // .cut(0)
 .release(2)
 // .cut(0)
 .room(1)
 .size(5)
 .coarse("0.001 0.2 0")
 .leslie(2)
 .vib(0.005)
 .phaser(5)
 // ._punchcard()

const bass = note("c#2 c#2 g#2 c#3".fast("<3>"))
 .s("sine:200,pulse")
 .fm("4 1 0")
 // .pw(0.2)
 .fmh("1 1 0.001")
 // .rarely(rev)
 .attack(0.01)
 .dec(sine.range(0.5, 2).fast(32))
 .room(0.2)
 // .delay(0.125)
 .distort(0.1)
 .lpf(sine.range(400, 2200).fast(1))
 .cut(10)

const lead = n(
  irand("16 32").rib(0, "[2 4]")
).struct("x x x").scale("C#5:pentatonic").fast("3")
 .s("sine supersaw")
 .fm("<64 1 320000000@16>")
 .fmh("0 5 0.00000001")
 .lpf(1200)
 .delay(0.5)
 .phaser(3)
 .room(0.4)
 .dec(sine.range(0.1, 0.25))
 .jux(rev)

const hpf = slider(370.8, 0, 1200)

$: stack(
  hh,
  pad.gain(0.5),
  bk.gain(0.5),
  // bass.gain(0.4),
  // lead.gain(0.4),
)
._scope()
.hpf(hpf)
.compressor("-8:20:10:.002:.02")
.color("magenta")
// .scope()
// .fscope({
//   scale: 0.54
// })
// ._spectrum()
// .duck()
