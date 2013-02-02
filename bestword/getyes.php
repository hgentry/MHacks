 <?php
$username="hgentry";
$password="28330771";
$database="hgentry";
mysql_connect("mydb.ics.purdue.edu",$username,$password);
$q = $_REQUEST['q'];
mysql_select_db($database) or die( "Unable to select database");
$query = "SELECT word FROM english3 WHERE word='$q'";
$midresult = mysql_query($query);
$midval = mysql_fetch_row($midresult);
$midval2 = $midval[1] + 1;

$query = "UPDATE english3 SET count = '$midval2' WHERE word='$q'";
$errresult = mysql_query($query);
$query = "SELECT word FROM english3
ORDER BY RAND()
LIMIT 1";
$result = mysql_query($query);

$preresponse = mysql_fetch_row($result);
$response = $preresponse[0];
mysql_free_result($result);
mysql_close();
echo $response;
?>