from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium import webdriver
from time import sleep
from getpass import getpass
import time
import sys
from selenium.webdriver.support import expected_conditions as EC
from collections import defaultdict as dd
import json
url='https://github.com/login'
repo=[]
all_issue=[]

def stopwords():
    f=open('stopwords.txt','r')
    data=f.read().replace("\n",' ').strip().split(' ')
    f.close()
    return data
dic=dd(list)
data=stopwords()
def process(bug,link,info2,additional,status):
    bug=bug.lower()
    bug=bug.replace("doesn't","does not")
    bug=bug.replace("can't","cannot")
    bug=bug.replace("won't","would not")
    bug=bug.replace("don't","do not")
    bug=bug.replace("i've","i have")
    bug=bug.replace("i'd","i had")
    bug=bug.replace("i'm","i am")
    bug=bug.replace("i'll","i will")
    bug=bug.replace("she's","she is")
    bug=bug.replace("he's","he is")
    bug=bug.replace("it's","it is")
    bug=bug.replace("there's","there is")
    bug=bug.replace("they're","they are")
    bug=bug.replace("we're","we are")
    bug=bug.replace("you're","you are")
    bug=bug.replace("couldn't","could not")
    bug=bug.replace("shouldn't","should not")
    bug=bug.replace("wouldn't","would not")
    bug=bug.replace("b'coz","because")
    bug=bug.replace("ain't","am not")
    bug=bug.replace("wasn't","was not")
    bug=bug.replace("isn't","is not")
    bug=bug.replace('.',' ')
    bug=bug.replace(',',' ')
    bug=bug.replace('!',' ')
    bug=bug.replace(';',' ')
    bug=bug.replace('"',' ')
    bug=bug.replace('+',' ')
    bug=bug.replace('-',' ')
    bug=bug.replace('&',' ')
    bug=bug.replace('$',' ')
    bug=bug.replace("'",' ')
    bug=bug.replace("@",' ')
    bugarray=bug.split(' ')
    words=[]
    for w in bugarray:
        if w in data:
            continue
        else:
            words.append(w)
    for j in words:
        if len(j)>2:
            trm=[]
            trm.append(link)
            trm.append(info2)
            trm.append(additional)
            trm.append(status)
            dic[j].append(trm)
def print_data(all_issue):
    size=len(all_issue)
    store={}
    for index in range(0,size):
        store=all_issue[index]
        f.write('\n'+store["name"]+'\n')
        f.write(store["link"]+'\n')
        f.write(store["status"]+'\n')
        
        additional=''
        try:
            driver.get(store["link"])
            info1=driver.find_elements_by_class_name('comment-body')
            info2=str(info1[0].text)
            add1=driver.find_elements_by_class_name('TableObject-item--primary')
            additional=str(add1[0].text)
            #print(info2,"Open")
            all_issue[index]["info"]=info2
            f.write(info2+'\n')
        except:
            #print("Mistake")
            info2=''
            all_issue[index]["info"]=''
            f.write('\n')
        f.write(additional+'\n')
        process(store["name"],store["link"],info2,additional,store["status"])
            
def login(driver,usr,pwd):                          
    driver.get(url)
    print ("Opened github")
    sleep(1)
    username_box = driver.find_element_by_id('login_field')
    username_box.send_keys(usr)
    print ("Email Id entered")
    sleep(1)
    password_box = driver.find_element_by_id('password')
    password_box.send_keys(pwd)
    print ("Password entered")
    login_box = driver.find_element_by_class_name('btn-block')
    login_box.click()
    sleep(3)
def extract_repo(driver):
    reposit=driver.find_elements_by_class_name('v-align-middle')
    for i in range(0,len(reposit)):
        repo.append(reposit[i].get_attribute('href'))
def visit_open(driver):
    for j in repo:
        try:
            issues={}
            driver.get(j+'/issues?q=is%3Aopen+is%3Aissue')    
        except:
            continue
        issu=driver.find_elements_by_class_name('v-align-middle')
        for k in issu:
            issues={}
            issues["name"]=str(k.text)
            issues["link"]=str(k.get_attribute('href'))
            issues["status"]="Unsolved"
            all_issue.append(issues)
def visit_closed(driver):
    for j in repo:
        try:
            issues={}
            driver.get(j+'/issues?q=is%3Aissue+is%3Aclosed')    
        except:
            continue
        issu=driver.find_elements_by_class_name('v-align-middle')
        for k in issu:
            issues={}
            issues["name"]=str(k.text)
            issues["link"]=str(k.get_attribute('href'))
            issues["status"]="Solved"
            all_issue.append(issues)            
options = Options()
options.add_argument("--disable-notifications") 
driver = webdriver.Chrome(r"C:\Users\Shubham\Downloads\chromedriver.exe",chrome_options=options)
f=open("github.txt",'w',encoding="utf-8")
usr="shubham.rsangle@gmail.com"
pwd =""
login(driver,usr,pwd)
url='https://github.com/'
search="software engineering"
num_pages=25
sear=search.split(' ')
search_url=''
for j in sear:
    search_url+=j+'+'
search_url=search_url[:-1]
print(search_url)

for z in range(1,num_pages+1):
    driver.get(url+'search?p='+str(z)+'&q='+search_url+'&type=Repositories')
    print("Item searched")
    extract_repo(driver)
visit_open(driver)
visit_closed(driver)
print_data(all_issue)
f.close()

json=json.dumps(dic)
f=open("dict.json","w")
f.write(json)
f.close()
