import { User } from "./user"

export interface Model{
    imageUrl: string
    generations: string[]
    name: string
    __v: number
    _id: string
    userId: User
    brand: string
}

export interface EditAndAddModel{
    imageUrl: string
    name: string
}