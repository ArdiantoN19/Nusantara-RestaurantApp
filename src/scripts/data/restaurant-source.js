import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviewRestaurant(data) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (error) {
      return console.log("Gagal menambahkan data", error);
    }
  }
}

export default RestaurantSource;
