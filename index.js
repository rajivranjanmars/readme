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





    let markdown = `
# Hi ,I Am ${nameOfUser}! <img src="https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px"> <br> <br>
<br>

![](https://komarev.com/ghpvc/?username=${GitHubUsername}&color=blue)<br>

<h3>### ${aboutMe}</h3><br>

- 👨‍🏭 I’m currently pursuing **${study}** <br>
- 🏫 I’m currently learning **${learnings}** <br>
- 🙌 I’m looking to collaborate on **${collab}** <br>
- 🤔 I’m looking for help with **${helps}**<br>
- 🥅 2021 Goals: **${goals}** <br>


🕵 Take a look at my repositories and let's get in touch!<br>

<br/>

### You can connect me through:

<hr/>

[![Linkedin Badge](https://img.shields.io/badge/-${linkedinUsername}-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/${linkedinUsername}/)](https://www.linkedin.com/in/${linkedinUsername}/) 
[![Twitter Badge](https://img.shields.io/badge/-@${twitterUsername}-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/${twitterUsername})](https://twitter.com/${twitterUsername}) 
[![Facebook Badge](https://img.shields.io/badge/-${facebookUsername}-3b5998?style=flat-square&labelColor=3b5998&logo=facebook&logoColor=white&link=https://www.facebook.com/${facebookUsername})](https://www.facebook.com/${facebookUsername}) 
[![Instagram Badge](https://img.shields.io/badge/-@${instagramUsername}-E4405F?style=flat-square&logo=instagram&logoColor=white&link=https://www.instagram.com/${instagramUsername})](https://www.instagram.com/${instagramUsername}) 


### 📈 Github Stats:

<hr/>
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

### Languages

<hr/>

<img align="left" alt="HTML5" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Python" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" />
<img align="left" alt="C++" width="30px" src="https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png" />
<img align="left" alt="C" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" />
<img align="left" alt="PHP" width="30px" src="https://www.php.net/images/logos/new-php-logo.svg" />
<img align="left" alt="Mysql" width="30px" src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" />

<br>

### Tools

<img align="left" alt="Visual Studio Code" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="GitHub Desktop" width="30px" src="https://static.techspot.com/images2/downloads/topdownload/2021/04/2021-04-07-ts3_thumbs-8ba.png" />
<img align="left" alt="Terminal" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
<img align="left" alt="GitBash" width="30px" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
<img align="left" alt="Wordpress" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wordpress_Blue_logo.png/1200px-Wordpress_Blue_logo.png" />
<img align="left" alt="Orcle 10g" width="30px" src="https://yenra.com/oracle-10g-enterprise-manager/oracle-10g-enterprise-manager.gif" />
<img align="left" alt="Bootstrap" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" />
<img align="left" alt="Pycharm" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/1200px-PyCharm_Icon.svg.png" />

<br><br><br>


`;
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