const User = require('../models/User');
const bcrypt = require('bcryptjs');
const privateKey = 'dev-jwt'
const jwt = require('jsonwebtoken');

module.exports.login = async function (parent, { email, password }) {
    const candidate = await User.findOne({ email });

    if (candidate) {
        const passwordResult = bcrypt.compareSync(password, candidate.password);
        if (passwordResult) {
            const token = jwt.sign(
                {
                    email: candidate.email,
                    userId: candidate._id
                },
                privateKey,
                { expiresIn: 60 * 60 }
            );
            return {
                token: `Bearer ${token}`
            };
        } else {
            return {
                message: 'Пароли не совпадают. Попробуйте снова.'
            };
        }
    } else {
        return {
            message: 'Пользователь с таким email не найден.'
        };
    }
};

module.exports.registration = async function (parent, { email, password }) {
    const candidate = await User.findOne({ email })
    if (candidate) {
        return {
            message: 'Такой пользователь уже существует'
        }
    }
    const salt = bcrypt.genSaltSync(10)
    const user = new User({
        email,
        password: bcrypt.hashSync(password, salt)
    })
    try {
        await user.save()
        return user.toJSON()
    } catch (e) {
        console.log(e)
    }
}
