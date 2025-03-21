import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../config/database";

interface DocumentAttributes {
  id: number;
  title: string;
  fileUrl: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Document extends Model<DocumentAttributes> implements DocumentAttributes {
  public id!: number;
  public title!: string;
  public fileUrl!: string;
  public category!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Document.init(
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
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Document',
  }
);

export default Document;