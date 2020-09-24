function mapSkeld(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = "img/map_skeld.png";
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function mapMira(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = "img/map_mira.png";
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function mapPolus(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = "img/map_polus.png";
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
