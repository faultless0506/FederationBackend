import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface NewsAttributes {
  id: number;
  title: string;
  content: string;
  images?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

class News extends Model<NewsAttributes> implements NewsAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public images?: string[];
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
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    images: {
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
