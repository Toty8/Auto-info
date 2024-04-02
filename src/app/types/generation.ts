import { Model } from "./model"
import { User } from "./user"

export interface Generation{
    imageUrl: string
    generations: string[]
    name: string
    _id: string
    yearStarted: number
    yearAborted: number
    userId: User
    model: Model
}

export interface EditAndAddGeneration{
    imageUrl: string
    name: string
    yearStarted: number
    yearAborted: number
}