 var UTotalGame=0;  
    var DTotalGame=0; 
  


function Getcards()
{
    var ListImages=[];
    ListImages.push("11.png");
    for (var i=1;i<10 ;i++)
    {
    ListImages[i]=i+1+".png";   
    }
    ListImages.push("J.png","Q.png","K.png");   

    return ListImages;
}




function SetGame()
{
   var listcards=Getcards();
   var Dlistnumbers=[]; var Ulistnumbers=[];
   var num=0; var card=""; var utotal=0; var dtotal=0;
   var j=1;
    
   while (j<3)
   {
     num=(Math.floor(Math.random() * 13)) + 1;
     card=listcards[num-1];
     if (card=="Q.png" ||  card=="J.png" ||  card=="K.png" )
         {
             dtotal+=10;
         }
       else
          {
              dtotal+=parseInt(card.substr(0,card.length-4));
          }
     Dlistnumbers.push(card);

     num=(Math.floor(Math.random() * 13)) + 1;
     card=listcards[num-1];
     Ulistnumbers.push(card);
     j++;
   }
   utotal=DisplayUserCards(Ulistnumbers);
    
    if (utotal>21 || dtotal>21 )
        {
    var container=document.getElementById("DynamicContent");
    var element = document.createElement("img");
    SetImageMSG(element);
    element.onclick=function()
    {
   
      MsgonClick(0);  
         
    }   
    
    if (utotal>21 && dtotal<=21 )
        {
        element.src="images/lostround.png";  
        DTotalGame+=dtotal;
        document.getElementById("DtotalGame").innerHTML=DTotalGame;
        DislayDealerCards(Dlistnumbers);   
        }
    else
        if (dtotal>21 && utotal<=21)
                {
                     element.src="images/winround.png";  
                     UTotalGame+=utotal;
                     document.getElementById("UtotalGame").innerHTML=UTotalGame;
           
                }
            else{
              element.src="images/noONE.png";       
            }
          
             container.appendChild(element); 
        }
    
    
    
    

   var list=[Ulistnumbers,Dlistnumbers];

   return list;

}

        
        
function DisplayUserCards(ListUserCard)
{
    var elementImages=document.getElementById("table_user");
    while (elementImages.hasChildNodes()) 
    {   
    elementImages.removeChild(elementImages.firstChild);

    }

    var TotalElement=document.createElement("p");
    TotalElement.setAttribute("id","Utotal");

    elementImages.appendChild(TotalElement);

    var utotal=0;
    for(var k=0;k<ListUserCard .length;k++)
    {
    var element = document.createElement("img");
    element.src="images/"+ListUserCard[k];   

    element.setAttribute("class", "clear");       
    elementImages.appendChild(element);

    var cardNumber=ListUserCard[k].substring(0, ListUserCard[k].length-4);
    if (cardNumber=="Q" ||  cardNumber=="J" ||  cardNumber=="K" )
    { 
        utotal+=10;
    } 
        else

   {
    utotal+=parseInt(cardNumber);
    }  
    }
    TotalElement.innerHTML="Total/Round: "+utotal; 
    return utotal;
}


function DislayDealerCards(listDealercards)
{
    var elementImages=document.getElementById("table_dealer");
   
    
    
   while (elementImages.hasChildNodes()) 
    {   
    elementImages.removeChild(elementImages.firstChild);

    } 
    
     var TotalElement=document.createElement("p");
    TotalElement.setAttribute("id","Dtotal");
     elementImages.appendChild(TotalElement);
     var dTotal=0; 
    var nameID="img";
    var number=0;
    for(var i=0;i<listDealercards.length;i++)
    {
       number=i+1;
        nameID=nameID+number;
        var element = document.createElement("img");
        element.src="images/"+listDealercards[i];   
         element.setAttribute("id",nameID);
        
        element.setAttribute("class", "clear");       
        elementImages.appendChild(element);  
        nameID="img";

        var cardNumber=listDealercards[i].substring(0, listDealercards[i].length-4);
        if (cardNumber=="Q" ||  cardNumber=="J" ||  cardNumber=="K" )
        { dTotal+=10;} else

        if   (cardNumber=="11") 
        dTotal+=11;
        else
        dTotal+=parseInt(cardNumber);
    }  
   
    TotalElement.innerHTML="Total/Round: "+dTotal; 
    return dTotal;
}
    
    



