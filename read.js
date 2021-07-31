var readme = [];

//name section starts
(cout << "What is your name") << endl;
var name;
getline(cin, name);
var nameline =
  "### Hi ,I Am " +
  name +
  ' <img src=" https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px"> \n \n'; // i have to add link

cout << nameline;

readme.push(nameline);
// name section ends

// add profile views section starts
var githubUserName;
(cout << "please enter your github username") << endl;
cin >> githubUserName;
var profileLinks =
  "![](https://komarev.com/ghpvc/?username=" +
  githubUserName +
  "&color=blue)\n";
cout << profileLinks;
readme.push(profileLinks);
// add profile views section ends

// about section starts

//one line tag starts
(cout << " Tell me somthing about you in one line") << endl;
var about;
getline(cin, about);
about = "<h3>" + about + "</h3>\n\n\n\n";
(cout << about) << endl;
readme.push(about);
//one line tag ends

// current job section
(cout << " where are you working on") << endl;
var job;
getline(cin, job);
job = "- 👨‍🏭 I’m currently pursuing **" + job + "**\n";
(cout << job) << endl;
readme.push(job);

// current job section ends

//current learning section starts
(cout << " what are you learning nowdays") << endl;
var learn;
getline(cin, learn);
learn = "- 🏫 I’m currently learning **" + learn + "**\n";
(cout << learn) << endl;
readme.push(learn);
//current learning section ends

//current collaborate section starts
(cout << " on what type of projects you want to collaborate") << endl;
var collaborate;
getline(cin, collaborate);
collaborate = "- 🙌 I’m looking to collaborate on**" + collaborate + "**\n";
(cout << collaborate) << endl;
readme.push(collaborate);
//current collaborate section ends

//current help section starts
(cout << " on what type of projects you need help") << endl;
var help;
getline(cin, help);
help = "- 🤔 I’m looking for help with **" + help + "**\n";
(cout << help) << endl;
readme.push(help);
//current help section ends

//current goals section starts
(cout << " What is your goal of 2021") << endl;
var goal;
getline(cin, goal);
goal = "- 🥅 2021 Goals: **" + goal + "**\n";
(cout << goal) << endl;
readme.push(goal);
//current help section ends

//ask me anything starts
(cout << "Where you can help others") << endl;
var ask;
getline(cin, ask);
ask = "- 💬 Ask me about Anything **" + ask + "**\n\n";
(cout << ask) << endl;
readme.push(ask);
// ask me anything ends

// about section ends

//social media section starts
var look = "🕵 Take a look at my repositories and let's get in touch!\n\n";
(cout << look) << endl;
readme.push(look);

// todo
// add linkedin

var linkedinUsername;

cin >> linkedinUsername;
var linkedinBadge =
  "[![Linkedin Badge](https://img.shields.io/badge/-" +
  linkedinUsername +
  "-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/" +
  linkedinUsername +
  "/)](https://www.linkedin.com/in/" +
  linkedinUsername +
  "/) \n";
readme.push(linkedinBadge);
// add facebook
var facebookUsername;
cin >> facebookUsername;
var facebookBadge =
  "[![Facebook Badge](https://img.shields.io/badge/-" +
  facebookUsername +
  "-3b5998?style=flat-square&labelColor=3b5998&logo=facebook&logoColor=white&link=https://www.facebook.com/" +
  facebookUsername +
  ")](https://www.facebook.com/" +
  facebookUsername +
  ")\n ";
readme.push(facebookBadge);
// add instagram
var instagramUsername;
cin >> instagramUsername;
var instagramBadge =
  "[![Instagram Badge](https://img.shields.io/badge/-@" +
  instagramUsername +
  "-E4405F?style=flat-square&logo=instagram&logoColor=white&link=https://www.instagram.com/" +
  instagramUsername +
  ")](https://www.instagram.com/" +
  instagramUsername +
  ") \n";
readme.push(instagramBadge);
// add  twitter
var twitterUsername;
cin >> twitterUsername;
var twitterBadge =
  "[![Twitter Badge](https://img.shields.io/badge/-@" +
  twitterUsername +
  "-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/" +
  twitterUsername +
  ")](https://twitter.com/" +
  twitterUsername +
  ") ";
readme.push(twitterBadge);
// social media section ends
var linegap3 = "\n \n \n";
var linegap5 = "<br><br><br><br><br><br>";
readme.push(linegap3);
readme.push(linegap5);

// language section starts
var languages = "###Languages:" + linegap3;
(cout << languages) << endl;
readme.push(languages);

// language section ends
//github stats section starts
(cout << linegap5) << linegap3;

var githubStats = "### 📈 Github Stats:\n\n\n";
githubStats += '<a href=" https:/';
githubStats += '/github.com/rajivranjanmars">\n';
githubStats +=
  '<img align=" center " src=" https : //github-readme-stats.vercel.app/api?username=rajivranjanmars&show_icons=true&include_all_commits=true&theme=midnight-purple&count_private=true"> \n </a>\n' +
  linegap5;
githubStats +=
  '<a href="https://github.com/remcohalman/github-readme-stats">\n<img align="center" src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=rajivranjanmars&layout=compact&theme=blue-green" />\n</a> \n\n' +
  linegap3 +
  linegap5;
githubStats +=
  "[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=rajivranjanmars)](https://git.io/streak-stats)\n";
(cout << githubStats) << "\n";
readme.push(githubStats);
//githubStats section ends
cout << linegap3;
readmeGenerator(readme);
