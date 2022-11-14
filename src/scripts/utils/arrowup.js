const arrowUp = () => {
  window.onscroll = () => {
    const btnArrowUp = document.querySelector(".arrow-up");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      btnArrowUp.classList.add("display");
    } else {
      btnArrowUp.classList.remove("display");
    }
  };
};

export default arrowUp;
