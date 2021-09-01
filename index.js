
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
   
   //collaborate
   var collab = document.getElementById("collab").value
   
   //help
   var helps= document.getElementById("helps").value;
   
   // goals 
   var goals = document.getElementById("goals").value;
   
   
   //social media usernames
   var linkedinUsername= document.getElementById("linkedinUsername").value;
   var twitterUsername = document.getElementById("twitterUsername").value;
   var facebookUsername = document.getElementById("facebookUsername").value;
   var instagramUsername = document.getElementById("instagramUsername").value;
   
   
   
   
   
    let markdown = `
### Hi ,I Am ${nameOfUser}! <img src=" https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px"> \n \n

![](https://komarev.com/ghpvc/?username=${GitHubUsername}&color=blue)
<h3>${aboutMe}</h3>

- 👨‍🏭 I’m currently pursuing **${study}** 
- 🏫 I’m currently learning **${learnings}** 
- 🙌 I’m looking to collaborate on **${collab}**
- 🤔 I’m looking for help with **${helps}**
- 🥅 2021 Goals: **${goals}**

🕵 Take a look at my repositories and let's get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-${linkedinUsername}-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/${linkedinUsername}/)](https://www.linkedin.com/in/${linkedinUsername}/) 
[![Twitter Badge](https://img.shields.io/badge/-@${twitterUsername}-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/${twitterUsername})](https://twitter.com/${twitterUsername}) 
[![Facebook Badge](https://img.shields.io/badge/-${facebookUsername}-3b5998?style=flat-square&labelColor=3b5998&logo=facebook&logoColor=white&link=https://www.facebook.com/${facebookUsername})](https://www.facebook.com/${facebookUsername}) 
[![Instagram Badge](https://img.shields.io/badge/-@${instagramUsername}-E4405F?style=flat-square&logo=instagram&logoColor=white&link=https://www.instagram.com/${instagramUsername})](https://www.instagram.com/${instagramUsername}) 



<br><br>
### 📈 Github Stats:
<hr/>

<a href="https://github.com/${GitHubUsername}">
<img align="center" src="https://github-readme-stats.vercel.app/api?username=${GitHubUsername}&show_icons=true&include_all_commits=true&theme=midnight-purple&count_private=true">
</a>
<br><br>
<a href="https://github.com/remcohalman/github-readme-stats">
<img align="center" src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=${GitHubUsername}&layout=compact&theme=blue-green" />
</a>

<br><br>

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${GitHubUsername})](https://git.io/streak-stats)

`;



    console.log(markdown);
    }