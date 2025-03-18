import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface CompetitionAttributes {
  id: number;
  title: string;
  content: string[];
  date: Date;
  location: string;
  imageUrls?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

class Competition
  extends Model<CompetitionAttributes>
  implements CompetitionAttributes
{
  public id!: number;
  public title!: string;
  public content!: string[];
  public date!: Date;
  public location!: string;
  public imageUrls?: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Competition.init(
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
    content: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Competition",
  }
);

export default Competition;
