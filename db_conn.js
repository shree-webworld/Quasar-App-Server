
import Sequelize from "sequelize";
// import "./model/contactSchema.js";
// import "./model/restaurantSchema.js";


const sequelize = new Sequelize('restaurantdb', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
  });


        try 
        {
            sequelize.authenticate();
            console.log('Connection has been established successfully.');


            /*sequelize.sync({ force: true });
            console.log('All multiple models were synchronized successfully, instead of importing and using it in app.js');*/

        } catch (error) 
            {
                console.error('Unable to connect to the database:', error);
            }



export {sequelize};


