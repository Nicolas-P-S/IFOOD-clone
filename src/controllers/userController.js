import userService from "../services/userServer.js"

const register = async (req, res) => {
    const {nome, senha, email} = req.body

    try {
        const user = await userService.register(nome, email, senha)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({erro:error.message})
    }
}

const login = async (req, res) => {
    const {email, senha } = req.body

    try {
        const token = await userService.login(email, senha)
        res.status(201).json({token})
    } catch (error) {
        res.status(401).json({erro:error.message})
    }

}

export default {register, login}
