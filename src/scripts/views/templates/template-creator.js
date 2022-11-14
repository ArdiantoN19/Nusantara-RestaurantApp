/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import CONFIG from "../../globals/config";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const createItemRestaurant = (restaurant) => `
    <div class="card-item">
        <img class="lazyload card-thumbnail" data-src="${
          restaurant.pictureId
            ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
            : "https://picsum.photos/id/666/800/450?grayscale"
        }" alt="${restaurant.name || "-"}">
            <div class="card-body">
                <h3 class="card-title"><a href="#/detail/${restaurant.id}">${
  restaurant.name || "-"
}</a></h3>
        <p class="card-description">${restaurant.description || "-"}</p>
        </div>
        <div class="card-footer">
            <div class="card-rating"><i class="fa-solid fa-star"></i> ${
              restaurant.rating || "-"
            }</div>
            <div class="card-address"><i class="fa-solid fa-location-dot"></i> ${
              restaurant.city || "-"
            }</div>
        </div>
    </div>
`;

const createDetailRestaurant = (restaurant) => `
  <img class="lazyload img-detail" data-src="${
    CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId
  }" alt="${restaurant.name || "-"}"/>
  <h2 class="title-detail">${restaurant.name || "-"}</h2>
    <p>Category: ${restaurant.categories.map(
      (categorie) => categorie.name || "-"
    )}</p>
    <p><i class="fa-solid fa-location-dot icon-red"></i> ${
      restaurant.address || "-"
    }, ${restaurant.city || "-"}</p>
    <p><i class="fa-solid fa-star icon-yellow"></i> ${
      restaurant.rating || "-"
    }</p>
<hr/>
    <p class="desc-detail">${restaurant.description || "-"}</p>
    <br/>
    <h3>Menu Makanan</h3>
    <p>
        ${restaurant.menus.foods.map((food) => ` ${food.name || "-"}`)}
    </p>
    <br/>
    <h3>Menu Minuman</h3>
    <p>
        ${restaurant.menus.drinks.map((drink) => ` ${drink.name || "-"}`)}
    </p>
    <br/>
    <h3>Customer Review</h3>
    <div class="container-customer">
    ${restaurant.customerReviews.map(
      (customerReview) => `<div class="customer-item">
            <h4>${customerReview.name || "-"}</h4>
            <p>${customerReview.review || "-"}</p>
            <small>${customerReview.date || "-"}</small>
        </div>`
    )}
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="unlike">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const printReviewTemplate = (customerReview) => `
  <div class="customer-item">
      <h4>${customerReview.name}</h4>
      <p>${customerReview.review}</p>
      <small>${customerReview.date}</small>
  </div>
`;

const formReviewTemplate = () => `
<h3>Add Review</h3>
<form id="form" class="form-action">
  <label for="name">Name</label><br/>
  <input type="text" id="name" class="form-control"/><br/>
  <label for="review">Review</label><br/>
  <input name="review" id="review" class="form-control"></input><br/>
  <button type="submit" class="btnReview">Send</button>
</form>
`;

const skeletonUiTemplate = () => `
<div class="card-item ph-item">
  <div class="ph-col-12">
    <img class="card-thumbnail ph-picture">
    <div class="card-body ph-row">
      <h3 class="ph-col-6 big card-title"></h3>
      <div class="ph-col-6 empty big"></div>
      <p class="ph-12 big card-description"></p>
    </div>
    <div class="card-footer ph-row">
      <div class="card-rating ph-col-2"></div>
      <div class="card-address ph-col-2"></div>
    </div>
  </div>
</div>
`;

export {
  createItemRestaurant,
  createDetailRestaurant,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  formReviewTemplate,
  printReviewTemplate,
  skeletonUiTemplate,
};
