<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>無題ドキュメント</title>
<meta name="viewport" content="width=device-width, maximum-scale=3.0" />
<meta name="format-detection" content="telephone=no" />
<link href="project_japanese/layout.css" rel="stylesheet" type="text/css" media="all" />
<link href="project_japanese/edit.css" rel="stylesheet" type="text/css" media="all" />
<link href="project_japanese/smartphone.css" rel="stylesheet" media="only screen and (max-width : 480px)" type="text/css" />
<link rel="stylesheet" href="project_japanese/slider.css" type="text/css" media="all">
<script src="project_japanese/js/jquery.js"></script>	
</head>
<body class="format_free">
<script src="project_japanese/js/init.js"></script>	
<div id="tmp_wrap">
<header>
<div id="tmp_size_lang">
<div id="tmp_fsize" class="changestyle_area dropdown">
<div class="fsize_ttl"><button class="para_size">Fontsize</button></div>	
<div class="fsize_cnt">
<ul>
<li><a name="small" href="javascript:void(0);" class="changestyle">Reduce</a></li>
<li><a name="default" href="javascript:void(0);" class="changestyle">Standard</a></li>
<li><a name="big2" href="javascript:void(0);" class="changestyle">Enlarge</a></li>
</ul>	
</div>	
</div>
<div id="tmp_color" class="changestyle_area func_interface">
<div class="color_ttl"><button>Color</button></div>
<div class="color_cnt">
<ul>
<li><a name="default" href="javascript:void(0);" class="changestyle">Standard</a></li>
<li><a title="black" name="black" href="javascript:void(0);" class="changestyle">Black</a></li>
</ul>
</div>
</div>
<div id="tmp_lang">
<div class="lang_ttl"><button class="dropbtn">Language</button></div>
<div class="lang_cnt">
<ul>	
<li><a href="https://translate.google.com/translate?hl=&sl=ja&tl=en&u=http%3A%2F%2Fweb1.demonstrationweb.com%2F">english</a></li>
<li><a href="https://translate.google.com/translate?hl=&sl=ja&tl=ja&u=http%3A%2F%2Fweb1.demonstrationweb.com%2F">japanese</a></li>
<li><a href="https://translate.google.com/translate?hl=&sl=ja&tl=vi&u=http%3A%2F%2Fweb1.demonstrationweb.com%2F">vietnamese</a></li>	
</ul>
</div>	
</div>	
</div>
<div id="menu_hambeger" class="clear_fix">
<div class="toggle-button" id="toggle">
<div class="icon_bar top"></div>
<div class="icon_bar middle"></div>	
<div class="icon_bar bottom"></div>		
</div>	
</div>	
<div class="overlay" id="overlay">
<div class="drawer">
</div>		
</div>	
<div class="wrap_header">	
<div class="container clearfix">
<h1 class="logo"><span>学</span></h1>
</div>
</div>
</header>
<nav>
<div class="container">
<ul>
<li><a href="japanese_index.html">HOME</a></li>
<li><a href="japanese_about.html">ABOUT</a></li>	
<li><a href="japanese_study.html">STUDY</a></li>	
<li><a href="japanese_test.html">TEST</a></li>
<li><a href="japanese_study_hyogen_list.html">実用日本語</a></li>		
</ul>	
</div>
</nav>
<main>
<div class="container">
<section id="tmp_test" >
<div class="section_ttl section_flag"><p>TEST</p></div>
<div class="section_cnt">
<div class="test_frame">
	
<form id=""  method="post" action="result.php">	
	
<?php
$host = "localhost";
$dbname="japanesequiz";
$user = "root";
$pass = "NA7mgAgF";
try {
	// Create connection
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo $e->getMessage();
}

try {
	/*SET $ID = FLOOR(RAND( )* N) + 1;
	$sql=SELECT *  FROM question WHERE question_id >= $ID LIMIT 1; */
	$sql="Select * FROM question ORDER BY RAND() LIMIT 5"; 
	$stmt = $conn->prepare($sql);
	$stmt->execute();
	  while ($row = $stmt->fetch()){
 ?>
	<div class="question_block">	
	<div class="question_text"><p><input type="text" name="question_name" value="<?php echo $row['question_text'];?>"><?php echo $row['question_text'] ;?></p></div>	
	<?Php
		 
		 $sql2="Select * FROM answer where question_id=$row[question_id]";
		 $stmt2 = $conn->prepare($sql2);
		 $stmt2->execute();
    ?>
		 <div class="answer_text">
      <?Php
		  while ($row2 = $stmt2->fetch()){
?>		
<div class="answer_box">      
	<input type="radio" id="answer_<?php echo $row2['answer_id'] ; ?>" name="answer[<?php echo $row2['question_id'] ; ?>]" value="<?php echo $row2['answer_id'] ; ?>">
	<label for="answer_<?php echo $row2['answer_id'] ; ?>">
		<span class="answer_cnt_txt"><?php echo $row2['answer_text'] ; ?></span>
		<span class="answer_cnt_img"><img src="<?php echo $row2['answer_img'] ; ?>" alt="" width="85" height="auto"/></span>
	</label>
</div>

<?php							  
  	  }?>
		  </div>
		</div>
<?php 	}
} catch (PDOException $e) {
    //echo $e->getMessage();
    echo $sql . "<br>" . $e->getMessage();
}
?>	
<p class="button_box"><button type="submit" value="Submit" >Submit</button>
					  <button type="reset" value="Reset" onclick="location.reload();">Reset</button></p>
</form>	
	
</div>
</div>	
</section>	

</div>
</main>	
<footer>
<div class="container">
<div class="pnavi">
	<p class="ptop"><a href="#"></a></p>
</div>
<div class="wrap_footer">
<div class="footer_logo"><img src="project_japanese/image/logo_bottom.png" width="150px" height="73px" alt=""></div>
<ul class="sns">
<li><a href="#"><img src="project_japanese/image/icon_f.png" alt=""></a></li>
<li><a href="#"><img src="project_japanese/image/icon_twitter.png" alt=""></a></li>	
<li><a href="#"><img src="project_japanese/image/icon_instra.png" alt=""></a></li>	
<li><a href="#"><img src="project_japanese/image/icon_youtube.png" alt=""></a></li>			
</ul>
<div class="copyright"><p>Copyright ©  All Rights Reserved.</p></div>	
</div>		
</div>
</footer>	
</div>
<script src="project_japanese/js/slick_min.js"></script>	
<script src="project_japanese/js/overlay.js"></script>	
</body>
</html>