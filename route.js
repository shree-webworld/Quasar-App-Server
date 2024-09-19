import express from "express";
import { getRestaurants, addRestaurant, deleteRestaurant, updateRestaurant } from "./controller/restaurantController.js";


const router = new express.Router();


router.get("/get_restaurant", getRestaurants );

router.post("/add_restaurant", addRestaurant );

router.delete("/delete_restaurant/:id", deleteRestaurant);

router.put("/update_restaurant/:id", updateRestaurant);


export default router