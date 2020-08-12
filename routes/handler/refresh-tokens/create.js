const {User, RefreshToken} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) =>{
    const userId = req.body.user_id;
    const refreshToken = req.body.refresh_token;

    const schema = {
        user_id: 'number',
        refresh_token: 'string',
    }
    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const user = await User.findByPk(userId);
    if(!user){
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    const createdRefreshToken = await RefreshToken.create({token: refreshToken, user_id: userId})

    return res.json({
        status: 'success',
        data: {
            id: createdRefreshToken.id 
        }
    })
}