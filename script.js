var time =60;
var count = 0;
var rn = Math.floor(Math.random()*10);

    var timeint = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else if(time === 0){
            clearInterval(timeint);
            document.querySelector(".bottom").innerHTML = `<h1>Times up ! </h1>`
        }
        
    },1000);


function movecount(){
    console.log(rn);
    document.querySelector(".numbers").addEventListener("click",function(a){
        var guessnum = Number(a.target.textContent);
        document.querySelector("#count").textContent = ++count;
        if(guessnum>rn){
            document.querySelector(".text h1").textContent = `Predict the number less than ${guessnum}`;
        }
        else if(guessnum<rn){
            document.querySelector(".text h1").textContent = `Predict number greater than ${guessnum}`;
        }
        else{
            document.querySelector(".text h1").textContent = `Congratulation you win ! in ${count} counts`;
            document.querySelector(".numbers").textContent = "";
            document.querySelector("#timer").textContent = 0;
            clearInterval(timeint);
        }
        
    })
}

// timer();

movecount();


