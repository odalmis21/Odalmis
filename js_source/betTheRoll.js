   var C_Bank=500;
   var U_Bank=500;  

function StarGame()
{
    
       var UserBet=parseInt(document.getElementById("UserBet").value);
 
    if (UserBet>0)
    {
        
    document.getElementById("UserTotal").value=0;
    document.getElementById("compTotal").innerHTML=0;
    var tableElement=document.getElementById("betTable");
        
         while (tableElement.hasChildNodes()) 
         {   
        tableElement.removeChild(tableElement.firstChild);

         }   

        var CompBet=0;
        var option=0;   
        var end=false;
     

        do {
            option=(Math.floor(Math.random() * 3)) + 1;       

            switch (option)
            {

                case 1:{
                    
                if (CompBet>0)
                    {
                        C_Bank-=CompBet;
                        U_Bank+=CompBet;
                    }
                    else{
                C_Bank-=5;
                U_Bank+=5;
                    }
                CompBet=0;
                document.getElementById("CompBet").innerHTML=CompBet;
                UserBet=0;
                alert("The computer folds")
                end=true;
                break;
                }   
                    
                case 2: {
                if (UserBet>C_Bank)
                {
                CompBet=C_Bank;
                alert("The Computer gives all");
                end=true;
                }
                else{
                CompBet=UserBet;
                
                alert("The Computer matchs your bet");
                end=true;
                } 
                break;

                } 

                case 3:{
                    if (UserBet>=C_Bank)
                    {

                    CompBet=C_Bank;  
                   end=true;
                    alert("The Computer gives all");    
                    }
                    else
                    {
                        CompBet=UserBet+10; 
                        document.getElementById("CompBet").innerHTML=CompBet;
                     
                        alert("The Computer raises your bet");  

                        if (U_Bank>10)
                        {     
                            var NewAmount=parseInt(prompt("how much do you want to add?","")); 
                            
                            
                            
                            if (NewAmount==0)
                            {
                                
                                
                            C_Bank+=5;
                            CompBet=0;
                             end=true;

                            }
                            else  if (NewAmount==10)
                            {
                            UserBet+=NewAmount;
                   
                            end=true;
                       

                            }
                            else if (NewAmount>10)
                                {
                                    
                                 UserBet+=NewAmount;
                                if (UserBet>U_Bank)
                                    UserBet=U_Bank;
                                 end=false;  
                                    
                                }



                        }
                        else {
                           UserBet=U_Bank;
                            end=true;
                            
                            
                        }

                  
                    
                }
                    break;
                }
                    
            }

        }while (end==false);
  
        document.getElementById("UserBank").value=U_Bank;
        document.getElementById("CompBank").innerHTML=C_Bank;
       document.getElementById("CompBet").innerHTML=CompBet;
     document.getElementById("UserBet").value=UserBet;
        
        if (option==2 || option==3)
        ComputerRolling();
        
    }

}


    function UserRolling()
    {
     
       
      if (parseInt(document.getElementById("compTotal").innerHTML)>0)
          {
        
        var dice1;
        var dice2;
        
        dice1=(Math.floor(Math.random() * 6)) + 1; 
        dice2=(Math.floor(Math.random() * 6)) + 1; 
        
        document.getElementById("UserTotal").value=dice1+dice2;
         var tableElement=document.getElementById("betTable");
        
         while (tableElement.hasChildNodes()) 
         {   
        tableElement.removeChild(tableElement.firstChild);

         } 
        
        var element1 = document.createElement("img");
        var element2 = document.createElement("img");
         element1.src="images/"+dice1+".jpg";
        element2.src="images/"+dice2+".jpg";
        tableElement.appendChild(element1);
        tableElement.appendChild(element2);
        
        var totalUser=parseInt(document.getElementById("UserTotal").value);
        var totalComp=parseInt(document.getElementById("compTotal").innerHTML);
    
        if (totalUser>totalComp)
            {
            U_Bank+=parseInt(document.getElementById("CompBet").innerHTML);
            C_Bank-=parseInt(document.getElementById("CompBet").innerHTML);
      
                
                
            }
         else if (totalComp>totalUser)
             {
              C_Bank+=parseInt(document.getElementById("UserBet").value);   
              U_Bank-=parseInt(document.getElementById("UserBet").value);   
            
             }
        
    
        
        
       document.getElementById("CompBet").innerHTML=0;
       document.getElementById("UserBet").value=0;   
          document.getElementById("UserBank").value=U_Bank;
        document.getElementById("CompBank").innerHTML=C_Bank;
        
        if (U_Bank==0)
            setTimeout('alert(You lost)',500);
        if (C_Bank==0)
              setTimeout('alert(You Win)',500);
        
          
          }
    }
    
    function ComputerRolling()
    {
        var dice1;
        var dice2;
        
        dice1=(Math.floor(Math.random() * 6)) + 1; 
        dice2=(Math.floor(Math.random() * 6)) + 1; 
          document.getElementById("compTotal").innerHTML=dice1+dice2;
        
         var tableElement=document.getElementById("betTable");
        
         while (tableElement.hasChildNodes()) 
         {   
        tableElement.removeChild(tableElement.firstChild);

         } 
        
        var element1 = document.createElement("img");
        var element2 = document.createElement("img");
         element1.src="images/"+dice1+".jpg";
        element2.src="images/"+dice2+".jpg";
        tableElement.appendChild(element1);
        tableElement.appendChild(element2);
        
        
    }
                    
            
        
        
 
