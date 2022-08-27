function page_next_button_good_luck() {
player_1 =document.getElementById("name_1").value;
player_2 =document.getElementById("name_2").value;    
localStorage.setItem("name_1",player_1);
localStorage.setItem("name_2",player_2);
window.location = "geometry_is_bad.html";
}
