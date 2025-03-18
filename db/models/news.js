module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define('News', {
        title: DataTypes.STRING,
        content: DataTypes.ARRAY(DataTypes.TEXT),
        images: DataTypes.ARRAY(DataTypes.STRING),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });


    return News;
};
