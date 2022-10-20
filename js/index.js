// ===========================================================================
//                                  README
// ===========================================================================
function readme() {
  // ========================== Personal infos ===============================
  const nameOfUser = document.getElementById('nameOfUser').value, //name
    GitHubUsername = document.getElementById('GitHubUsername').value, //github username
    aboutMe = document.getElementById('aboutme').value, //about me
    study = document.getElementById('study').value, //course and college
    learnings = document.getElementById('learn').value, //learn about
    collab = document.getElementById('collab').value, //collaborate
    helps = document.getElementById('helps').value, //help
    goals = document.getElementById('goals').value; // goals
    
  // ========================== Button customisations =================================
  const buttonColor = document.getElementById('buttonColor').value.slice(1), //button color
    buttonType = document.getElementById('buttonType').value //button type
  const buttonURL = `https://komarev.com/ghpvc/?username=${GitHubUsername}&color=${buttonColor}&style=${buttonType}`
  //====================== social media usernames =============================
  const linkedinUsername = document.getElementById('linkedinUsername').value.replace("-", ""),
    twitterUsername = document.getElementById('twitterUsername').value,
    facebookUsername = document.getElementById('facebookUsername').value,
    instagramUsername = document.getElementById('instagramUsername').value,
    currentTheme = localStorage.getItem('theme');


  //dark theme
  if (currentTheme == 'dark') {
    // ========================== Formation of output ===============================
    var message =
      'Your readme code is copied to the clipboard. Since you have chosen dark theme, enable darkmode in GitHub.';
    var markdown = `

<div style="background-color:#121212">
<div style="color:#fff">
# Hi ,I am ${nameOfUser}! <img src="https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px">
<br>

![](${buttonURL})<br>

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
<img align="center" src="https://github-readme-stats.vercel.app/api?username=${GitHubUsername}&show_icons=true&include_all_commits=true&theme=vision-friendly-dark&count_private=true">
</a>
<br><br>
<a href="https://github.com/remcohalman/github-readme-stats">
<img align="center" src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=${GitHubUsername}&layout=compact&theme=vision-friendly-dark" />
</a>
<br>
<br><br>

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${GitHubUsername}&theme=dark)](https://git.io/streak-stats)

</div>
</div>

`;
  }

  //light theme
  else {
    // ========================== Formation of output ===============================
    var message = 'Your readme code is copied to the clipboard.';
    var markdown = `
# Hi ,I am ${nameOfUser}! <img src="https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px">
<br>

![](${buttonURL})<br>

### ${aboutMe}<br>

- 👨‍🏭 I’m currently pursuing **${study}** <br>
- 🏫 I’m currently learning **${learnings}** <br>
- 🙌 I’m looking to collaborate on **${collab}** <br>
- 🤔 I’m looking for help with **${helps}**<br>
- 🥅 Upcoming Goals: **${goals}** <br>


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
  // ========================== Outputing Results ===============================
  console.log(currentTheme);
  console.log(markdown);
  copyToClipboard(markdown);
  alert(message);
}

// ============================================================
//                    COPYTOCLIPBOARD
// ============================================================
function copyToClipboard(text) {
  var dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}
