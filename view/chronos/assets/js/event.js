// const API = "https://api.npoint.io/7a855e20a2d405b612d3/notification";
// const API ="https://bin-08-01.github.io/Chronos-Demo2/database/notification.json";
const API = "http://localhost:3000/notification";

function excute() {
  getNotifi(renderFrame);
}

excute();

function getNotifi(callback) {
  fetch(API)
    .then((Response) => {
      return Response.json();
    })
    .then(callback);
}

function renderFrame(notifications) {
  const notiBlock = document.querySelector("#list-noti");
  let html = "";
  notifications.forEach((notification) => {
    html =
      `
        <li class="${notification.mark && "mark-css"}" title="${
        notification.content
      }">
            <a href="">
                <div class="img-block-noti">
                  <img src="${notification.image}" alt=""/>
                </div>
                <div class="content-block-noti">
                  <h5>${notification.content}</h5>
                  <span>${notification.time}</span>
                </div>
                <div class="${
                  notification.mark && "mark-css"
                } check-mark"></div>
            </a>
        </li>
    ` + html;
  });
  notiBlock.innerHTML = html;
}
