interface Fruit {
  readonly cat: "fruit"
}

interface Apple extends Fruit {
  readonly type: "apple"
}

interface Juice {
  readonly cat: "juice"
}

interface Jam {
  readonly cat: "jam"
}

export interface SomeApi {
  makeJuice: (fruit: Apple) => Promise<Juice>

  makeJam: (fruit: Fruit) => Promise<Jam>
}
