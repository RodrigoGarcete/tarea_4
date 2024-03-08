let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
 
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
            data = request.response
            console.log(data)
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
    button.addEventListener('click', e => {changeVideo()})
}

function changeVideo() { 
   
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number++
    if (number>2) {
        number=0;
    }

    // ajax.jsonからデータを取得していない場合のみ、getDataの処理を呼び出す
  }

window.onload = getData;