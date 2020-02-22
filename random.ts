import { create, RandomSeed } from 'random-seed'
let seed: RandomSeed = create()
export function setSeed(s: string) {
    seed = create(s)
}

export function random(): number {
    return seed.random()
}