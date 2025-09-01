samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/refs/heads/master/strudel.json')
setCpm(145/4)

const kick = s("house house house house")
 .distort(0.3)

stack(
  kick.gain(1),
)
