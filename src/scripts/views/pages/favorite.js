import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createItemRestaurant } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
        <div class="restaurant container">
            <h2 class="content-title">Favorite</h2>
            <div id="list-restaurant" class="list-restaurant"></div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.getElementById("list-restaurant");
    if (!restaurants.length) {
      restaurantContainer.innerHTML =
        '<h3 class="empty_list">You dont have a list of favorite restaurants</h3>';
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createItemRestaurant(restaurant);
    });
  },
};

export default Favorite;
