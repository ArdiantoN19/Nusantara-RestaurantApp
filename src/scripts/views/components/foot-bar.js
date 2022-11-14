class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <div class="container">
                <div class="row">
                    <div class="brand-title"> Nusantara <span>Eat Now</span> </div>
                    <ul class="contact-list">
                        <li class="contact-item"><a href="#"><i class="fa-solid fa-envelope"></i> Email: NusantaraFood@gmail.com</a>
                        </li>
                        <li class="contact-item"><a href="#"><i class="fa-solid fa-location-dot"></i> Address: Jl. Imam Bonjol No.12,
                            Jakarta Selatan</a></li>
                        <li class="contact-item"><a href="#"><i class="fa-solid fa-phone"></i> Phone: 021-8871-3599</a></li>
                    </ul>
                </div>
                <a href="#navbar" class="arrow-up"><i class="fa-solid fa-arrow-up"></i></a>
                <p class="copyright">copyright &copy; 2022 - Nusantara Restaurant</p>
            </div>
        </footer>
    `;
  }
}

customElements.define("foot-bar", FootBar);
