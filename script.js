var title_container = document.getElementById("title_container");
var register_btn = document.getElementById("register_btn");
var register_form = document.getElementById("register_form");
var submit_button = document.getElementById("submit_button");
var form_container_one = document.getElementById("form_container_one");
var button_container = document.getElementById("button_container");

let dog_id = [["dog1.png", "Noopie"], ["dog2.png", "Max"], ["dog3.png", "Lily"]]

function registerAnimation() {
    register_form.style.display = "block";
    register_btn.style.display = "none";
};

var dog_image = document.getElementById("dog_image");
dog_image.onclick = function () {
    var randint = Math.floor(Math.random() * 3);
    dog_image.src = "images/" + dog_id[randint][0];
    dog_name.innerHTML = dog_id[randint][1];
}

var like_btn = document.getElementById("like_button");

like_btn.onclick = function () {
    var randint = Math.floor(Math.random() * 3);
    dog_image.src = "images/" + dog_id[randint][0];
    dog_name.innerHTML = dog_id[randint][1];
}

var dislike_btn = document.getElementById("dislike_button");

dislike_btn.onclick = function () {
    var randint = Math.floor(Math.random() * 3);
    dog_image.src = "images/" + dog_id[randint][0];
    dog_name.innerHTML = dog_id[randint][1];
}