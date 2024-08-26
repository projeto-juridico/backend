// controllers/userController.js
const User = require('../models/User');

exports.checkUserExists = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email é obrigatório' });
    }

    try {
        const user = await User.findOne({ email: email });

        if (user) {
            return res.status(200).json({ exists: true, message: 'Usuário já existe' });
        } else {
            return res.status(200).json({ exists: false, message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao verificar usuário:', error);
        return res.status(500).json({ message: 'Erro interno no servidor' });
    }
};
