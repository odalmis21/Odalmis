  var ListPlayerX=[];
  var ListPlayer0=[];
  var listcomb=[['A','B','C'],['A','D','G'],['A','E','I'],['D','E','F'],['G','H','I'],['G','E','C'],['B','E','H'],['C','F','I']]; 


function GetPlay(elem)
    {
 
    var value=elem.value;
        value=value.toUpperCase();
    var id=elem.id;
       var counter=0;    
        if (value=='X')
            {
            elem.style.backgroundColor="yellow";    
             ListPlayerX.push(id);
           
                if (ListPlayerX.length>=3)
                    {
                     
                     for (var i=0;i<listcomb.length;i++)
                         {
                            for (var j=0;j<listcomb[i].length;j++)
                                {

                                for (var k=0;k<ListPlayerX.length;k++)
                                    {
                                        
                                        if (listcomb[i][j]==ListPlayerX[k])
                                            {
                                            counter++;
                                                break;
                                            }
                                            
                                    }
                                
                                }
                             if (counter==3)
                                 {
                                     alert("Player X wins!!");
                                     break;
                                 }
                             
                                   counter=0; 
                         }
                        
                        
                    }
                
            }
        else if (value==0)
            {
       
           elem.style.backgroundColor="#70E2FF";    
            ListPlayer0.push(id);
       
                if (ListPlayer0.length>=3)
                    {
                     
                     for (var i=0;i<listcomb.length;i++)
                         {
                            for (var j=0;j<listcomb[i].length;j++)
                                {

                                for (var k=0;k<ListPlayer0.length;k++)
                                    {
                                        
                                        if (listcomb[i][j]==ListPlayer0[k])
                                            {
                                            counter++;
                                                break;
                                            }
                                            
                                    }
                                
                                }
                             if (counter==3)
                                 {
                                     alert("Player 0 wins!!");
                                     break;
                                 }
                             
                             counter=0;
                         }
                        
                        
                    }
                
                
                
                
                
            }
        else 
            elem.value="";
       
    }
  
  
   function Addcolor()
   {
       container=document.getElementById("Content_Menu");
       container.setAttribute("class", "background");
   }
    
    