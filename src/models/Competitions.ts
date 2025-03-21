import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface CompetitionAttributes {
  id: number;
  title: string;
  content: string[];
  startDate: string;
  location: string;
  images?: string[];
  resultsId?: number;
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
  public startDate!: string;
  public location!: string;
  public images?: string[];
  public resultsId?: number;
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
    startDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    resultsId: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    sequelize,
    modelName: "Competition",
  }
);

export default Competition;
