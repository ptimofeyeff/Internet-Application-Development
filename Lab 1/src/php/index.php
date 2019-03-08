<!DOCTYPE html>
<html lang="ru">
<head>
    <link rel="stylesheet" href="../css/styles.css" type="text/css">
    <meta charset="UTF-8">
    <title> Lab #1</title>
</head>
<body>
<table border="0">
      <thead>
        <tr>
            <th colspan="2"> Тимофеев Павел, P3202, Вариант  18216 </th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>
                <form id = "form">
                    <table border="0">
                        <tr>
                            <td>
                                <label for="X"> Значение X:</label>

                                <input id = "X" type="radio" name="X" checked="checked" value="-2"> -2
                                <input id = "X" type="radio" name="X" value="-1.5"> -1.5
                                <input id = "X" type="radio" name="X" value="-1"> -1
                                <input id = "X" type="radio" name="X" value="-0.5"> -0.5
                                <input id = "X" type="radio" name="X" value="0"> 0
                                <input id = "X" type="radio" name="X" value="0.5"> 0.5
                                <input id = "X" type="radio" name="X" value="1"> 1
                                <input id = "X" type="radio" name="X" value="1.5"> 1.5
                                <input id = "X" type="radio" name="X" value="2"> 2
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="Y">  Значение Y (-3...3):</label>
                                <input id="Y" type="text" name="Y">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label> Значение R: </label>
                                <input type="hidden" id="R_value" name="R_value">
                                <input type="button" name="R" id="R" value="1">
                                <input type="button" name="R" id="R" value="1.5">
                                <input type="button" name="R" id="R" value="2">
                                <input type="button" name="R" id="R" value="2.5">
                                <input type="button" name="R" id="R" value="3">

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" id="submitButton" value="Проверить">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="error"> </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table id="result" border="1">
                                    <?php
                                        if(!isset($_SESSION['history'])){
                                            $_SESSION['history'] = array();
                                        }
                                        include 'table.php';
                                    ?>
                                </table>
                            </td>
                        </tr>
                    </table>
                </form>
            </td>
            <td class="img">
                <img src="../../resources/graph.png" alt="">
            </td>
        </tr>
      </tbody>
</table>

<script src="../js/scripts.js"> </script>
</body>
</html>


