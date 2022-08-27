player_1 = localStorage.getItem("name_1");
player_2 = localStorage.getItem("name_2");

player1score = 0;
player2score = 0;

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("name_1").innerHTML = "Question Turn : " + player_1;
document.getElementById("name_2").innerHTML = "Answer Turn : " + player_2;

document.getElementById("player1scorename").innerHTML = player_1 + " -";
document.getElementById("player2scorename").innerHTML = player_2 + " -";

function send() {

    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;

    input1store = localStorage.setItem("input1", input1);
    input2store = localStorage.setItem("input2",input2);

    document.getElementById("n1").innerHTML = input1;
    document.getElementById("n2").innerHTML = input2;
}

at = "player_1";
qt = "player_2";

function check() {
 ca = input1 * input2 ;
 ans = document.getElementById("ans").value;
    if(ans == ca) {
        if(at == "player_2"){
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
        else {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        }
        
        if(qt == "player1") {
            qt ="player2";
            at = "player1";
            document.getElementById("name_1").innerHTML = "Question Turn :"+ player_2;
            document.getElementById("name_2").innerHTML = "Answer Turn :"+ player_1;
        }
        else {
            qt ="player1";
            at = "player2";
            document.getElementById("name_1").innerHTML = "Question Turn :"+ player_1;
            document.getElementById("name_2").innerHTML = "Answer Turn :"+ player_2;
        }
        
        document.getElementById("output").innerHTML = "";
    }
