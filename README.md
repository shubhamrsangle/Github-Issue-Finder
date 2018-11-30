# Github-Issue-Finder
This is like search engine, where you just have to copy pate your bug in search box and all related issues and their status will appear on your screen.
Github Plugin folder should contain:
1:dict.json
2:github.png
3:landing.html
4:index.html
4:Manifest.json
5:Searching.js
6:Many js files
7:Many css files
8:Some Images

All codes are seprately submitted and also submitted as compressed folder.

For Backend purpose Python codeas are used which manipulates .json files that codes are a,so attached.

Basically Idea is (Not implemented tilll now as we still dont know how to work on servers exactly : (

1:Python code Github.py will be running in Backend which will generate all issues
2:Then same code also will generate keywords and will convert to json file and will use it;
3:Plugin will use .json file from server to evaluate links of similar issues.

How to Run:

1:extract Gitbug-Plugin and add it as extension.
2:As of now Backend codeas are just submitted but not handling any server sides so you can run code on machine.


To run Python codes:

1:You need to install selenium in your system
2:You need to nstall chromewebdriver in your system.
3:Put your github id and password in github.py file and run it.

For Better UI please do open it as extension instead of opening directly.

Specials:
UI made with AnimeJS and ParticlesJS
28000 lines of database
Information about issue in addition to the GitHub repo link
Database included using external JSON files

