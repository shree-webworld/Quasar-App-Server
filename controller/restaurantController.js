import { Restaurant} from "../model/restaurantSchema.js";
import { QueryTypes } from "sequelize";


let addRestaurant = async (req, res)=>{
  try {
          const {restaurantName, restaurantAddress} = req.body;

          const restaurantDetails = await Restaurant.create(req.body);
          /*const restaurantDetails = await Restaurant.sequelize.query("INSERT INTO restaurants (restaurantName,restaurantAddress) VALUES (:value1,:value2)", 
            {
              replacements: { value1: 'restaurantName', value2: 'restaurantAddress' },
              type: QueryTypes.INSERT,
            });*/                                      

          console.log(`restaurant added successfully`);
          

          return res.status(200).json(restaurantDetails);

      } catch (error) {

          console.log(error);
          return res.status(400).json({error:"Failed to add restaurant"});
      }
    }


const getRestaurants = async (req, res) =>{
    try {
            // let getRestaurantDetails = await Restaurant.findAll();

            const getRestaurantDetails = await Restaurant.sequelize.query('SELECT * FROM restaurants', {
              type: QueryTypes.SELECT,
            });                                      

            return res.status(201).json(getRestaurantDetails);

        }catch (e)
        {
          console.log(e);
          return res.status(400).json({error:"Failed to get restaurant details"});
        }
     }


     const getSingleRestaurant = async (req, res) =>{
      try
      {
        const getSingleRestaurantDetails = await Restaurant.findOne({
          where:{
                    id:req.params.id
                }
      });


        res.status(200).json(getSingleRestaurantDetails);
      }catch (e)
        {
          console.log(e);
          return res.status(500).json({error : "Failed to fetch post data"});

        }
}



const updateRestaurant = async (req, res) =>{
      try
      {
         await Restaurant.update(req.body,{
                                            where:{
                                                    id:req.params.id
                                                  }
                                          });

        res.status(200).json({message:"Restaurant has been updated successfully"});

      }catch (e)
        {
            console.log(e);
            res.status(500).json({error : "Failed to update restaurant"});
        }
}



const deleteRestaurant = async (req, res) =>{
      try
      {
         await Restaurant.destroy({
                                      where:{
                                                id:req.params.id
                                            }
                                   });

        res.status(200).json({message:"Restaurant has been deleted successfully"});

      }catch (e)
        {
            console.log(e);
            res.status(500).json({error : "Failed to delete restaurant"});
        }
}


export {getRestaurants, addRestaurant, deleteRestaurant, updateRestaurant, getSingleRestaurant}     