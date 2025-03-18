import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface NewsAttributes {
  id: number;
  title: string;
  content: string;
  imageUrls?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

class News extends Model<NewsAttributes> implements NewsAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public imageUrls?: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

News.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "News",
  }
);

export default News;
