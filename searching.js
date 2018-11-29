



window.onload = function(){
  var popupWidth = 800;  // default width of popup in px
  var animationDelay = 250;  // wait time for popup animation to complete
  d=document;
  var button = d.getElementById('myButton');
  button.onclick = function() {
      return issues1();
  };
  setTimeout(function(){
    var popupHTML = document.getElementById('info');
    var rawHeight = parseInt(popupHTML.offsetHeight) + 400;

    document.body.style.minWidth = popupWidth + 'px';
    document.body.style.minHeight = rawHeight + 'px';
    window.scroll(0,0);
  }, animationDelay);
};

function issues1(){
  d=document;

  var f=d.getElementById("info");
  //alert(f.value);
  bug=f.value;
  //d.getElementById('display').textContent=f.value;
  d.getElementById('display').innerHTML='';

  process(bug);

  return false;
  
}
function process(bug){
	//alert(bug);

	var bug=bug.toLowerCase();
    var bug=bug.replace("doesn't","does not");
    var bug=bug.replace("can't","cannot");
    var bug=bug.replace("won't","would not");
    var bug=bug.replace("don't","do not");
    var bug=bug.replace("i've","i have");
    var bug=bug.replace("i'd","i had");
    var bug=bug.replace("i'm","i am");
    var bug=bug.replace("i'll","i will");
    var bug=bug.replace("she's","she is");
    var bug=bug.replace("he's","he is");
    var bug=bug.replace("it's","it is");
    var bug=bug.replace("there's","there is");
    var bug=bug.replace("they're","they are");
    var bug=bug.replace("we're","we are");
    var bug=bug.replace("you're","you are");
    var bug=bug.replace("couldn't","could not");
    var bug=bug.replace("shouldn't","should not");
    var bug=bug.replace("wouldn't","would not");
    var bug=bug.replace("b'coz","because");
    var bug=bug.replace("ain't","am not");
    var bug=bug.replace("wasn't","was not");
    var bug=bug.replace("isn't","is not");
    var bug=bug.replace('.',' ');
    var bug=bug.replace(',',' ');
    var bug=bug.replace('!',' ');
    var bug=bug.replace(';',' ');
    var bug=bug.replace('"',' ');
    var bug=bug.replace('+',' ');
    var bug=bug.replace('-',' ');
    var bug=bug.replace('&',' ');
    var bug=bug.replace('$',' ');
    var bug=bug.replace("'",' ');
    var bug=bug.replace("@",' ');
    //alert(bug);
    var stopwords=['a','would','not','should','does', 'the', 'an', 'inward', 'next', 'seeing', 'maybe', 'particular', 'too', 'lest', 'thus', 'ie', 'across', 'whos', 'indicates', 'one', 'containing', 'this', 'said', 'other', 'being', 'anyway', 'wonder', 'please', 'even', 'use', 'right', 'i', 'furthermore', 'five', 'second', 'accordingly', 'described', 'off', 'alone', 'hence', 'over', 'could', 'but', 'whereby', 'gets', 'further', 'indicate', 'far', 'keeps', 'youre', 'example', 'particularly', 'regards', 'wants', 'youll', 'self', 'therefore', 'nearly', 'ourselves', 'contains', 'them', 'neither', 'we', 'following', 'perhaps', 'vs', 'whether', 'something', 'what', 'everywhere', 'so', 'every', 'anyhow', 'allows', 'why', 'unto', 'herself', 'nd', 'same', 'himself', 'usually', 'own', 'contain', 'any', 'eight', 'ours', 'some', 'amongst', 'fifth', 'say', 'each', 'all', 'again', 'whats', 'were', 'theirs', 'her', 'our', 'im', 'away', 'quite', 'tends', 'hereupon', 'thank', 'saying', 'on', 'instead', 'was', 'whoever', 'by', 'likely', 'down', 'sure', 'where', 'yours', 'among', 'that', 'can', 'you', 'they', 'may', 'anybody', 'lets', 'how', 'soon', 'hers', 'getting', 'name', 'did', 'youve', 'especially', 'six', 'somehow', 'his', 'if', 'at', 'rather', 'thoroughly', 'think', 'able', 'and', 'unless', 'onto', 'beside', 'others', 'howbeit', 'namely', 'consequently', 'us', 'behind', 'into', 'up', 'regarding', 'ask', 'well', 'former', 'looks', 'beforehand', 'appear', 'latter', 'inc', 'ones', 'has', 'welcome', 'now', 'get', 'whereas', 'often', 'therein', 'respectively', 'because', 'everyone', 'here', 'whose', 'used', 'between', 'first', 'everybody', 'obviously', 'certainly', 'myself', 'your', 'associated', 'concerning', 'somewhat', 'under', 'etc', 'wherever', 'lately', 'want', 'came', 'ill', 'zero', 'thanx', 'since', 'know', 'anyone', 'themselves', 'to', 'few', 're', 'theres', 'having', 'cause', 'let', 'afterwards', 'cmon', 'seemed', 'gotten', 'hi', 'hereby', 'seven', 'ok', 'seen', 'plus', 'sometimes', 'thru', 'as', 'while', 'downwards', 'probably', 'believe', 'thereby', 'are', 'id', 'noone', 'besides', 'of', 'indeed', 'theyll', 'insofar', 'corresponding', 'causes', 'nobody', 'also', 'trying', 'thereupon', 'many', 'whither', 'hopefully', 'sensible', 'third', 'specify', 'it', 'latterly', 'sup', 'whereupon', 'asking', 'hither', 'yourself', 'known', 'around', 'actually', 'meanwhile', 'along', 'would', 'with', 'thence', 'saw', 'those', 'goes', 'need', 'these', 'ex', 'normally', 'outside', 'come', 'oh', 'th', 'someone', 'nevertheless', 'tried', 'several', 'given', 'else', 'immediate', 'edu', 'never', 'looking', 'overall', 'twice', 'towards', 'et', 'via', 'needs', 'ought', 'always', 'nine', 'taken', 'qv', 'might', 'un', 'do', 'both', 'however', 'says', 'sometime', 'happens', 'hereafter', 'though', 'inner', 'whence', 'keep', 'wheres', 'before', 'changes', 'heres', 'really', 'still', 'me', 'going', 'uses', 'got', 'inasmuch', 'throughout', 'does', 'eg', 'comes', 'together', 'another', 'considering', 'seem', 'than', 'been', 'doing', 'followed', 'during', 'elsewhere', 'except', 'above', 'whereafter', 'whom', 'allow', 'gives', 'either', 'rd', 'after', 'although', 'nowhere', 'my', 'hello', 'theyre', 'new', 'itd', 'yourselves', 'little', 'later', 'kept', 'regardless', 'brief', 'appropriate', 'tries', 'youd', 'somebody', 'viz', 'way', 'course', 'according', 'try', 'entirely', 'became', 'below', 'ive', 'becoming', 'becomes', 'useful', 'aside', 'upon', 'took', 'done', 'him', 'until', 'thats', 'per', 'somewhere', 'follows', 'near', 'there', 'last', 'theyd', 'three', 'clearly', 'become', 'yes', 'within', 'reasonably', 'only', 'ltd', 'otherwise', 'almost', 'theyve', 'itll', 'beyond', 'greetings', 'consider', 'various', 'com', 'presumably', 'help', 'whenever', 'much', 'specified', 'out', 'placed', 'indicated', 'thereafter', 'such', 'selves', 'anywhere', 'mean', 'novel', 'truly', 'hes', 'wherein', 'when', 'co', 'their', 'be', 'or', 'the', 'already', 'shall', 'currently', 'specifying', 'gone', 'who', 'despite', 'ever', 'four', 'thorough', 'see', 'just', 'will', 'go', 'sent', 'should', 'then', 'cs', 'seeming', 'itself', 'take', 'willing', 'thanks', 'exactly', 'unlikely', 'weve', 'through', 'tell', 'he', 'for', 'from', 'value', 'necessary', 'seems', 'anyways', 'knows', 'whole', 'using', 'que', 'its', 'an', 'provides', 'forth', 'two', 'which', 'okay', 'available', 'formerly', 'look', 'ts', 'nor', 'she', 'about', 'once', 'toward', 'sub', 'unfortunately', 'everything', 'secondly', 'herein', 'certain', 'anything', 'in', 'yet', 'apart', 'whatever', 'is', 'went', 'am'];
    var bugarray=bug.split(' ');
    var words = [];
    //console.log(bugarray);
    for(w in bugarray)
    {

    	if(bugarray[w] in stopwords)
    	{

    		continue;
    	}
    	else
    	{
    		words.push(bugarray[w]);
    		//console.log(words);

    	}
    }
    for(j in words){
    	//console.log(dict[words[j]]);
    	var c = 0;
    	d =document;
    	console.log(d);
    	for(k in dict[words[j]]){
    		c++;
		d.getElementById('display').innerHTML+='<br>'+ c + '. ' +'<a target="_blank" href = ' + dict[words[j]][k][0] + '>' + dict[words[j]][k][0] + '</a>'
												+ '<br>'+ '<h6 class="class5">' + dict[words[j]][k][3] + '</h6>' 
												+ '<h6 class="class6">' + dict[words[j]][k][2] + '</h6>'
												+ dict[words[j]][k][1]+'<br>'+'<br>';
		console.log(dict[words[j]][k][0]);
		
	}
    }
}
