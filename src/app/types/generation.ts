import { Model } from "./model"
import { Specification } from "./specification"
import { User } from "./user"

export interface Generation{
    imageUrl: string
    specifications: Specification[]
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