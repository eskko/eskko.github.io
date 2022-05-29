var config1;
var config2;

fetch("config.json")
    .then(response => response.json())
    .then(data => {
        
        
        config1 = data.periodContaining
        config2 = data.sentenceEnding
        console.log(config1)
        console.log(config2)
    }
        
    )
// ******* index.js *******
//EASY WAY
//var myName = window.prompt("What's your name?");
//console.log("Hello",myName);

//HARD WAY\
/*
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log("Hello",myName);
}*/

function periodCheck(word){
    for(var c in config1){

        if(word.includes(config1[c])){
            //console.log("true");
            return true;
            
        }
    }
    //console.log("false");
    return false;
    
}

function sentenceCheck(word){
    for(var c in config2){
        if(word.includes(config2[c])){
            //console.log("true");
            return true;
            
        }
    }
    return false;
}

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }


function myFunction(){
    var temp = document.getElementById("fm1");
    console.log("hi", temp);
}


document.getElementById("myButton").onclick = function(){


    
    var str = document.getElementById("myText").value;
    console.log(str);
    str = str.replaceAll("\n", " ") + " ";
    var lyst = []; 
    var word = "";
    var num = 1;
    var final = "";
    
    for(let i = 0; i < str.length; ++i){
        
        if(str[i] == ' '){
            lyst.push(word);
            
            if(sentenceCheck(word) && !periodCheck(word)){
                console.log(word);
                
                    lyst = shuffleArray(lyst);
                    final += num + ". ";
                    ++num;
                    for(let j = 0; j < lyst.length; ++j){
                        lyst[j] = lyst[j].replaceAll("+", " ");
                    }
    
                    for(let j = 0; j < lyst.length - 1; ++j){
                        final += lyst[j] + " / ";
                    }
                    final += lyst[lyst.length - 1] + "\n\n";
                    lyst = [];
                    
                
            }
            
            
            word = "";
        }else{
            word += str[i];
            
        }
    }


    



    document.getElementById("myDisplay").innerHTML = final;
    //document.body.innerHTML = "<h2> hi " + myName + "</h2>"


    
}

