

import express from "express";
// import "./db_conn.js";      /*we are using in restaurantSchema, so comment out*/
import {Restaurant} from "./model/restaurantSchema.js";
import {Contact} from "./model/contactSchema.js";
import router from "./route.js";
import cors from "cors";


let app = express();
let PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

// Restaurant.sync({ force: true });    /*This creates the table, dropping it first if it already existed */
Restaurant.sync();  //This creates the table if it doesn't exist (and does nothing if it already exists)
Contact.sync();

// Restaurant.drop();
// Contact.drop();

app.get('/', (req, res)=> {
                            res.json('Hello World');
                         }
        );


app.listen(PORT , () =>{
                         console.log(`quasar server is running at port ${3000}`);
                       }
          );
