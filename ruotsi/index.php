<?php
  $directory = '';
  $files = glob("*.txt");
  if (isset($_GET['file'])) {
    $file = $_GET['file'];
  } else $file = "0";
  $rows = file($files[$file]);
  $num = count($rows);
?>

<html>
<head>
  <meta charset="UTF-8">
  <title>Language Quiz v0.1</title>
  <link rel="stylesheet" media="screen" type="text/css" href="style.css" />
  <script language="javascript" type="text/javascript" src="jquery.js"></script>
  <script language="javascript" type="text/javascript" src="script.js"></script>
</head>
<body>
  <div class="alue_valikko">
    <select id="tiedosto" onchange="change_file();">
      <?php
        for ($x = 0; $x < count($files); $x++) {
          if ($file == $x) $selected = "selected"; else $selected = "";
          echo "<option value='$x' $selected>$files[$x]</option>\n";
        }
      ?>
    </select><br><br>
    <input type=checkbox id="lang" onclick="new_question();"><label class="label" for="lang"><span></span>Reverse Language</label>
  </div>
  <div class="alue_vastaus">
    <div id="kysymys">Question (<?=$num ?>)</div>
    <div class="vastaus">
      <input type=text id="vastaus" value="Answer">
    </div>
    <div id="palaute">(Feedback here)</div>
  </div>
  <?php 
    echo "<input type=hidden id=num_rows value=$num>";
    for ($x = 0; $x < $num; $x++) {
      echo "<input type=hidden id=q_$x value=\"$rows[$x]\">\n";
    }
  ?>
</body>
</html>
