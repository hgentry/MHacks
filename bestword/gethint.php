<?php
$username="hgentry";
$password="28330771";
$database="hgentry";
mysql_connect("mydb.ics.purdue.edu",$username,$password);

@mysql_select_db($database) or die( "Unable to select database");
set_time_limit(10000);
$bigfile = file_get_contents("wordsEn.txt");
$splitsies = split("\n", $bigfile);


foreach($splitsies as $addly)
{
$query = "INSERT INTO english3 (word, count) VALUES ('$addly',0)";
$res = mysql_query($query);
}

mysql_close();
echo $response;
?>