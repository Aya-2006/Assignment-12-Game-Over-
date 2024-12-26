export class Ui {
  constructor() {
  }

  displayHome(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `
            <div class="col">
            <div card-id="${data[i].id}" class="card h-100 bg-transparent">
              <div class="card-body">
                <div class="position-relative">
                  <img
                    class="card-img-top object-fit-cover h-100"
                    src="${data[i].thumbnail}"
                    alt=""
                  />
                </div>
                <div>
                  <div class="d-flex justify-content-between pt-3">
                    <h3 class="h6 small">${data[i].title}</h3>
                    <span class="super-class text-bg-primary p-2">Free</span>
                  </div>
                  <p class=" small text-center opacity-50">
                    ${data[i].short_description.split(" ", 8)}
                  </p>
                </div>
              </div>
              <div class="small d-flex justify-content-between border-top border-dark p-1">
                <span class="super-class bg-foot my-1 mx-2">${
                  data[i].genre
                }</span>
                <span class="super-class bg-foot my-1 mx-2">${
                  data[i].platform
                }</span>
              </div>
            </div>
          </div>`;
    }
    document.getElementById("gameData").innerHTML = cartona;
  }

  displayDetails(data) {
    const cartona = `
        <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="" />
     </div>
     <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="super-class text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="super-class text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="super-class text-bg-info"> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning" href="${data.game_url}">Show Game</a>
     </div>
        `;

    document.getElementById("detailsContent").innerHTML = cartona;
  }
}
