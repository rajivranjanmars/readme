#include <iostream>
#include <string>
#include <vector>
#include <conio.h>
using namespace std;

void readmeGenerator(vector<string>readme){
   for(int i=0;i<readme.size();i++) {
      cout << readme[i] << endl;
   }
}

int main(){
                 
   ios_base::sync_with_stdio(false);
cin.tie(NULL);               
            vector<string>readme;  
           
            //name section starts
     cout << "What is your name" << endl;
        string name;
        getline(cin, name);
        string nameline = "### Hi ,I Am " + name + " <img src=\" https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif\" width=\"30px\"> \n \n" ;   // i have to add link

       cout<< nameline;

        readme.push_back(nameline);
        // name section ends

        

      // add profile views section starts
        string githubUserName;
        cout << "please enter your github username" << endl;
        cin >> githubUserName;
        string profileLinks = "![](https://komarev.com/ghpvc/?username="+githubUserName+ "&color=blue)\n";
         cout << profileLinks;
         readme.push_back(profileLinks);
      // add profile views section ends

      // about section starts

      //one line tag starts
      cout<< " Tell me somthing about you in one line" << endl;
        string about;
        getline(cin, about);
        about = "<h3>" + about + "</h3>\n\n\n\n";
        cout << about << endl;
        readme.push_back(about);
        //one line tag ends

        // current job section
        cout << " where are you working on" << endl;
        string job;
        getline(cin, job);
        job = "- 👨‍🏭 I’m currently pursuing **" + job + "**\n";
        cout << job << endl;
        readme.push_back(job);

        // current job section ends

        //current learning section starts
        cout << " what are you learning nowdays" << endl;
        string learn;
        getline(cin, learn);
        learn = "- 🏫 I’m currently learning **" + learn + "**\n";
        cout << learn << endl;
        readme.push_back(learn);
        //current learning section ends

        //current collaborate section starts
        cout << " on what type of projects you want to collaborate" << endl;
        string collaborate;
        getline(cin, collaborate);
        collaborate = "- 🙌 I’m looking to collaborate on**" + collaborate + "**\n";
        cout << collaborate << endl;
        readme.push_back(collaborate);
        //current collaborate section ends

        //current help section starts
        cout << " on what type of projects you need help" << endl;
        string help;
        getline(cin, help);
        help = "- 🤔 I’m looking for help with **" + help + "**\n";
        cout << help << endl;
        readme.push_back(help);
        //current help section ends

        //current goals section starts
        cout << " What is your goal of 2021" << endl;
        string goal;
        getline(cin, goal);
        goal = "- 🥅 2021 Goals: **" + goal + "**\n";
        cout << goal << endl;
        readme.push_back(goal);
        //current help section ends

        //ask me anything starts
        cout << "Where you can help others" << endl;
        string ask;
        getline(cin, ask);
        ask = "- 💬 Ask me about Anything **" + ask + "**\n\n";
        cout << ask << endl;
        readme.push_back(ask);
        // ask me anything ends

        // about section ends

        //social media section starts
        string look = "🕵 Take a look at my repositories and let's get in touch!\n\n";
        cout << look << endl;
        readme.push_back(look);

        // todo
        // add linkedin 

         string linkedinUsername;
         
         cin >> linkedinUsername;
         string linkedinBadge = "[![Linkedin Badge](https://img.shields.io/badge/-" + linkedinUsername + "-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/" + linkedinUsername + "/)](https://www.linkedin.com/in/" + linkedinUsername + "/) \n";
         readme.push_back( linkedinBadge);
         // add facebook
         string facebookUsername;
         cin >> facebookUsername;
         string facebookBadge = "[![Facebook Badge](https://img.shields.io/badge/-" + facebookUsername + "-3b5998?style=flat-square&labelColor=3b5998&logo=facebook&logoColor=white&link=https://www.facebook.com/" + facebookUsername + ")](https://www.facebook.com/" + facebookUsername + ")\n ";
         readme.push_back(facebookBadge);
         // add instagram
         string instagramUsername;
         cin >> instagramUsername;
         string instagramBadge = "[![Instagram Badge](https://img.shields.io/badge/-@" + instagramUsername + "-E4405F?style=flat-square&logo=instagram&logoColor=white&link=https://www.instagram.com/" + instagramUsername + ")](https://www.instagram.com/" + instagramUsername + ") \n";
         readme.push_back(instagramBadge);
         // add  twitter
         string twitterUsername;
         cin >> twitterUsername;
         string twitterBadge = "[![Twitter Badge](https://img.shields.io/badge/-@" + twitterUsername + "-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/" + twitterUsername + ")](https://twitter.com/" + twitterUsername + ") ";
         readme.push_back(twitterBadge);
         // social media section ends
         string linegap3 = "\n \n \n";
         string linegap5 = "<br><br><br><br><br><br>";
         readme.push_back(linegap3);
         readme.push_back(linegap5);



         // language section starts
         string languages = "###Languages:" + linegap3;
         cout << languages << endl;
         readme.push_back(languages);

         // language section ends
         //github stats section starts
         cout<< linegap5 << linegap3;

         string githubStats = "### 📈 Github Stats:\n\n\n";
         githubStats += "<a href=\" https:/";
         githubStats+= "/github.com/rajivranjanmars\">\n";
         githubStats += "<img align=\" center \" src=\" https : //github-readme-stats.vercel.app/api?username=rajivranjanmars&show_icons=true&include_all_commits=true&theme=midnight-purple&count_private=true\"> \n </a>\n" +linegap5;
         githubStats +="<a href=\"https://github.com/remcohalman/github-readme-stats\">\n<img align=\"center\" src=\"https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=rajivranjanmars&layout=compact&theme=blue-green\" />\n</a> \n\n"+linegap3+linegap5;
         githubStats += "[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=rajivranjanmars)](https://git.io/streak-stats)\n";
         cout << githubStats << "\n";
         readme.push_back(githubStats);
         //githubStats section ends

            cout << linegap3 ;
         readmeGenerator(readme);
         return 0;
}