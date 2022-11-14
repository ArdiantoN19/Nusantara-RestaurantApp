import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createDetailRestaurant } from "../templates/template-creator";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import ReviewInitiator from "../../utils/review-initiator";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return `
    <div class="container">
      <div id="detailRestaurant" class="detailRestaurant"></div>
      <div id="reviewContainer" class="reviewContainer"></div>
      <br/>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.getElementById("detailRestaurant");
    const reviewContainer = document.getElementById("reviewContainer");
    if (restaurant === undefined) {
      restaurantContainer.innerHTML = "<h4>Sory, can't get your request</h4>";
    } else {
      restaurantContainer.innerHTML = "<h3>Loading...</h3>";
      setTimeout(() => {
        restaurantContainer.innerHTML = createDetailRestaurant(restaurant);
        LikeButtonPresenter.init({
          likeButtonContainer: document.getElementById("likeButtonContainer"),
          favoriteRestaurants: FavoriteRestaurantIdb,
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            description: restaurant.description,
            city: restaurant.city,
            address: restaurant.address,
            pictureId: restaurant.pictureId,
            categories: restaurant.categories,
            menus: restaurant.menus,
            rating: restaurant.rating,
            customerReviews: restaurant.customerReviews,
          },
        });
        ReviewInitiator.init({ formReviewContainer: reviewContainer });
      }, 500);
    }
  },
};

export default Detail;
