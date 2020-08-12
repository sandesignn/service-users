const {User} = require('./../../../models/');

module.exports = async (req, res) => {

    const id = req.params.id;
    const user = await User.findByPk(id, {
        attributes : ['id', 'name', 'avatar', 'email']
    });

    if(!user){
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    }

    return res.json({
        status: 'success',
        data: user
    })
}