setCpm(160/4)
// C,E,G,A#,D,A F,A,C,E,G  D,F,A,C,E

// <[G,A#,D,F,A5] [C,E,G,A#,D,F#4] [F,A,C,E,G3] [D,F,A,C,E,G#5]>

const arrCh = arrange(
  [4, "<[G,A#,D,F,A5] [C,E,G3,A#,D,A4] [F,A,C,E,G3] [D,F,A,C,E]>"],
  // [4, "<[G,A#,D5,F,A5] [C,E,G3,A3#,D,A4] [F,A,C4,E,G3] [D3,F3,A4#,C3,G3]>".arp("[0,1,2,4 [[4 2] [0 0]]]")]
)

const ch = note(arrCh)
 // .arp("[0 1 2 3,4]!2")
 .attack("0.3!4")
 .transpose("<3m!3 4m>")
 .dec(1)
 .release(2)
 .phaser(2)
 .dec(sine.range(0.5, 1).fast(8))
 .s("piano,sine")
 .fm(sine.range(-2, 2))
 .delay(0.66)
 .room(1)

const ch2 = note("<[G2] [E2] [A2] [D2]>".seg("4").sub("14 7"))
 // .arp("[0 1 2 3 4]".sometimes(rev))
 // .attack(0.1)
 .swing("8 7.5")
 .transpose("<3m!3 4m>")
 // .dec(sine.range(0.5, 1).fast(8))
 .s("sine")
 // .phaser(0.3)
 .diode(1, 1)
 .fm(sine.range(-2, 2))
 // .delay(0.66)
 .room(0.4)

const bk = s("breaks:1/2")
  .diode(1, 1)
  .fit()

const bkmain = s("breaks:6/2")
  .delay(0.125)
  .room(0.1)
  .fit()
  // .diode(1, 1

const bass = note("<[G2,A2#,D2]>")
 // .arp("[0 1 0 1 0 1]")
 // .transpose("<3m!3 4m>")
 // .diode(1, 1)
 // .dec(0.8)
 .s("z_sine,sine")
 .fm(sine.range(-2, 2))
 // .delay(0.15)
 // .room(0.4)

const lead = note("[G4 [D E]]!3 [G4 [D G4]]!1".swing("<8 14>").slow(2))
 .transpose("<3m!3 4m>")
 .s("sine")
 .dec(0.2)
 // .fm(sine.range(-1,4))
 // .fmh(sine.range(0, 0.05))
 // .penv(0.2)
 // .leslie("8")
 .size(2)
 .room(2)
 
 // .arp("0 [1,3] [2,3]".fast(2))

const rd = n("~ ~ 0 ~".fast(4))
  .s("rolandtr909_rd,rolandtr909_hh")
  .dec(0.18)
  .delay(0.1)

$: stack(
  // ch.gain(0.4),
  ch2.gain(0.6),
  // bk.gain(0.2),
  // bkmain,
  // .lpf(slider(19375, 1000, 22000)).gain(0.5),
  // lead.gain(0.4),
  // rd.gain(0.3),
  // bass
)
  // .rib(
  //   0,
  //   // 1
  //   // 2
  //   4
  // )
  .scope()
  .hpf(slider(0, 0, 1200))
