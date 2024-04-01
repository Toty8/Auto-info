import { Model } from "./model"
import { User } from "./user"

export interface Brand{
    imageUrl: string
    models: Model[]
    name: string
    _id: string
    userId: User
}

export interface EditAndAddBrand{
    imageUrl: string
    name: string
}