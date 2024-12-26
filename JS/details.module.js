import { Ui } from "./Ui.module.js";

export class Details {
  constructor(cardID) {
    this.load = document.querySelector(".loading");
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("home").classList.remove("d-none");
      document.getElementById("details").classList.add("d-none");
    });
    this.getDetails(cardID);
  }
  async getDetails(ID) {
    this.load.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4933fcf2fcmshdd72ff42b2c4e29p151d0bjsn5f525e9b33b1",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ID} `,
      options
    );
    const response = await api.json();
    this.load.classList.add("d-none");
    this.uiClass = new Ui();
    this.uiClass.displayDetails(response);
  }
}