function EndRound()
{
    ListDealerCards=start_list[1];
    var Dtotal=DislayDealerCards(ListDealerCards);
    var Utotal=DisplayUserCards(start_list[0]);
    var flag=0;
    var container=document.getElementById("table_dealer");
    var element = document.createElement("img");
    SetImageMSG(element);
    element.onclick=function()
    {
   
      MsgonClick(container,element,flag);  
         
    } 
    
        if (Dtotal!=Utotal)
        {
            if (Dtotal<Utotal)
            {
      
            UTotalGame+=Utotal;
            document.getElementById("UtotalGame").innerHTML=UTotalGame; 
           
                
            if (UTotalGame>=200)
                {
              element.src="images/winner.png"; 
           flag=1;
                }
            else
             element.src="images/winround.png";  
            }
            else{

            DTotalGame+=Dtotal;
            document.getElementById("DtotalGame").innerHTML=DTotalGame;
            
            if (DTotalGame>=200)
                {
             element.src="images/gameover.png";  
           flag=1;
                }
                else
            element.src="images/lostround.png";        
                         
            }
        }
        else
            {
                  element.src="images/TIE.png";    
            }
    
    
   
        container.appendChild(element);
 
}
        
        function SetImageMSG(element)
        {
           
     
                
            element.style.zIndex="1";  
            element.style.cursor="pointer"; 
         
            element.style.width="40%";
            element.style.marginBottom="2%";
             element.style.marginTop="2%";
                    element.style.marginLeft="15%";
            element.style.display="inline";
            element.style.height="auto";
              
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
          

             
            
           
        
  
           
        }
        
        
        
        
 function MsgonClick(flag)
        {
            

            
          

    start_list=SetGame();
    var elementImages=document.getElementById("table_dealer");
   
   while (elementImages.hasChildNodes()) 
    {   
    elementImages.removeChild(elementImages.firstChild);

    } 
            
    var TotalElement=document.createElement("p");
    TotalElement.setAttribute("id","Dtotal");
    TotalElement.innerHTML="Total/Round: ?";    
    elementImages.appendChild(TotalElement);
    var name="elementcard";
    for(var i=0;i<2;i++)
    {
        window[name+i]=document.createElement("img");
        window[name+i].setAttribute("class","clear");
        window[name+i].src="images/cardback.jpg";
        elementImages.appendChild(window[name+i]);            
    } 
            
             if (flag==1)
                {
               DTotalGame=0;
               UTotalGame=0;
               document.getElementById("DtotalGame").innerHTML=DTotalGame;
              document.getElementById("UtotalGame").innerHTML=UTotalGame;
                }
      
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        }



function AddCard()
{
    var listcards=Getcards(); 
    var num=(Math.floor(Math.random() * 13)) + 1; 
    var card=listcards[num-1];
    var listusercards=start_list[0];
    listusercards.push(card);
    start_list[0]=listusercards;
    var totalCards=DisplayUserCards(listusercards);
    var dealerTotalcards=0;
    var container=document.getElementById("table_dealer");
    var flag=0;
    if (totalCards>21)
    {
     
        dealerTotalcards=DislayDealerCards(start_list[1]);
        DTotalGame+=dealerTotalcards;
        document.getElementById("DtotalGame").innerHTML=DTotalGame;
        
        var element = document.createElement("img");
       
        SetImageMSG(element);
       
      
     
        element.onclick=function()
        {
         MsgonClick(flag);
      

        }  
     
    
       
        if (DTotalGame>=200)
        {
         element.src="images/gameover.png";
            flag=1;
            
        }
        else{
           element.src="images/lostround.png";       
        }  
        
          container.appendChild(element); 
      
    }
}   