let getbtn = document.getElementById("get");
getbtn.addEventListener("click", myfunction);


function myfunction() {
  
  let xhr = new XMLHttpRequest();
  let file = "table.html";

   xhr.open("GET", file, true); 

  xhr.onerror = function () {
    console.error("Error fetching the file");
  };
  xhr.onprogress = function () {
   console.log('loading');
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      let tabel = xhr.responseText;
      document.getElementById("main").innerHTML = tabel;
    } else {
      document.getElementById("main").innerHTML = xhr.status;
    }
  };
  xhr.send();
}

let removebtn = document.getElementById("remove");
removebtn.addEventListener('click',remove);

function remove() {
  document.getElementById("main").innerHTML='';
}
