module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: true,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        }
    },{
        tableName: 'users',
        timestamps: true
    });
    return User;
}