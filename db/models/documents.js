module.exports = (sequelize, DataTypes) => {
    const Competition = sequelize.define('Competition', {
        title: DataTypes.STRING,
        fileUrl: DataTypes.STRING,
        category: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    return Competition;
};