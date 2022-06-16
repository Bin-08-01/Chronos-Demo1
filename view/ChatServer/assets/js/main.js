const userApi = "http://localhost:3000/user";
const commentApi = "http://localhost:3000/comments";
// const userApi = "https://api.npoint.io/fb73dcb8550b9da6fdde/user";
// const commentApi = "https://api.npoint.io/2550caa17c8730ddc941/comments";
// const userApi = "https://bin-08-01.github.io/Chronos-Demo2/database/user.json";
// const commentApi = "https://bin-08-01.github.io/Chronos-Demo2/database/comment.json";

let sendBtn = document.querySelector(".send-icon");
let inputCmt = document.querySelector("#input-comment");
let btnHeader = document.querySelector("#button-to-header>span");

function excute() {
  getComment();
}

excute();

function getComment() {
  fetch(commentApi)
    .then((Response) => {
      return Response.json();
    })
    .then((comments) => {
      var userIds = comments.map((comment) => {
        return comment.idUser;
      });
      getUserById(userIds, comments);
    });
}

function getUserById(userIds, comments) {
  fetch(userApi)
    .then((Response) => {
      return Response.json();
    })
    .then((users) => {
      let userList = users.filter((user) => {
        return userIds.includes(user.id);
      });
      return {
        users: users,
        comments: comments,
      };
    })
    .then((data) => {
      renderFrame(data);
    });
}

function renderFrame(data) {
  let frame = document.querySelector("#list-comment");

  let html = "";

  data.comments.forEach((comment) => {
    var user = data.users.find((user) => {
      return user.id === comment.idUser;
    });
    html =
      `
            <li>
                <div class="avatar">
                    <img src="${user.avatar}">
                </div>
                <div class="comment">
                    <h4>${user.name}</h4>
                    <span>${comment.comment}</span>
                </div>
            </li>
        ` + html;
  });

  frame.innerHTML = html;
}

sendBtn.addEventListener("click", () => {
  if (inputCmt.value !== "") {
    let comment = inputCmt.value;
    var data = {
      comment: comment,
      idUser: 4,
    };
    handleAddComment(data);
  }
});

btnHeader.addEventListener("click", () => {
  window.scrollBy(0, 1000);
});

function handleAddComment(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(commentApi, options)
    .then((Response) => {
      return Response.json();
    })
    .then(callback);
}
