import request from "supertest"
import {app} from "@/app"
import { prisma } from "@/database/prisma"

describe("UsersController", () => {
    let userId: string

    afterAll(async () => {
        await prisma.user.delete({where: {id: userId}})
    })

    it("should create a new user sucefully", async () => {
        const response = await request(app).post("/users").send({
            name: "User Test",
            email: "TestUser@example.com",
            password: "password123"
        })
        
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body.name).toBe("User Test")
    
        userId = response.body.id
    })

    it("should throw an error if user with same email already exists", async () => {
        const response = await request(app).post("/users").send({
            name: "User Test",
            email: "TestUser@example.com",
            password: "password123"
        })

        expect(response.status).toBe(400)
        expect(response.body.message).toBe("user with the same email already exists")
    })

    it("should throw an validation erro if email is invalid", async () => {
        const response = await request(app).post("/users").send({
            name: "Test User",
            email: "invalid-email",
            password: "password123",
        })

        expect(response.status).toBe(400)
        expect(response.body.message).toBe("Validation Error")
    })
})