import { Model } from "./model"
import { User } from "./user"

export interface Brand{
    imageUrl: string
    models: Model[]
    name: string
    __v: number
    _id: string
    userId: User
}