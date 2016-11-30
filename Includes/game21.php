<div id="game21">
  <div id="Results"> 
       <table>
           <thead>
               <tr>
                   
          <th colspan="2"> Total Game</th>      
      </tr> 
     </thead>
    <tr>
    <td>Dealer</td>
    <td id="DtotalGame">0</td>    
    </tr>       
       <tr>
    <td>You</td>
    <td id="UtotalGame">0</td>    
    </tr>   
      </table> 
        
    </div>    
  

<div id="table">
    <div id="table_dealer">

        <img id="img1" src="images/cardback.jpg" alt="card Back">
        <img id="img2" src="images/cardback.jpg" alt="card Back"> 

    <p id="Dtotal"><em>Total/Round: ?</em></p>


    </div>


    <div id="table_user">


    </div>
    </div>


   
    
    <div id="options">
    <button id="b1" onclick="AddCard()" >Ask for card</button>
    <button id="b2" onclick="EndRound()">End Round</button>  
    </div>
</div>
  <script>  var start_list=SetGame();</script>
