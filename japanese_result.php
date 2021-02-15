
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
<link rel="stylesheet" href="slider.css" type="text/css" media="all">
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
<section id="tmp_result" >
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
	$answer_name= $_POST['answer'];
	$right_answer=0;
	$wrong_answer=0;
	$wrong_answer_array= array();
	$wrong_test_array= array();
	foreach($answer_name as $key =>$value){
		$sql="Select * FROM answer where answer_id=$value";
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		while ($row = $stmt->fetch()){
				if($row['is_correct']==1){
					$right_answer++;
				}else{
					$wrong_answer++;
					array_push($wrong_answer_array,$row['answer_text']);
					array_push($wrong_test_array,$row['question_id']);
				}
		}
			  
	}
	
	
	if($right_answer>4){
?>
		<p style="text-align: center"><img src="project_japanese/image/omedeto.png" alt="" width="500" height="500"/></p>
		<div class="result_table">
		<h2> 評価</h2>
		<ul>
		<li><p><?php echo"<p> 正解数:".$right_answer. "</p>";?></p></li>
		<li><p><?php echo"<p> 間違えた数:".$wrong_answer. "</p>";?></p></li>
		<li><p><?php echo "<p align='center'>おめでとうございます。</p>";?></p></li>
		</ul>
<?php
		foreach($wrong_answer_array as $wrong_answer_value) {
			echo"<p> ggg:". $wrong_answer_value. "</p>";
		}
	}else if((0<$right_answer) && ($right_answer<=4)){?>
		<p style="text-align: center"><img src="project_japanese/image/ganbare.png" alt="" width="500" height="500"/></p>
		<div class="result_table">
		<h2> 評価</h2>
		<ul>	
		<li><p><?php echo"<p> 正解数:".$right_answer. "</p>";?></p></li>
		<li><p><?php echo"<p> 間違えた数:".$wrong_answer. "</p>";?></p></li>
		<li><p><?php echo "<p align='center'>もっと頑張ってください。</p>";?></p></li>
		</ul>
		<div class="wrong_answer">
			<h3>間違えた答え</h3>
			<ul>
	<?php
													  
		//foreach($wrong_answer_array as $wrong_answer_value) {cho nay cho ra caudung cau sai
		
		foreach($wrong_test_array as $wrong_test_value) {
			$sql2="SELECT * FROM question INNER JOIN answer ON question.question_id = $wrong_test_value LIMIT 1";
			$stmt2 = $conn->prepare($sql2);
			$stmt2->execute();
			while ($row2 = $stmt2->fetch()){
				echo"<li><p class='question_text'>". $row2['question_text']. "</p>";
				 $sql4="Select * FROM answer where question_id='$wrong_test_value' and is_correct='1'";
				 $stmt4 = $conn->prepare($sql4);
				 $stmt4->execute();
				 while ($row4 = $stmt4->fetch()){
					 echo"<p class='answer_text'>答え:". $row4['answer_text']. "</p>";
					 echo"<p class='answer_img'><img src=' ". $row4['answer_img']. " ' /></p></li>";
				}
				
				
			}
				
		}
	?>
				</ul>
</div> 
		
		<?php
	}else{
?>	<p style="text-align: center"><img src="project_japanese/image/zannen.png" alt="" width="240" height="240"/></p>
	<div class="result_table">
		<h2> 評価</h2>
		<ul>
		<li><?php echo"<p> 正解数:".$right_answer. "</p>";?></li>
		<li><?php echo"<p> 間違えた数:".$wrong_answer. "</p>";?>	</li>
		<li><?php echo "<p align='center'>残念でした。もっと頑張ってください。</p>";?></li>
		</ul>
		<div class='wrong_answer'><h3>間違えた答え</h3><ul>
		<!-- foreach($wrong_answer_array as $wrong_key => $wrong_answer_value) {
		//		<!--echo"<p class='answer_text'>答え:". $wrong_answer_value. "</p></li>";	}-->
		<?php  foreach($wrong_test_array as $wrong_test_value) {
			$sql5="SELECT * FROM question INNER JOIN answer ON question.question_id = $wrong_test_value LIMIT 1";
			$stmt5 = $conn->prepare($sql5);
			$stmt5->execute();
			while ($row5 = $stmt5->fetch()){
				echo"<li><p class='question_text'>". $row5['question_text']. "</p>";
				 $sql6="Select * FROM answer where question_id='$wrong_test_value' and is_correct='1'";
				 $stmt6 = $conn->prepare($sql6);
				 $stmt6->execute();
				 while ($row6 = $stmt6->fetch()){
					 echo"<p class='answer_text'>答え:". $row6['answer_text']. "</p>";
					 echo"<p class='answer_img'><img src=' ". $row6['answer_img']. " ' /></p></li>";
				}
				
				
			}
				
		}
		//echo"<li><p class='question_text'>". $wrong_key. "</p>";

		  
	}
 } catch (PDOException $e) {
//echo $e->getMessage();
echo $sql . "<br>" . $e->getMessage();

}

?>		
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