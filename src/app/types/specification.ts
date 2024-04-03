import { Generation } from "./generation"
import { User } from "./user"

export interface Specification{
    imageUrl: string
    name: string
    engineType: string
    transmission: string
    weight: number
    power: number
    torque: number
    _id: string
    userId: User
    generation: Generation
}

export interface EditAndAddSpecification{
    imageUrl: string
    name: string
    engineType: string
    transmission: string
    weight: number
    power: number
    torque: number
}