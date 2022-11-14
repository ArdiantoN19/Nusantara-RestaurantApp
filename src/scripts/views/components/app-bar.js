class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <header>
                <nav id="navbar">
                    <div class="nav-title">Nusantara <span>Eat Now</span></div>
                        <ul class="nav-list drawer">
                            <li class="nav-item active"><a href="/">Home</a></li>
                            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                            <li class="nav-item"><a target="_blank" href="https://github.com/ArdiantoN19" rel="noreferrer">About Us</a></li>
                        </ul>
                    <button tabindex="2" class="toggle-menu" title="navigasi button"><i class="fa-solid fa-bars"></i></button>
                </nav>
            </header>
        `;
  }
}

customElements.define("app-bar", AppBar);
