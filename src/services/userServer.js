import db from "../data/connection.js"
import bcrypt  from "bcryptjs"
import jwt from "jsonwebtoken"

const register = async (nome, email, senha) => {
    const userExistente = await db("usuarios").where({email}).first()

    if (userExistente)
        throw new Error("EMAIL já cadastrado")

    const senhaHash = await bcrypt.hash(senha, 8)
    const [id] = await db("usuarios").insert({nome, email, senha: senhaHash})

    return {id, nome, email}
}

const login = async (email, senha) => {
    const user = await db("usuarios").where({email}).first()
    if (!user)
        throw new Error("EMAIL não cadastrado")

    const senhaConfere = await bcrypt.compare(senha, user.senha)
    if (!senhaConfere)
        throw new Error("SENHA incorreta")

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: "1h"})

    return token
}

export default {register, login}
