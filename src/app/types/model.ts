import { Brand } from "./brand"
import { Generation } from "./generation"
import { User } from "./user"

export interface Model{
    imageUrl: string
    generations: Generation[]
    name: string
    _id: string
    userId: User
    brand: Brand
}

export interface EditAndAddModel{
    imageUrl: string
    name: string
}