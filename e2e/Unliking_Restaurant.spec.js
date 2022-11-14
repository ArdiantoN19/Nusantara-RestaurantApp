const assert = require("assert");

Feature("Unliking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("Unliking one restaurant", async ({ I }) => {
  I.see("You dont have a list of favorite restaurants", ".empty_list");
  I.amOnPage("/");

  I.waitForElement(".card-title a", 3);

  const firstRestaurant = locate(".card-item a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.waitForElement("#likeButton", 1);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".card-item");
  const likedRestaurant = locate(".card-item a").first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(likedRestaurant);

  I.waitForElement("#likeButton", 1);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("#list-restaurant");
  const emptyTextFavorite = await I.grabTextFrom(".empty_list");
  assert.strictEqual(
    emptyTextFavorite,
    "You dont have a list of favorite restaurants"
  );
});
