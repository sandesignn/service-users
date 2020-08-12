const {User} = require('./../../../models/');

module.exports = async (req, res) => {

    const userIds = req.query.userIds || [];

    const sqlOption = {
        attributes : ['id', 'name', 'avatar', 'email']
    }
    
    if(userIds.length){
        sqlOption.where = {
            id: userIds
        }
    }

    const user = await User.findAll(sqlOption);

    return res.json({
        status: 'success',
        data: user
    })
}