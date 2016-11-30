
     <div id="content_Dice">
        
         <div id="dice_container">
              
              
         
         <div id="betTable">
             
             
             
         </div>
             
             <div id="compData">  
                 <h4>COMPUTER</h4>
                 <table>
                     <tr>
                         <td>Balance</td>
                         <td id="CompBank">500</td>
                     </tr>
                     <tr>
                         <td>Wager</td>
                         <td id="CompBet"></td>
                     </tr>
                     
                       <tr>
                         <td>Total/Round</td>
                         <td id="compTotal"></td>
                     </tr>
                    
                 </table>
             
             </div>
     </div>
         
         
         
         <div id="UserData">
             <table>
                 <tr>
                     <td><input type="text" id="UserBank" value="500" readonly><h5>Balance</h5></td>
                     <td><input type="text" pattern="[0-9]" id="UserBet"><h5>Wager</h5></td>
                     <td><button id="start" onclick="StarGame()">ok</button><br></td>
                     <td><input type="text" id="UserTotal" readonly><h5>Total/Round</h5></td>
                     <td><button id="roll" onclick="UserRolling()">Roll</button><br></td>
                 </tr>
                 
             </table>
             
             
             
  
             
         </div>
            
  </div>
        
     
