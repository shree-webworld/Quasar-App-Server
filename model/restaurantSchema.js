
import {DataTypes  } from "sequelize";
import { sequelize } from "../db_conn.js";


const Restaurant = sequelize.define(
  'Restaurant',
  {
    // Model attributes are defined here
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    restaurantAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    tableName: "restaurants",
    timestamps: false
    // Other model options go here
  },
);

// `sequelize.define` also returns the model
console.log(Restaurant === sequelize.models.Restaurant); // true

export {Restaurant};
