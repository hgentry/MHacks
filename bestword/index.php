<html>
<title>The Best Word Ever</title>
<head>
<script src="jquery.js"></script>
<script>

var currentWord;

function onYes()
{
	var xmlhttpy=new XMLHttpRequest();

	xmlhttpy.onreadystatechange=function()
    {
		if (xmlhttpy.readyState==4 && xmlhttpy.status==200)
		{
			//currentWord = xmlhttpy.responseText;
			//document.getElementById("word").innerHTML=currentWord;
			location.reload(true);
		}
    }
xmlhttpy.open("GET","getyes.php?q="+currentWord,true);
xmlhttpy.send();

}

function onNo()
{
	var xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function()
    {
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//currentWord = xmlhttp.responseText;
			//document.getElementById("word").innerHTML=currentWord;
			location.reload(true);
		}
    }
xmlhttp.open("GET","getno.php?q="+currentWord,true);
xmlhttp.send(); 

}
</script>
	<p>Can we discover the best word ever? Rate each word shown below to help us figure out which word is the best word.</p>
<p id="word">
<?php
$username="hgentry";
$password="28330771";
$database="hgentry";
mysql_connect("mydb.ics.purdue.edu",$username,$password);

mysql_select_db($database) or die( "Unable to select database");


$query = "SELECT word FROM english3
ORDER BY RAND()
LIMIT 1";
$result = mysql_query($query);

$preresponse = mysql_fetch_row($result);
$response = $preresponse[0];
mysql_close();
echo $response;
?>
</p>
<script>
currentWord=document.getElementById("word").innerHTML;
</script>
<button id="yes" onclick="onYes()">This word is nice</button><button id="no" onclick="onNo()">This word is unpleasant</button>

</html>


	
