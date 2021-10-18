function readme() {

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
    var helps = document.getElementById("helps").value;

    // goals 
    var goals = document.getElementById("goals").value;


    //social media usernames
    var linkedinUsername = document.getElementById("linkedinUsername").value;
    var twitterUsername = document.getElementById("twitterUsername").value;
    var facebookUsername = document.getElementById("facebookUsername").value;
    var instagramUsername = document.getElementById("instagramUsername").value;
    var currentTheme = localStorage.getItem('theme');

    //dark theme
    if(currentTheme == "dark"){
        var markdown = `

<div style="background-color:#121212">
<div style="color:#fff">
# Hi ,I Am Praveen Pal! <img src="https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px">
<br>

![](https://komarev.com/ghpvc/?username=praveenpal4232&color=blue)<br>

### I am a lazy developer :)<br>

- 👨‍🏭 I’m currently pursuing **BCA from IGNOU** <br>
- 🏫 I’m currently learning **Node Js** <br>
- 🙌 I’m looking to collaborate on **React** <br>
- 🤔 I’m looking for help with **WPO**<br>
- 🥅 2021 Goals: **Contribute to more projects & learn new tech stacks** <br>


### 🕵 Take a look at my repositories and let's get in touch!<br>


[![Linkedin Badge](https://img.shields.io/badge/-praveenpal4232-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/praveenpal4232/)](https://www.linkedin.com/in/praveenpal4232/) 
[![Twitter Badge](https://img.shields.io/badge/-@praveenpal4232-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/praveenpal4232)](https://twitter.com/praveenpal4232) 
[![Facebook Badge](https://img.shields.io/badge/-praveenpal4232-3b5998?style=flat-square&labelColor=3b5998&logo=facebook&logoColor=white&link=https://www.facebook.com/praveenpal4232)](https://www.facebook.com/praveenpal4232) 
[![Instagram Badge](https://img.shields.io/badge/-@praveenpal4232-E4405F?style=flat-square&logo=instagram&logoColor=white&link=https://www.instagram.com/praveenpal4232)](https://www.instagram.com/praveenpal4232) 


### 📈 Github Stats:


<br>
<a href="https://github.com/praveenpal4232">
<img align="center" src="https://github-readme-stats.vercel.app/api?username=praveenpal4232&show_icons=true&include_all_commits=true&theme=vision-friendly-dark&count_private=true">
</a>
<br><br>
<a href="https://github.com/remcohalman/github-readme-stats">
<img align="center" src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=praveenpal4232&layout=compact&theme=blue-green" />
</a>
<br>
<br><br>

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=praveenpal4232&theme=dark)](https://git.io/streak-stats)

</div>
</div>

`;
    }

    //light theme
    else{
        var markdown = `
# Hi ,I Am ${nameOfUser}! <img src="https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px">
<br>

![](https://komarev.com/ghpvc/?username=${GitHubUsername}&color=blue)<br>

### ${aboutMe}<br>

- 👨‍🏭 I’m currently pursuing **${study}** <br>
- 🏫 I’m currently learning **${learnings}** <br>
- 🙌 I’m looking to collaborate on **${collab}** <br>
- 🤔 I’m looking for help with **${helps}**<br>
- 🥅 2021 Goals: **${goals}** <br>


### 🕵 Take a look at my repositories and let's get in touch!<br>


[![Linkedin Badge](https://img.shields.io/badge/-${linkedinUsername}-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/${linkedinUsername}/)](https://www.linkedin.com/in/${linkedinUsername}/) 
[![Twitter Badge](https://img.shields.io/badge/-@${twitterUsername}-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/${twitterUsername})](https://twitter.com/${twitterUsername}) 
[![Facebook Badge](https://img.shields.io/badge/-${facebookUsername}-3b5998?style=flat-square&labelColor=3b5998&logo=facebook&logoColor=white&link=https://www.facebook.com/${facebookUsername})](https://www.facebook.com/${facebookUsername}) 
[![Instagram Badge](https://img.shields.io/badge/-@${instagramUsername}-E4405F?style=flat-square&logo=instagram&logoColor=white&link=https://www.instagram.com/${instagramUsername})](https://www.instagram.com/${instagramUsername}) 


### 📈 Github Stats:


<br>
<a href="https://github.com/${GitHubUsername}">
<img align="center" src="https://github-readme-stats.vercel.app/api?username=${GitHubUsername}&show_icons=true&include_all_commits=true&theme=midnight-purple&count_private=true">
</a>
<br><br>
<a href="https://github.com/remcohalman/github-readme-stats">
<img align="center" src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=${GitHubUsername}&layout=compact&theme=blue-green" />
</a>
<br>
<br><br>

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${GitHubUsername})](https://git.io/streak-stats)

`;
    }
    
    console.log(currentTheme);
    console.log(markdown);
    copyToClipboard(markdown);
    alert("Your readme code is copied to the clipboard");

}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

