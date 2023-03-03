var title_container = document.getElementById("title_container");
var register_btn = document.getElementById("register_btn");
var register_form = document.getElementById("register_form");
var submit_button = document.getElementById("submit_button");
var form_container_one = document.getElementById("form_container_one");
var button_container = document.getElementById("button_container");

let dog_id = [["dog1.png", "Noopie"], ["dog2.png", "Max"], ["dog3.png", "Lily"],[ "dog4.png", "Fellipe"],["dog5.png", "Juan"],["dog6.png", "Guez"],["dog7.png", "Mer"],["dog8.png", "Goofy"],["dog9.png", "John F. Kennedy"],["dog10.png", "Le dev"],["dog11.png", "Francesco"],["dog12.png", "Nana la D.A."]]

function registerAnimation() {
    register_form.style.transition = " 1.5s"
   setTimeout(() => {
    register_form.style.backgroundColor = "#fff"
    register_form.style.backgroundColor = "#fff"

   }, 1200); 
    setTimeout(() => {
        register_form.style.display = "block";
    }, 1000);
    register_btn.style.transition = "ease-in 0.5s";
    register_btn.style.backgroundColor = "#9796DE";
    register_btn.style.color = "#9796DE";
    setTimeout(() => {
        register_btn.style.display = "none";
    }, 1000);
};

var dog_image = document.getElementById("dog_image");
dog_image.onclick = function () {
    var randint = Math.floor(Math.random() * 12);
    dog_image.src = "images/" + dog_id[randint][0];
    dog_name.innerHTML = dog_id[randint][1];
}

var like_btn = document.getElementById("like_button");

like_btn.onclick = function () {
    var randint = Math.floor(Math.random() * 12);
    dog_image.src = "images/" + dog_id[randint][0];
    dog_name.innerHTML = dog_id[randint][1];
}

var dislike_btn = document.getElementById("dislike_button");

dislike_btn.onclick = function () {
    var randint = Math.floor(Math.random() * 12);
    dog_image.src = "images/" + dog_id[randint][0];
    dog_name.innerHTML = dog_id[randint][1];
}
var isEnabled1 = false
var asb1 = document.getElementById("asb1");
asb1.onclick = function () {
    if (isEnabled1 == true) {
        asb1.style.transition = "0.3s all";
        asb1.style.backgroundColor = "#fff";
        isEnabled1 = false;
    }
    else {
        asb1.style.transition = "0.3s all";
        asb1.style.backgroundColor = "#9796DE";
        isEnabled1 = true;
    }
}


var isEnabled2 = false
var asb2 = document.getElementById("asb2");
asb2.onclick = function () {
    if (isEnabled2 == true) {
        asb2.style.transition = "0.3s all";
        asb2.style.backgroundColor = "#fff";
        isEnabled2 = false;
    }
    else {
        asb2.style.transition = "0.3s all";
        asb2.style.backgroundColor = "#9796DE";
        isEnabled2 = true;
    }
}

var isEnabled3 = false
var asb3 = document.getElementById("asb3");
asb3.onclick = function () {
    if (isEnabled3 == true) {
        asb3.style.transition = "0.3s all";
        asb3.style.backgroundColor = "#fff";
        isEnabled3 = false;
    }
    else {
        asb3.style.transition = "0.3s all";
        asb3.style.backgroundColor = "#9796DE";
        isEnabled3 = true;
    }
}

var isEnabled4 = false
var asb4 = document.getElementById("asb4");
asb4.onclick = function () {
    if (isEnabled4 == true) {
        asb4.style.transition = "0.3s all";
        asb4.style.backgroundColor = "#fff";
        isEnabled4 = false;
    }
    else {
        asb4.style.transition = "0.3s all";
        asb4.style.backgroundColor = "#9796DE";
        isEnabled4 = true;
    }
}