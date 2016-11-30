<script type="text/javascript" src="js_source/gregBoggle.js"></script> 
<div id="content_boggle">
    
<div id="Letter_Player">
    
    <table>
        
        <tr>
            <td><input type="text" id="word" readonly></td>
            <td><div id="buttonok" onclick="addWord()">
        <img class="big" src="images/iconOK.png" alt=""> 
             </div></td>
             
             <td><div id="buttonRemove" onclick="deleteInput()"><img src="images/IconRemove.png"></div></td>
            
        </tr>
        <tr>
            <td colspan="3"><textarea data-role="none" id="textWords" rows="15" cols="25"></textarea></td> 
            
            
        </tr>
        
        
        
    </table>

  
    
    
   
</div>
    
<div id="boggle_table">
    
    
</div>
  

</div>

    
    <script>
    DisplayLetters();
    </script>

