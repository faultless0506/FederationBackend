module.exports = (sequelize, DataTypes) => {
    const Competition = sequelize.define('Competition', {
        title: DataTypes.STRING,
        content: DataTypes.ARRAY(DataTypes.TEXT),
        startDate: DataTypes.STRING,
        location: DataTypes.STRING,
        images: DataTypes.ARRAY(DataTypes.STRING),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    return Competition;
};