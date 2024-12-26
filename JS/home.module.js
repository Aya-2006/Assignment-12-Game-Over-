import { Ui } from "./Ui.module.js";
import { Details } from "./details.module.js";

export class Home {
  constructor() {
    document.getElementById("details").classList.add("d-none");
    this.load = document.querySelector(".loading");
    this.details = document.getElementById("details");
    this.home = document.getElementById("home");

    let btnClick = Array.from(document.querySelectorAll(".nav-link"));
    for (let i = 0; i < btnClick.length; i++) {
      btnClick[i].addEventListener("click", () => {
        document
          .querySelector(".navbar-nav .active")
          .classList.remove("active");
        btnClick[i].classList.add("active");
        let userChoose = btnClick[i].innerHTML;
        this.getData(userChoose);
      });
    }
    this.getData("mmorpg");
  }

  async getData(dataClick) {
    this.load.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4933fcf2fcmshdd72ff42b2c4e29p151d0bjsn5f525e9b33b1",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${dataClick}`,
      options
    );
    const response = await api.json();
    this.ui = new Ui();
    this.ui.displayHome(response);
    this.load.classList.add("d-none");
    let detailsData = Array.from(document.querySelectorAll(".card"));
    for (let i = 0; i < detailsData.length; i++) {
      detailsData[i].addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.home.classList.add("d-none");
        new Details(detailsData[i].getAttribute("card-id"));
      });
    }
  }
}
