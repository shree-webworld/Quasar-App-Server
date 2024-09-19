
import {DataTypes  } from "sequelize";
import { sequelize } from "../db_conn.js";


const Contact = sequelize.define(
  'Contact',
  {
    // Model attributes are defined here
    permanantAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "contacts",
    timestamps: false
    // Other model options go here
  },
);


export {Contact};
