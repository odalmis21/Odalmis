<html>
    <head>
        <meta charset="UTF-8">
        <title>Greg's Gambits</title>
         <meta name="viewport" content="width=device-width, initial-scale=1">

 
 <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script> 
  
<link rel="stylesheet" type="text/css" href = "css_style/jquery-ui.css">
<script src = "http://code.jquery.com/jquery-1.10.2.js"></script>
<script src = "http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

	
	
  <script type="text/javascript" src="js_source/tictactoe.js"></script> 
  <script type="text/javascript" src="js_source/game21.js"></script> 
  <script type="text/javascript" src="js_source/betTheRoll.js"></script> 
  
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">

<link rel="stylesheet" type="text/css" href="css_style/greg.css">

<link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
<link href="https://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
    </head>
     <body>
        
         <div id="wrapper">
        <div  data-role="header">
          <?php include("Includes/templates/inc_header.php"); ?>
        </div>
             
             <div id="Content_Menu">
             
             
        <div id="DynamicContent">
            <?php
            $page=$_GET['page'];
          if (isset($page)){
             
              switch ($page){
                  case 'tictactoe':{
                       include("Includes/tictactoe.php"); 
                 echo '<script>Addcolor();</script>';
                      break;
                  }
                  case 'game21':
                  {
                   include("Includes/game21.php"); 
                   echo '<script>Addcolor();</script>';
                   break;
                  }
                  
                  case 'bet':
                  {
                   include("Includes/betTheRoll.php"); 
                   echo '<script>Addcolor();</script>';
                   break; 
                  }
                  
                    case 'boogle':
                  {
                   include("Includes/greg_boogle2.php"); 
                   echo '<script>Addcolor();</script>';
                   break; 
                  }
                  
                       case 'memory':
                  {
                   include("Includes/greg_memory.php"); 
                   echo '<script>Addcolor();</script>';
                   break; 
                  }
                  
                       case 'maze':
                  {
                   include("Includes/maze.php"); 
                   echo '<script>Addcolor();</script>';
                   break; 
                  }
                  
                  
                  case 'home':
                   default :include("Includes/home.php");
                       break;
              }
              
              
              
              
          }else{
            
              include("Includes/home.php");
          }
          
            ?>
            
            
             
        </div>
                 
                 
       <div id="menu_games">   
          <?php include("Includes/templates/inc_menuGames.php"); ?>
       </div>        
              
             </div>
        
        <div data-role="footer">
               <?php
                include("Includes/templates/inc_footer.php");
               ?> 
               
            
        </div>
             
             </div>
                 

    </body>
</html>