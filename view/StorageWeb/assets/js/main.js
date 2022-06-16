const api = "http://localhost:3000/file";
// const api = "https://api.npoint.io/3ee6290b51754f3fc723/file";
// const api = "https://bin-08-01.github.io/Chronos-Demo2/database/file.json";

function excute() {
  getFile(renderFrame);
}

excute();

function getFile(callback) {
  fetch(api)
    .then((Response) => {
      return Response.json();
    })
    .then(callback);
}

function renderFrame(files) {
  const frame = document.querySelector("#list-file");

  let html = files.map((file) => {
    return `
            <li>
                <div class="picture" onclick="showFile('${file.link}')">
                    <img src='${file.link}'>
                </div>
                <div class="info-file" onclick="showFile('${file.link}')">
                    <h5>${file.name}</h5>
                    <span>${file.capacity}</span>
                    
                </div>
                <a href="#"><i class="ti-import"></i></a>
            </li>
        `;
  });

  frame.innerHTML = html.join("");
}

function showFile(link) {
  const previewFrame = document.querySelector("#preview-container");
  previewFrame.style.backgroundImage = `url(${link})`;
}

function handleFileSelect(evt) {
  let files = evt.target.files; // FileList object

  // use the 1st file from the list
  let f = files[0];

  let reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function (theFile) {
    return function (e) {
      document.querySelector("#ms_word_filtered_html").val(e.target.result);
    };
  })(f);

  // Read in the image file as a data URL.
  reader.readAsText(f);
}

document
  .querySelector("#upload-file")
  .addEventListener("change", handleFileSelect, false);
