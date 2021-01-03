interface Fruit {
    readonly cat: "fruit";
}
interface Juice {
    readonly cat: "juice";
}
interface Jam {
    readonly cat: "jam";
}
export interface SomeApi {
    makeJuice: (fruit: Fruit) => Promise<Juice>;
    makeJam: (fruit: Fruit) => Promise<Jam>;
}
export {};
