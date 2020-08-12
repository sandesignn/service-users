module.exports = (sequelize, DataTypes) =>{
    const RefreshToken = sequelize.define('RefreshToken', {
        id:{
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        token: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'updated_at'
        }
    },{
        tableName: 'refresh_tokens',
        timestamps: true
    });
    return RefreshToken;
}