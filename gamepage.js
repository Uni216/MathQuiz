p1name= localStorage.getItem("NameOne")
p2name= localStorage.getItem("NameTwo")

document.getElementById("player1_name").innerHTML = p1name + " : "
document.getElementById("player2_name").innerHTML = p2name + " : "

p1score= 0
p2score = 0

document.getElementById("player1_score").innerHTML = p1score
document.getElementById("player2_score").innerHTML = p2score

document.getElementById("player_question").innerHTML = "Question Turn: " + p1name
document.getElementById("player_answer").innerHTML = "Answer Turn: " + p2name
 

function send(){
    n1= document.getElementById("num").value
    n2= document.getElementById("num2").value

    question = "<h4 id='word_display'> Q." + n1 +'*'+n2 +" </h4>"
    inputBox = " <br> Answer: <input type='text' id='AnswerBox'> "
    Check = " <br> <br> <button class='btn btn-info' onclick=Check()'> Check </button> "
    document.getElementById("output").innerHTML = question+ inputBox + Check
    document.getElementById("num").value = " "
    document.getElementById("num2").value = " "
    UAns= document.getElementById("AnswerBox").value
    questionTurn = "player1"
    answerTurn = "player2"
    
    function Check() {
        Answer = document.getElementById("AnswerBox").value
        FinalAns= n1 * n2
    
        if (UAns== FinalAns) {
    
            if (answerTurn == "player1") {
                p1score = p1score + 1
                document.getElementById("player1_score").innerHTML = p1score
            } else {
                p2score = p2score + 1
                document.getElementById("player2_score").innerHTML = p2score
            }
        }
    
        if (questionTurn == "player1") {
            questionTurn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn: "+  p2name
        }
        else {
            questionTurn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn: " + p1name
        }
    
        if (answerTurn == "player1") {
            answerTurn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn: "+  p2name
        }
        else {
            answerTurn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn: " + p1name
        }
        document.getElementById("output").innerHTML= " "
    }
   
}