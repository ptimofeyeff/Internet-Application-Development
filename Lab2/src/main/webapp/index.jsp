
<%@ page contentType="text/html; charset=Cp1251"  %>
<html lang="ru">
<head>
    <link rel="stylesheet" href="styles.css" type="text/css">
    <meta charset="UTF-8">
    <title>Lab #2</title>
</head>
<body>
    <header> Тимофеев Павел, группа P3202, вариант 541852</header>
    <div class="main">
        <div class="form">
            <form id="form" method="get">
                <label for="x">
                    Значение X: (-3...3)
                    <input id="x" type="text">
                </label>
                <br>
                <br>
                <div class="checkbox">
                    Значение Y: <span> -2 </span>
                         <input id="-2" class="Y" type="checkbox" checked = "checked"><br>
                    -1.5 <input id ="-1.5" class = "Y" type="checkbox"><br>
                    -1   <input id ="-1" class = "Y" type="checkbox"><br>
                    -0.5 <input id ="-0.5" class = "Y" type="checkbox"><br>
                    0    <input id ="-0" class = "Y" type="checkbox"><br>
                    0.5  <input id ="0.5" class = "Y" type="checkbox"><br>
                    1  <input id ="1" class = "Y" type="checkbox"><br>
                    1.5  <input id ="1.5" class = "Y" type="checkbox"><br>
                    2    <input id ="2" class = "Y" type="checkbox"><br>
                </div>

                <br>
                Значение R:
                <input type="hidden" id="R_value" name="R_value">
                <input type="button" class = "R" value="1">
                <input type="button" class = "R" value="2">
                <input type="button" class = "R" value="3">
                <input type="button" class = "R" value="4">
                <input type="button" class = "R" value="5">

                <br>
                <br>
                <input id="submitButton" type="submit" value="Проверить">
                <br>
                <p id="error"> </p>
            </form>

        </div>
        <div class="area">

            <canvas id="area"> </canvas>
            <!--img src="resources/area.jpg" alt=""-->
        </div>
    </div>

    <script src="Validations.js" charset="UTF-8" ></script>
    <script src="area.js"> </script>
</body>
</html>
