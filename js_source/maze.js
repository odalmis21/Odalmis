   var arrayMaze=[];  

function setPitfalls(amount)
    {
      var rowPitfall=0;
      var columnPitfall=0;  
      var pitfallNo=0;  
      var imgElement;    
 
      for (var i=0;i<amount;i++)
          {
     rowPitfall=Math.floor(Math.random()*9)+1;
     columnPitfall=Math.floor(Math.random()* 10);   
     pitfallNo=(Math.floor(Math.random() * 4)) + 1; 
    
     while (rowPitfall==0 && columnPitfall==0 || rowPitfall==9 && columnPitfall==9 || rowPitfall==0 && columnPitfall==1 || rowPitfall==1 && columnPitfall==0  || rowPitfall==1 && columnPitfall==1  )
         {
     rowPitfall=Math.floor(Math.random()*9)+1;
     columnPitfall=Math.floor(Math.random()* 10);       
             
         }
              
    imgElement =document.createElement("img");   
    imgElement.setAttribute("src","images/pitfall"+pitfallNo+".jpg");  
              
        imgElement.style.display="none";  
  
    
    arrayMaze[rowPitfall][columnPitfall]=imgElement;     
              
          }
        
    }
    
    
    function fillArray()
    {

     for (var i=0;i<10;i++) 
     arrayMaze[i] =[];

       var imgElement;   
    for (var i=0;i<10;i++)
        {
            for (var j=0;j<10;j++)
                {
                 imgElement =document.createElement("img");  
                    if (j==0 && i==0)
                        imgElement.setAttribute("src","images/hero.jpg");
                    else  if (i==9 && j==9)
                          imgElement.setAttribute("src","images/boy.jpg");
                      else
                        imgElement.setAttribute("src","images/blue.jpg");   
                          
                     arrayMaze[i][j]=imgElement;   
                    
                    }    
        }
        
       setPitfalls(40); 
  
    }
    
    function DisplayTable()
    {
        
     var container=document.getElementById("content_Maze");
      while (container.hasChildNodes()) 
    {   
     container.removeChild(container.firstChild);

    }   
        
      var elemTable=document.createElement("table");
      elemTable.setAttribute("id","tmaze");

      var elemTr;
      var elemTd;
      
    for (var j=0;j<arrayMaze.length;j++)
        {
          elemTr=document.createElement("tr");  
          elemTable.appendChild(elemTr);
          for (var k=0;k<arrayMaze[j].length;k++)
              {
               elemTd=document.createElement("td"); 
                elemTd.setAttribute("id",j+'.'+k);  
                elemTd.style.width="auto"; 
                  elemTd.style.cursor="pointer";
                  
                  elemTd.onclick=function(){doMove(this)};
                elemTd.appendChild(arrayMaze[j][k]);    
                elemTr.appendChild(elemTd);
                  
                  
              }
            
        }
      
   
      
      container.appendChild(elemTable);
        
    }
    

    
    
  function SetGame()
  {

    fillArray();
    DisplayTable();
      
  }
    
    function GetHeroPos()
    {
      var elemImg;var src; var index; var filename;   var heroCell; 
       for (var j=0;j<arrayMaze.length;j++)
        {
               
            for (var k=0; k<arrayMaze[j].length;k++)
               {
                elemImg=arrayMaze[j][k];  
                src=elemImg.src; 
               index = src.lastIndexOf("/");

               if(index !== -1)   
                filename = src.substring(index+1,src.length);   
                   
                   
               if (filename=="hero.jpg")
                   {
                 heroCell=j+"."+k;
                   var temp=true;
                       break;
                       
                   }
                 
              }
        
        if (temp)
            break;
        }
        
        return heroCell;
    }
    
    
  function  getRowandCol(cell)
    {
     
     var row=parseInt(cell.substring(0,1));
      var col=parseInt(cell.substring(2)); 
        
        return [row,col];
        
        
    }
    
    
    function doMove(elementTD)
    {
        
        var cellMove=elementTD.id;
        var heroCell;  var RChero;  var tempEle;
        
     
        heroCell=GetHeroPos();
         
     
        
       var leftCell; var rightCell; var Upcell; var downCell; 
        var DiagonalDownR; var DiagonalDownL; var DiagonalUpR; var DiagonalUpL;
        
        var tempHeroCell=parseFloat(heroCell);
        
        leftCell=parseFloat((tempHeroCell-0.1)).toFixed(1);
        rightCell=parseFloat((tempHeroCell+0.1)).toFixed(1);
        Upcell=parseFloat((tempHeroCell-1.0)).toFixed(1);
        downCell=parseFloat((tempHeroCell+1.0)).toFixed(1);
        DiagonalDownL=parseFloat((tempHeroCell+0.9)).toFixed(1);
        DiagonalDownR=parseFloat((tempHeroCell+1.1)).toFixed(1);
        DiagonalUpL=parseFloat((tempHeroCell-1.1)).toFixed(1);
        DiagonalUpR=parseFloat((tempHeroCell-0.9)).toFixed(1);
        
      var array=[leftCell,rightCell,Upcell,downCell,DiagonalDownL,DiagonalDownR,DiagonalUpL,DiagonalUpR];
        if (array.indexOf(cellMove)== -1)
            {
                alert("Wrong move");
                
            }
        else
            {
                
            var RCMove=getRowandCol(cellMove);
              
            var eleMove=arrayMaze[RCMove[0]][RCMove[1]];
             var src=eleMove.src; 
              var index = src.lastIndexOf("/");

               if( index !== -1)   
               var filename = src.substring(index+1,src.length);    
                if (filename!="blue.jpg" && filename!="boy.jpg" )
                {
                    alert("There is a pitfall, make another move");
                    eleMove.style.display="block";
                    
                }
                else if (filename!="boy.jpg" )
                    {
                    if (heroCell!="0.0"){  
                    RChero=getRowandCol(heroCell.toString());
                    tempEle=arrayMaze[RChero[0]][RChero[1]];
                    arrayMaze[RChero[0]][RChero[1]]=eleMove;
                    }
                    else
                        {
                    tempEle=arrayMaze[0][0];  
                    arrayMaze[0][0]=eleMove;
                    
                            
                        }
                   
                
                    arrayMaze[RCMove[0]][RCMove[1]]=tempEle;   
                     
                    DisplayTable();    
                    }
                else
                    {
                     alert("You won!!!") ;
                     var imgblue=document.createElement("img");     
                     imgblue.setAttribute("src","images/blue.jpg");     
                     RChero=getRowandCol(heroCell); 
                     arrayMaze[RChero[0]][RChero[1]]=imgblue;
                     var imgsaved=document.createElement("img");  
                    imgsaved.setAttribute("src","images/babysaved.jpg"); 
                     
                            imgsaved.style.marginLeft="0";
                        
                    arrayMaze[9][9]= imgsaved;   
                    DisplayTable();
             
                    }
                
            }
            
            
        
    }
    
    
   