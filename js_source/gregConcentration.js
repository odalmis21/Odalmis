var imagesPos=[];
var imagesClick=[];
var stop=false;

function setGame()
{

    var index=1;
    var pos=0;

    var imgElement;
    var count=0;
  
    
    while (count<16)
    {
        imgElement=document.createElement("img"); 

        if(count<8)
        {
        
        imgElement.setAttribute("alt","A"+index);   
        imgElement.setAttribute("src","images/animals/A"+index+".png");
        index++;

        }

        if (count>7)
        {  
        
         pos++;
        imgElement.setAttribute("alt","A"+pos);
        imgElement.setAttribute("src","images/animals/A"+pos+".png");        
  
        }
        imagesPos[count]=imgElement; 
        count++;

    }
    
    imagesPos.sort(function(a, b){return 0.5 - Math.random()});
 
}


function DisplayTable()
{
    setGame(); 
    var divCard;
    var divBack;var divFront; var imgElement;
    
    var tdNodes=document.getElementsByClassName("divTableCell");
    
    for (var i=0;i<tdNodes.length;i++)
    {
     
    divCard=document.createElement("div");
    divCard.setAttribute("class","card");
    
    divBack=document.createElement("div");
    divFront=document.createElement("div");
    
    divBack.setAttribute("class","back");
    divFront.setAttribute("class","front");
        
    divFront.onclick=function(){clickCard(this)};
    imgElement=document.createElement("img");
    imgElement.setAttribute("src","images/animals/greenBack.png");

      
    divFront.appendChild(imgElement);
   
    imgElement=imagesPos[i];
        
    divBack.appendChild(imgElement);
    divCard.appendChild(divFront);
    divCard.setAttribute("id",i);
        divCard.style.cursor="pointer";
    divCard.appendChild(divBack);
    tdNodes[i].appendChild(divCard);
                
    }
    
    countdown("time",1,10);
     

    }


function RemoveElement(ele1,ele2)
{

var counter=0; var divcell; 
while (ele1.hasChildNodes())
 ele1.removeChild(ele1.firstChild);

    while (ele2.hasChildNodes())
   ele2.removeChild(ele2.firstChild);
    
     
 var cellNodes=document.getElementsByClassName("divTableCell");
    for(var i=0;i<cellNodes.length;i++)
        {
      
     divcell=cellNodes[i];
    if (divcell.hasChildNodes())
    counter++;
                    
                }
            
      
    
    if (counter==0 && stop==false){
        DisplayResults("Congratulations!!  You did it!!",true);
        stop=true;
    }

}




function DecreaseTries()
{
document.getElementById("tries").value--;  
 var valueTries=document.getElementById("tries").value;       
           if ( valueTries==0)
               {
                     stop=true;
                   setTimeout(function(){DisplayResults("Sorry ,You've reached the maximum number of tries.",false)},1000);
                 
                }
}




function DisplayResults(content,winer)
{
   
    var container=document.getElementById("content_match_Table");
    container.style.marginLeft="0";
    var msg=document.createElement("p");
    msg.setAttribute("class","msgContent");
    msg.innerHTML=content;
    var imgmsg=document.createElement("img");
    imgmsg.setAttribute("class","msg");
    if (winer)
        imgmsg.setAttribute("src","images/winner.png");
    else
        imgmsg.setAttribute("src","images/gameover.png");
    
    
while (container.hasChildNodes()) 
{   
 container.removeChild(container.firstChild);
}   
    
 container.appendChild(imgmsg);
    container.appendChild(msg);
 
    
    
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
       if(stop)
           return;
        
        
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
               element.style.color="red";
            element.value = 0;
         DisplayResults("Sorry, you've run out of time",false);

            
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.value = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}


function clickCard(divFront)
{
 var card1Id=""; var card2Id="";
    var divBack;var divCell1;var divCell2;
    var divCard1; var divCard2;
    
    divCard1=divFront.parentNode;
    var id=divCard1.id;
    flipCard(id);
    
    var divBack=divFront.nextElementSibling;
    var imgElement=divBack.firstChild;
  
   
    
    imagesClick.push(imgElement);
    if (imagesClick.length==2)
        {
            
          card1Id=imagesClick[0].alt;
          card2Id=imagesClick[1].alt;
            
           divBack=imagesClick[0].parentNode;
            
            divCard1=divBack.parentNode;
            divCell1=divCard1.parentNode;
            
            
            divBack=imagesClick[1].parentNode;
            divCard2=divBack.parentNode;
            divCell2=divCard2.parentNode; 
            if (card1Id==card2Id)
            {
              
           window.setTimeout(function(){ RemoveElement(divCell1, divCell2);},1000);
   
               
            }
            else
                {
          
          card1Id=divCard1.id;
          card2Id=divCard2.id;            
            setTimeout(function(){ UnflipCards(card1Id, card2Id);},1000);
            setTimeout(DecreaseTries,1000);
             
        
        }
    
        imagesClick=[]; 
}

 
}

function ResetGame()
{
  window.location.reload();  
    
}

