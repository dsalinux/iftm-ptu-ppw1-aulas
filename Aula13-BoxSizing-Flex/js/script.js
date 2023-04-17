//Get size of element
let nbs_width = document.getElementById("noboxsizing").offsetWidth;
let nbs_heith = document.getElementById("noboxsizing").offsetHeight;
let bs_width = document.getElementById("boxsizing").offsetWidth;
let bs_heith = document.getElementById("boxsizing").offsetHeight;

//Set size of element
document.getElementById("noboxsizing_realsize").innerHTML = "Tamanho Real: "+nbs_width + " px X " + nbs_heith +" px";
document.getElementById("boxsizing_realsize").innerHTML = "Tamanho Real: "+bs_width + " px X " + bs_heith +" px";