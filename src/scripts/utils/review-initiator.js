/* eslint-disable no-alert */
import RestaurantSource from "../data/restaurant-source";
import UrlParser from "../routes/url-parser";
import {
  formReviewTemplate,
  printReviewTemplate,
} from "../views/templates/template-creator";
import { showFormattedDate } from "./showFormattedDate";

const ReviewInitiator = {
  init({ formReviewContainer }) {
    this._formReviewContainer = formReviewContainer;
    this._renderForm();
  },

  _renderForm() {
    this._formReviewContainer.innerHTML = formReviewTemplate();
    this._isSubmitFrom();
  },

  _isSubmitFrom() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const nameValue = document.querySelector("#name");
      const reviewValue = document.querySelector("#review");

      const data = {
        id: url.id,
        name: nameValue.value,
        review: reviewValue.value,
      };

      this._addRequestReview(data);
    });
  },

  _addRequestReview(data) {
    const containerCustomerReview = document.querySelector(
      ".container-customer"
    );
    const nameValue = document.querySelector("#name");
    const reviewValue = document.querySelector("#review");
    const date = new Date().toISOString();
    const reviewTemplate = {
      name: nameValue.value,
      review: reviewValue.value,
      date: showFormattedDate(date),
    };

    if (data.name === "" || data.review === "") {
      alert("Diisi dulu gan!!");
    } else {
      RestaurantSource.addReviewRestaurant(data);
      containerCustomerReview.innerHTML += printReviewTemplate(reviewTemplate);
      nameValue.value = "";
      reviewValue.value = "";
      alert("Berhasil, menambahkan data");
    }
  },
};

export default ReviewInitiator;
