(()=>{"use strict";var n,A={756:(n,A,t)=>{t.d(A,{Z:()=>a});var o=t(537),r=t.n(o),e=t(645),i=t.n(e)()(r());i.push([n.id,':root {\n  --primary-color: #ffffff;\n  --secondary-color: #f1efdc;\n  --third-color: #d36b00;\n  --four-color: #42032c;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: "Open Sans", sans-serif;\n}\n\n.hero {\n  /* background: url("../public/images/hero-image_4.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; */\n  min-height: 90vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -100;\n}\n\n.container {\n  margin: 0 30px;\n}\n\nnav {\n  display: flex;\n  padding: 5px 10px;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.1);\n}\n\n.nav-title {\n  font-weight: 800;\n  color: var(--four-color);\n}\n\n.brand-title {\n  font-weight: 800;\n  color: var(--primary-color);\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n}\n\n.nav-title::first-letter,\n.brand-title::first-letter {\n  color: var(--third-color);\n}\n\n.nav-title span,\n.brand-title span {\n  display: block;\n  text-align: center;\n  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);\n  color: var(--third-color);\n}\n\n.nav-list {\n  width: 100%;\n}\n\n.nav-list .nav-item {\n  list-style-type: none;\n}\n\n.nav-list .nav-item a {\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 0 7px;\n}\n\n.nav-list .nav-item:hover {\n  border-bottom: 3px solid var(--third-color);\n}\n\n.tagline {\n  position: absolute;\n  display: flex;\n  top: 10%;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 65vh;\n  padding: 0 20px;\n  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);\n}\n\n.arrow-down {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  display: block;\n  width: 55px;\n  height: 55px;\n  background: none;\n  border: 1px solid var(--primary-color);\n  border-radius: 50%;\n  font-size: 20px;\n  display: block;\n  color: var(--primary-color);\n  margin: 0 auto;\n  text-align: center;\n}\n\n.arrow-down:focus {\n  outline: 2px solid orange;\n}\n\n.arrow-down .a-down {\n  animation: arrowDown 2s infinite;\n}\n\n.arrow-up {\n  position: fixed;\n  right: 5%;\n  bottom: 6%;\n  width: 55px;\n  height: 55px;\n  background: var(--third-color);\n  border: none;\n  border-radius: 50%;\n  font-size: 20px;\n  color: var(--primary-color);\n  display: none;\n  text-decoration: none;\n}\n\n.arrow-up.display {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  width: 100%;\n  height: auto;\n}\n\n.text-center {\n  text-align: center !important;\n  padding-bottom: 10px;\n}\n\n.our-advantages,\n.restaurant {\n  margin-bottom: 80px;\n}\n\nfooter {\n  width: 100%;\n  margin-top: 30px;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n}\n\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 6%;\n  right: 6%;\n  background-color: var(--third-color);\n  color: #ad5600;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.unlike {\n  font-size: 18px;\n  position: fixed;\n  bottom: 6%;\n  right: 6%;\n  background-color: var(--third-color);\n  color: var(--primary-color);\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@keyframes arrowDown {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(10px);\n  }\n}\n\n@media screen and (min-width: 300px) {\n  .nav-title,\n  .brand-title {\n    font-size: 1.7em;\n  }\n\n  .nav-title span {\n    font-size: 18px;\n    display: none;\n  }\n\n  .brand-title span {\n    font-size: 18px;\n    text-align: left;\n  }\n\n  .nav-list {\n    position: absolute;\n    text-align: center;\n    top: -250px;\n    left: 0;\n    width: 100%;\n    height: auto;\n    background-color: var(--primary-color);\n    transition: 0.6s;\n    padding: 10px 0;\n  }\n\n  .active {\n    border-bottom: 1px solid var(--third-color);\n  }\n\n  .nav-list .nav-item:hover {\n    border-bottom: 1px solid var(--third-color);\n  }\n\n  .nav-list .nav-item {\n    list-style-type: none;\n    padding: 10px 0;\n    color: var(--four-color);\n  }\n\n  .nav-list .nav-item a {\n    padding: 18px 10px;\n    font-size: 1em;\n  }\n\n  .drawer.display {\n    top: 0;\n  }\n\n  .toggle-menu {\n    width: 44px;\n    height: 44px;\n    background: none;\n    border: none;\n    font-size: 30px;\n    color: #000;\n    cursor: pointer;\n  }\n\n  .tagline h1 {\n    font-size: 3em;\n    color: var(--primary-color);\n  }\n\n  .tagline p {\n    font-size: 18px;\n    color: var(--primary-color);\n  }\n\n  .tagline p span {\n    color: var(--third-color);\n    font-weight: 600;\n  }\n\n  .content-title {\n    text-align: center;\n    font-size: 2em;\n    margin: 20px 0;\n    padding: 10px 0;\n    color: var(--four-color);\n    border-bottom: 2px solid var(--third-color);\n  }\n\n  .list-restaurant,\n  .list-advantages {\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 20px;\n  }\n\n  .list-restaurant {\n    min-height: 90vh;\n  }\n\n  .detailRestaurant {\n    margin-top: 20px;\n    width: 100%;\n    min-height: 100vh;\n  }\n\n  .detailRestaurant p {\n    font-size: 1.125em;\n  }\n\n  .title-detail {\n    font-size: 2em;\n  }\n\n  .img-detail {\n    width: 100%;\n    height: auto;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);\n  }\n\n  .icon-red {\n    color: #ff0000;\n  }\n\n  .icon-yellow {\n    color: #ffd900;\n  }\n\n  .desc-detail {\n    margin-top: 20px;\n    text-align: justify;\n  }\n\n  .form-action {\n    width: 100%;\n    height: auto;\n    margin-top: 20px;\n    font-size: 1.125em;\n  }\n\n  .form-action .form-control {\n    width: 100%;\n    height: 44px;\n    padding: 0 5px;\n    margin-bottom: 10px;\n    outline: none;\n    border: 1px solid var(--four-color);\n    border-radius: 5px;\n  }\n\n  .form-control:focus {\n    outline: 1px solid var(--third-color);\n  }\n\n  .btnReview {\n    display: block;\n    margin: auto;\n    width: 100px;\n    height: 45px;\n    background-color: transparent;\n    border: 1px solid var(--third-color);\n    border-radius: 5px;\n    text-transform: uppercase;\n    color: var(--four-color);\n    cursor: pointer;\n  }\n\n  .btnReview:hover {\n    background-color: var(--third-color);\n    color: var(--primary-color);\n  }\n\n  .card-item {\n    width: 100%;\n    border-radius: 5px;\n    border: 2px solid var(--secondary-color);\n    transition: 0.5s;\n    overflow: hidden;\n  }\n\n  .card-item:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  .card-thumbnail {\n    width: 100%;\n    object-fit: fill;\n    object-position: center;\n    border-top-right-radius: inherit;\n    border-top-left-radius: inherit;\n  }\n\n  .card-icon {\n    display: block;\n    width: 200px;\n    height: 200px;\n    margin: 0 auto;\n  }\n\n  .card-body {\n    padding: 0 10px;\n  }\n\n  h3.card-title,\n  .card-title a {\n    text-decoration: none;\n    color: var(--four-color);\n    line-height: 2em;\n    font-size: 1.3em;\n    padding: 10px 0;\n  }\n\n  .card-title a:hover {\n    text-decoration: underline;\n  }\n\n  .card-description {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n  }\n\n  .card-footer {\n    display: flex;\n    margin-top: 15px;\n    padding: 10px;\n    justify-content: space-between;\n  }\n\n  .card-footer .card-rating {\n    color: #ffd900;\n  }\n\n  .card-footer .card-address {\n    color: #aaa;\n  }\n\n  footer {\n    padding: 20px 0;\n    width: 100%;\n    margin-top: 30px;\n    height: auto;\n    background-color: var(--secondary-color);\n  }\n\n  .contact-list {\n    margin: 20px 0;\n  }\n\n  .contact-item {\n    list-style-type: none;\n  }\n\n  .contact-item a {\n    display: inline-block;\n    font-size: 1.1em;\n    color: var(--third-color);\n    text-decoration: none;\n    line-height: 1.5em;\n    padding: 10px 5px;\n  }\n\n  .copyright {\n    margin-top: 30px;\n    margin-bottom: 20px;\n    text-align: center;\n    color: var(--third-color);\n    font-size: 1.1em;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .nav-title,\n  .brand-title {\n    font-size: 2em;\n  }\n\n  .brand-title span {\n    font-size: 14px;\n    text-align: left;\n  }\n\n  .nav-list {\n    background: none;\n    position: relative;\n    display: flex;\n    justify-content: flex-end;\n    top: 0;\n  }\n\n  .nav-item {\n    margin: 0 7px;\n  }\n\n  .nav-item a {\n    padding: 10px 0;\n    color: var(--four-color);\n  }\n\n  .active {\n    border-bottom: 3px solid var(--third-color);\n  }\n\n  .nav-list .nav-item:hover {\n    border-bottom: 3px solid var(--third-color);\n  }\n\n  .toggle-menu {\n    display: none;\n  }\n\n  .tagline {\n    justify-content: center;\n    align-items: center;\n  }\n\n  .tagline h1 {\n    font-size: 5em;\n  }\n\n  .tagline p {\n    font-size: 2em;\n  }\n\n  .arrow-down {\n    width: 75px;\n    height: 75px;\n    font-size: 30px;\n  }\n\n  .list-restaurant {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 20px;\n  }\n  .list-advantages {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 20px;\n  }\n\n  .card-body p {\n    font-size: 18px;\n  }\n\n  h3.card-title,\n  .card-title a {\n    text-decoration: none;\n    color: var(--four-color);\n    line-height: 2em;\n  }\n\n  footer .row {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .brand-title span {\n    font-size: 24px;\n    text-align: left;\n  }\n\n  .content-title {\n    text-align: center;\n    margin-bottom: 50px;\n    padding: 10px 0;\n    font-size: 42px;\n    color: var(--four-color);\n    border-bottom: 3px solid var(--third-color);\n  }\n\n  .list-restaurant,\n  .list-advantages {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    padding: 0 30px;\n    column-gap: 20px;\n  }\n\n  .detailRestaurant,\n  .reviewContainer {\n    width: 70%;\n    margin: 20px auto;\n  }\n\n  .card-body a {\n    display: block;\n    line-height: normal;\n  }\n\n  .card-body p {\n    font-size: 1.2em;\n  }\n\n  footer .row {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:[':root {\n  --primary-color: #ffffff;\n  --secondary-color: #f1efdc;\n  --third-color: #d36b00;\n  --four-color: #42032c;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: "Open Sans", sans-serif;\n}\n\n.hero {\n  /* background: url("../public/images/hero-image_4.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; */\n  min-height: 90vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -100;\n}\n\n.container {\n  margin: 0 30px;\n}\n\nnav {\n  display: flex;\n  padding: 5px 10px;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.1);\n}\n\n.nav-title {\n  font-weight: 800;\n  color: var(--four-color);\n}\n\n.brand-title {\n  font-weight: 800;\n  color: var(--primary-color);\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n}\n\n.nav-title::first-letter,\n.brand-title::first-letter {\n  color: var(--third-color);\n}\n\n.nav-title span,\n.brand-title span {\n  display: block;\n  text-align: center;\n  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);\n  color: var(--third-color);\n}\n\n.nav-list {\n  width: 100%;\n}\n\n.nav-list .nav-item {\n  list-style-type: none;\n}\n\n.nav-list .nav-item a {\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 0 7px;\n}\n\n.nav-list .nav-item:hover {\n  border-bottom: 3px solid var(--third-color);\n}\n\n.tagline {\n  position: absolute;\n  display: flex;\n  top: 10%;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 65vh;\n  padding: 0 20px;\n  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);\n}\n\n.arrow-down {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  display: block;\n  width: 55px;\n  height: 55px;\n  background: none;\n  border: 1px solid var(--primary-color);\n  border-radius: 50%;\n  font-size: 20px;\n  display: block;\n  color: var(--primary-color);\n  margin: 0 auto;\n  text-align: center;\n}\n\n.arrow-down:focus {\n  outline: 2px solid orange;\n}\n\n.arrow-down .a-down {\n  animation: arrowDown 2s infinite;\n}\n\n.arrow-up {\n  position: fixed;\n  right: 5%;\n  bottom: 6%;\n  width: 55px;\n  height: 55px;\n  background: var(--third-color);\n  border: none;\n  border-radius: 50%;\n  font-size: 20px;\n  color: var(--primary-color);\n  display: none;\n  text-decoration: none;\n}\n\n.arrow-up.display {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  width: 100%;\n  height: auto;\n}\n\n.text-center {\n  text-align: center !important;\n  padding-bottom: 10px;\n}\n\n.our-advantages,\n.restaurant {\n  margin-bottom: 80px;\n}\n\nfooter {\n  width: 100%;\n  margin-top: 30px;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n}\n\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 6%;\n  right: 6%;\n  background-color: var(--third-color);\n  color: #ad5600;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.unlike {\n  font-size: 18px;\n  position: fixed;\n  bottom: 6%;\n  right: 6%;\n  background-color: var(--third-color);\n  color: var(--primary-color);\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@keyframes arrowDown {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(10px);\n  }\n}\n\n@media screen and (min-width: 300px) {\n  .nav-title,\n  .brand-title {\n    font-size: 1.7em;\n  }\n\n  .nav-title span {\n    font-size: 18px;\n    display: none;\n  }\n\n  .brand-title span {\n    font-size: 18px;\n    text-align: left;\n  }\n\n  .nav-list {\n    position: absolute;\n    text-align: center;\n    top: -250px;\n    left: 0;\n    width: 100%;\n    height: auto;\n    background-color: var(--primary-color);\n    transition: 0.6s;\n    padding: 10px 0;\n  }\n\n  .active {\n    border-bottom: 1px solid var(--third-color);\n  }\n\n  .nav-list .nav-item:hover {\n    border-bottom: 1px solid var(--third-color);\n  }\n\n  .nav-list .nav-item {\n    list-style-type: none;\n    padding: 10px 0;\n    color: var(--four-color);\n  }\n\n  .nav-list .nav-item a {\n    padding: 18px 10px;\n    font-size: 1em;\n  }\n\n  .drawer.display {\n    top: 0;\n  }\n\n  .toggle-menu {\n    width: 44px;\n    height: 44px;\n    background: none;\n    border: none;\n    font-size: 30px;\n    color: #000;\n    cursor: pointer;\n  }\n\n  .tagline h1 {\n    font-size: 3em;\n    color: var(--primary-color);\n  }\n\n  .tagline p {\n    font-size: 18px;\n    color: var(--primary-color);\n  }\n\n  .tagline p span {\n    color: var(--third-color);\n    font-weight: 600;\n  }\n\n  .content-title {\n    text-align: center;\n    font-size: 2em;\n    margin: 20px 0;\n    padding: 10px 0;\n    color: var(--four-color);\n    border-bottom: 2px solid var(--third-color);\n  }\n\n  .list-restaurant,\n  .list-advantages {\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 20px;\n  }\n\n  .list-restaurant {\n    min-height: 90vh;\n  }\n\n  .detailRestaurant {\n    margin-top: 20px;\n    width: 100%;\n    min-height: 100vh;\n  }\n\n  .detailRestaurant p {\n    font-size: 1.125em;\n  }\n\n  .title-detail {\n    font-size: 2em;\n  }\n\n  .img-detail {\n    width: 100%;\n    height: auto;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);\n  }\n\n  .icon-red {\n    color: #ff0000;\n  }\n\n  .icon-yellow {\n    color: #ffd900;\n  }\n\n  .desc-detail {\n    margin-top: 20px;\n    text-align: justify;\n  }\n\n  .form-action {\n    width: 100%;\n    height: auto;\n    margin-top: 20px;\n    font-size: 1.125em;\n  }\n\n  .form-action .form-control {\n    width: 100%;\n    height: 44px;\n    padding: 0 5px;\n    margin-bottom: 10px;\n    outline: none;\n    border: 1px solid var(--four-color);\n    border-radius: 5px;\n  }\n\n  .form-control:focus {\n    outline: 1px solid var(--third-color);\n  }\n\n  .btnReview {\n    display: block;\n    margin: auto;\n    width: 100px;\n    height: 45px;\n    background-color: transparent;\n    border: 1px solid var(--third-color);\n    border-radius: 5px;\n    text-transform: uppercase;\n    color: var(--four-color);\n    cursor: pointer;\n  }\n\n  .btnReview:hover {\n    background-color: var(--third-color);\n    color: var(--primary-color);\n  }\n\n  .card-item {\n    width: 100%;\n    border-radius: 5px;\n    border: 2px solid var(--secondary-color);\n    transition: 0.5s;\n    overflow: hidden;\n  }\n\n  .card-item:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  .card-thumbnail {\n    width: 100%;\n    object-fit: fill;\n    object-position: center;\n    border-top-right-radius: inherit;\n    border-top-left-radius: inherit;\n  }\n\n  .card-icon {\n    display: block;\n    width: 200px;\n    height: 200px;\n    margin: 0 auto;\n  }\n\n  .card-body {\n    padding: 0 10px;\n  }\n\n  h3.card-title,\n  .card-title a {\n    text-decoration: none;\n    color: var(--four-color);\n    line-height: 2em;\n    font-size: 1.3em;\n    padding: 10px 0;\n  }\n\n  .card-title a:hover {\n    text-decoration: underline;\n  }\n\n  .card-description {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n  }\n\n  .card-footer {\n    display: flex;\n    margin-top: 15px;\n    padding: 10px;\n    justify-content: space-between;\n  }\n\n  .card-footer .card-rating {\n    color: #ffd900;\n  }\n\n  .card-footer .card-address {\n    color: #aaa;\n  }\n\n  footer {\n    padding: 20px 0;\n    width: 100%;\n    margin-top: 30px;\n    height: auto;\n    background-color: var(--secondary-color);\n  }\n\n  .contact-list {\n    margin: 20px 0;\n  }\n\n  .contact-item {\n    list-style-type: none;\n  }\n\n  .contact-item a {\n    display: inline-block;\n    font-size: 1.1em;\n    color: var(--third-color);\n    text-decoration: none;\n    line-height: 1.5em;\n    padding: 10px 5px;\n  }\n\n  .copyright {\n    margin-top: 30px;\n    margin-bottom: 20px;\n    text-align: center;\n    color: var(--third-color);\n    font-size: 1.1em;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .nav-title,\n  .brand-title {\n    font-size: 2em;\n  }\n\n  .brand-title span {\n    font-size: 14px;\n    text-align: left;\n  }\n\n  .nav-list {\n    background: none;\n    position: relative;\n    display: flex;\n    justify-content: flex-end;\n    top: 0;\n  }\n\n  .nav-item {\n    margin: 0 7px;\n  }\n\n  .nav-item a {\n    padding: 10px 0;\n    color: var(--four-color);\n  }\n\n  .active {\n    border-bottom: 3px solid var(--third-color);\n  }\n\n  .nav-list .nav-item:hover {\n    border-bottom: 3px solid var(--third-color);\n  }\n\n  .toggle-menu {\n    display: none;\n  }\n\n  .tagline {\n    justify-content: center;\n    align-items: center;\n  }\n\n  .tagline h1 {\n    font-size: 5em;\n  }\n\n  .tagline p {\n    font-size: 2em;\n  }\n\n  .arrow-down {\n    width: 75px;\n    height: 75px;\n    font-size: 30px;\n  }\n\n  .list-restaurant {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 20px;\n  }\n  .list-advantages {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 20px;\n  }\n\n  .card-body p {\n    font-size: 18px;\n  }\n\n  h3.card-title,\n  .card-title a {\n    text-decoration: none;\n    color: var(--four-color);\n    line-height: 2em;\n  }\n\n  footer .row {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .brand-title span {\n    font-size: 24px;\n    text-align: left;\n  }\n\n  .content-title {\n    text-align: center;\n    margin-bottom: 50px;\n    padding: 10px 0;\n    font-size: 42px;\n    color: var(--four-color);\n    border-bottom: 3px solid var(--third-color);\n  }\n\n  .list-restaurant,\n  .list-advantages {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    padding: 0 30px;\n    column-gap: 20px;\n  }\n\n  .detailRestaurant,\n  .reviewContainer {\n    width: 70%;\n    margin: 20px auto;\n  }\n\n  .card-body a {\n    display: block;\n    line-height: normal;\n  }\n\n  .card-body p {\n    font-size: 1.2em;\n  }\n\n  footer .row {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n'],sourceRoot:""}]);const a=i},46:(n,A,t)=>{var o=t(379),r=t.n(o),e=t(795),i=t.n(e),a=t(569),l=t.n(a),d=t(565),p=t.n(d),C=t(216),c=t.n(C),s=t(589),E=t.n(s),B=t(756),g={};g.styleTagTransform=E(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),r()(B.Z,g),B.Z&&B.Z.locals&&B.Z.locals}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var e=t[n]={id:n,exports:{}};return A[n](e,e.exports,o),e.exports}o.m=A,n=[],o.O=(A,t,r,e)=>{if(!t){var i=1/0;for(p=0;p<n.length;p++){for(var[t,r,e]=n[p],a=!0,l=0;l<t.length;l++)(!1&e||i>=e)&&Object.keys(o.O).every((n=>o.O[n](t[l])))?t.splice(l--,1):(a=!1,e<i&&(i=e));if(a){n.splice(p--,1);var d=r();void 0!==d&&(A=d)}}return A}e=e||0;for(var p=n.length;p>0&&n[p-1][2]>e;p--)n[p]=n[p-1];n[p]=[t,r,e]},o.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return o.d(A,{a:A}),A},o.d=(n,A)=>{for(var t in A)o.o(A,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},o.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={209:0};o.O.j=A=>0===n[A];var A=(A,t)=>{var r,e,[i,a,l]=t,d=0;if(i.some((A=>0!==n[A]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var p=l(o)}for(A&&A(t);d<i.length;d++)e=i[d],o.o(n,e)&&n[e]&&n[e][0](),n[e]=0;return o.O(p)},t=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];t.forEach(A.bind(null,0)),t.push=A.bind(null,t.push.bind(t))})(),o.nc=void 0;var r=o.O(void 0,[946,2,495,337,268,924],(()=>o(253)));r=o.O(r)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map