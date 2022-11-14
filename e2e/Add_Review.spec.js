/* eslint-disable codeceptjs/no-pause-in-scenario */
const assert = require("assert");

Feature("Review Customer");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Add review one restaurant", async ({ I }) => {
  I.waitForElement(".card-title a", 3);

  const firstRestaurant = locate(".card-item a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.waitForElement("#form");
  I.fillField("#name", "Testing A");
  I.fillField("#review", "Testing Restaurant A");
  I.click(".btnReview");

  const lastReview = locate(".customer-item > p").last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual("Testing Restaurant A", lastReviewText.trim());
});
