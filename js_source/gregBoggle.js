var SelectedWords=[];
var dictionary=[];
var PlayerWords=[];

function GetBoggleLetters()
{
var counter=0;
    var number=0;
    var i=0;
    var boggleLetters=[];
    var listLetters=['A','B','C','D','E','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','X','Y','Z'];
    while (counter<10)
        {
            i=0;
          number=Math.floor(Math.random()* 26); 
            if (boggleLetters.length==0)
          boggleLetters.push(listLetters[number]) ; 
            else
                {
                  
                   while (i<boggleLetters.length)
                        {
                            
                          if (listLetters[number]==boggleLetters[i])
                              {
                                number=Math.floor(Math.random()* 26); 
                                  i=0;
                              }
                            else
                                i++;
                        }
                    
                    
                    boggleLetters.push(listLetters[number]) ; 
     
                    
                }
         
          counter++;  
        }
    
    return boggleLetters;
}

function getWords(){  
  
 var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "files/dictionary.txt", false);
  xhttp.send();
   var lines=xhttp.responseText;
    intoArray(lines);
  
} 
       
function intoArray (lines) {

 dictionary=lines.split('\n'); 
  }




function GenerateDictionary()
{
    var word="";
    var letter='';
    var temp=false;
    SelectedWords=[];
  var  boggleLetters=GetBoggleLetters();
   getWords();
    
    for (var i=0; i<dictionary.length;i++)
        {
          word=dictionary[i];
            
            for (var j=0;j<word.length;j++)
                {
                  letter=word.charAt(j);
                    
                 for (var k=0;k<boggleLetters.length;k++)
                     {
                       if (letter==boggleLetters[k].toLowerCase())  
                           {
                           temp=true;  
                               break;
                           }
                        else
                            temp=false;
                     }
                    if (temp==false)
                      {
                          break;
                      
                      }
                   
                }
            if (temp==true)
                SelectedWords.push(word);    
                    
           
            
        }
    return boggleLetters;
}




function DisplayLetters()
{
    var boggleLetters=[];
    var elemTable,elemTr,elemTd;
    var ImageLetters=[];
    var imgElement;
    var index=0;
    
boggleLetters=GenerateDictionary();
    
while (SelectedWords.length<10)

 boggleLetters=GenerateDictionary();  
    
for (var i=0;i<boggleLetters.length;i++)
    {
      imgElement =document.createElement("img");  
      imgElement.setAttribute("src","images/letters/"+boggleLetters[i]+".png");
        imgElement.setAttribute("id",boggleLetters[i]);
         imgElement.onclick=function(){HitLetter(this)};
      ImageLetters.push(imgElement);          
        
    }
    
    
    
    
 var container=document.getElementById("boggle_table");
 var elementTimer=document.createElement("div");
  elementTimer.setAttribute("id","timer"); 
  
    elementTimer.style.width="100px;"
    elementTimer.style.background="white";
    
   

    while (container.hasChildNodes()) 
    {   
     container.removeChild(container.firstChild);

    }   
     container.appendChild(elementTimer);
    
    countdown("timer",5,0);
        
     elemTable=document.createElement("table");
     elemTable.setAttribute("id","tboggle");
     
    for (var i=0;i<3;i++)
        {
          elemTr=document.createElement("tr");  
          elemTable.appendChild(elemTr);
            
        for (var j=0;j<3;j++)
            {
                elemTd=document.createElement("td"); 
                elemTd.setAttribute("id","td"+index);  
                elemTd.style.width="auto"; 
                elemTd.style.cursor="pointer";
                  
                elemTd.appendChild(ImageLetters[index]);    
                elemTr.appendChild(elemTd);  
                index++;
                
            }
            
        }
    
        container.appendChild(elemTable);
    
    
    
    

}


function HitLetter(elementImg)
{
    var id=elementImg.id;
    var elementInput=document.getElementById("word");
    elementInput.value+=id;
    
    
}

function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
               element.style.color="red";
            element.innerHTML = "Time's over!";
            EndGame();

            
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}


function deleteInput()
{
var elementInput=document.getElementById("word");
elementInput.value="";    
    
}

function addWord()
{

 var elementInput=document.getElementById("word");
 var elementTextArea=document.getElementById("textWords");
    elementTextArea.value+=elementInput.value+"\n";
    
    PlayerWords.push(elementInput.value.toLowerCase());
     elementInput.value="";
}


function EndGame()
{
   var TotalWords=SelectedWords.length;
    

 

    var ListCorrectWords=[];
    var percent=0;
    
    if (PlayerWords.length>0){
        
         for (var j=0; j<PlayerWords.length;j++)
 
        {
              
            for (var i=0;i<TotalWords;i++)
                {
                    
                    if (PlayerWords[j]==SelectedWords[i])
                        {
                            ListCorrectWords.push(PlayerWords[j]);
                    
                             break;
                        }
                    
                }
            
        }
    
        for (var i=0;i<ListCorrectWords.length;i++)
            {
                
         for (var j=0; j<PlayerWords.length;j++)
             {
               if (ListCorrectWords[i]==PlayerWords[j])   
                   {
                       
                       PlayerWords.splice(j,1);
                   }
                 
             }
                
            }
    if (ListCorrectWords.length>0)
    percent=((ListCorrectWords.length * 100 ) /TotalWords).toFixed(2);
         
    }
    
       DisplayResults(percent);

        

    
}


function DisplayResults(percent)
{
    
  var elemResults=document.createElement("div");
  elemResults.setAttribute("id","BoggleResults");
  
 var boogleElement=document.getElementById("boggle_table");
 boogleElement.style.display="none";
    
 var container=document.getElementById("content_boggle");
    
 
    
    container.appendChild(elemResults);
  
    var elemp=document.createElement("p");
    
    elemp.style.fontSize="2em";
    
    elemp.innerHTML="You guessed "+percent+"% of all possible words.<br>";
    
    elemp.innerHTML+="Possible word amount: "+SelectedWords.length+"<br>";
   
    if (PlayerWords.length>0)
    {
        
     
   elemp.innerHTML+="You have "+PlayerWords.length+" incorrect words<br>";

       
     elemp.innerHTML+=" Your incorrect words are:<br>";
     for (var j=0; j<PlayerWords.length;j++)
             elemp.innerHTML+= PlayerWords[j]+"<br>";  
             
             
      
        
    }
    
    if (percent==0)
      elemp.innerHTML="Sorry ,You Lost" ; 
    
    elemResults.appendChild(elemp);
    
}
    
    



function ResetGame()
{
  window.location.reload();  
    
}


