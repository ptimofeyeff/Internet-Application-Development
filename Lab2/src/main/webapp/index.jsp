
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
            <form method="get">
                <label for="x">
                    Значение X: (-3...3)
                    <input id="x" type="text">
                </label>
                <br>
                <br>
                <label for="y1">
                    Значение Y: <span> -2 </span>
                    <input id="y1" type="checkbox"><br>
                </label>
                <div class="checkbox">
                    -1.5 <input type="checkbox"><br>
                    -1   <input type="checkbox"><br>
                    -0.5 <input type="checkbox"><br>
                    0    <input type="checkbox"><br>
                    0.5  <input type="checkbox"><br>
                    1.5  <input type="checkbox"><br>
                    2    <input type="checkbox"><br>
                </div>

                <br>
                <label>
                    Значение R:
                    <input type="button" value="1">
                    <input type="button" value="2">
                    <input type="button" value="3">
                    <input type="button" value="4">
                    <input type="button" value="5">
                </label>
                <br>
                <br>
                <input type="submit" value="Проверить">
            </form>

        </div>
        <div class="area">
            <img src="resources/area.jpg" alt="">
        </div>
    </div>




</body>
</html>
