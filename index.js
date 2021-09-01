let thename= document.getElementById("thename")
let username = thename.value
function readme(){

    //name
     var nameOfUser = document.getElementById("nameOfUser").value;
     
     //github username
    var GitHubUsername = document.getElementById("GitHubUsername").value;

    //about me
    var aboutMe = document.getElementById("aboutme").value
    

    //course and college
    var study = document.getElementById("study").value;
   
   //learn about
   var learnings = document.getElementById("learn").value;
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    let markdown = `
### Hi ,I Am ${nameOfUser}! <img src=" https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px"> \n \n

![](https://komarev.com/ghpvc/?username=${GitHubUsername}&color=blue)
<h3>${aboutMe}</h3>

- 👨‍🏭 I’m currently pursuing **${study}** 
- 🏫 I’m currently learning **${learnings}** 



`;


    console.log(markdown);
    }