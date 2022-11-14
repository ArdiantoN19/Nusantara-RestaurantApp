/* eslint-disable no-plusplus */
import RestaurantSource from "../../data/restaurant-source";
import {
  createItemRestaurant,
  skeletonUiTemplate,
} from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <div id="hero">
        <picture>
          <source class="hero" media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg" type="images/jpeg">
          <img class="hero" src="./images/hero-image_4-large.jpg" alt="hero-image">
        </picture>
            <div class="tagline">
                <h1>Welcome in Nusantara</h1>
                <p>Indonesian Food's, <span>order anytime</span></p>
            </div>
            <a tabindex="1" title="Menuju ke konten" href="#contentService" class="arrow-down">
                <i class="fa-solid a-down fa-arrow-down"></i>
            </a>
        </div>
        <div class="container" id="contentService">
            <div class="our-advantages">
                <h2 class="content-title">Our Advantages</h2>
                <div class="list-advantages">
                    <div class="card-item">
                        <img class="card-icon" src="/icons/clock.png" alt="clock icon">
                        <div class="card-body">
                            <h3 class="card-title text-center">Fast order</h3>
                        </div>
                    </div>
                    <div class="card-item">
                        <img class="card-icon" src="/icons/food.png" alt="delicious icon">
                        <div class="card-body">
                            <h3 class="card-title text-center">Delicious</h3>
                        </div>
                    </div>
                    <div class="card-item">
                        <img class="card-icon" src="/icons/cheap.png" alt="coin dollar icon">
                        <div class="card-body">
                            <h3 class="card-title text-center">Affordable</h3>
                        </div>
                    </div>
                    <div class="card-item">
                        <img class="card-icon" src="/icons/authentic.png" alt="coin dollar icon">
                        <div class="card-body">
                            <h3 class="card-title text-center">Authentic</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="restaurant">
                <h2 class="content-title">List Restaurant</h2>
                <div id="list-restaurant" class="list-restaurant"></div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantContainer = document.getElementById("list-restaurant");
    if (restaurants === undefined) {
      restaurantContainer.innerHTML = "<h4>Sory, can't get your request</h4>";
    } else {
      for (let item = 0; item <= restaurants.length; item++) {
        restaurantContainer.innerHTML += skeletonUiTemplate();
      }
      setTimeout(() => {
        restaurantContainer.innerHTML = "";
        restaurants.forEach((restaurant) => {
          restaurantContainer.innerHTML += createItemRestaurant(restaurant);
        });
      }, 2000);
    }
  },
};

export default Home;
