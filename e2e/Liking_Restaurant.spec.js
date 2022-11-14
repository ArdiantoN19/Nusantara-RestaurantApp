/* eslint-disable codeceptjs/no-pause-in-scenario */
const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("Showing empty liked restaurants", ({ I }) => {
  I.see("You dont have a list of favorite restaurants", ".empty_list");
});

Scenario("liking one restaurant", async ({ I }) => {
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
  const likedRestaurantTitle = await I.grabTextFrom(
    locate(".card-item a").first()
  );

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
