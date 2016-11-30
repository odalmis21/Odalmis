<script type="text/javascript" src="js_source/gregConcentration.js"></script> 

<div id="content_match">
    <h4 style="color:black; display:inline;">Incorrect Tries Available:</h4>
    <input data-role='none' id="tries" type=text value="15" style="color:red; font-size:1.2em; font-weight:bold; width:50px; text-align:center;" readonly >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <h4 style="color:black; display:inline;">Time Available:</h4>
    <input id="time" data-role='none' type=text style="color:red; font-size:1.2em; font-weight:bold; width:80px; text-align:center;" readonly >
    <br><br><br>
    <div id="content_match_Table">

        <div id="divTable">
            <div class="divTableRow">
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
            </div>

            <div class="divTableRow">
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
                <div class="divTableCell"></div>
            </div>


        </div> 

   </div>

</div>

    <button id="b7" onclick="ResetGame()"> Play again</button>
    
    
     <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js"></script>
        
    <script type="text/javascript">
        
DisplayTable();
        

    
$(".divTableCell .card").flip({
  axis: 'y',
  trigger: 'manual',
    reverse:'true'
});
        
function flipCard(cardId)
        {
       $(".divTableCell #"+cardId).flip(true);       
        }

function UnflipCards(cardId1,cardId2)
        {
            
           
              $(".divTableCell #"+cardId1).flip(false); 
              $(".divTableCell #"+cardId2).flip(false);   
            
        }
        
        


        
      
        
    </script>
