import express from "express";
import { getRestaurants, addRestaurant, deleteRestaurant, updateRestaurant, getSingleRestaurant } from "./controller/restaurantController.js";


const router = new express.Router();


router.get("/get_restaurant", getRestaurants );

router.post("/add_restaurant", addRestaurant );

router.delete("/delete_restaurant/:id", deleteRestaurant);

router.put("/update_restaurant/:id", updateRestaurant);

router.get("/get_restaurant_by_id/:id", getSingleRestaurant);

export default router