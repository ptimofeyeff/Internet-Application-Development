<tr>
    <td class="resItem"> X </td>
    <td class="resItem"> Y </td>
    <td class="resItem"> R </td>
    <td class="resItem"> Result </td>
    <td class="resItem"> Time </td>
    <td class="resItem"> ScriptTime </td>
</tr>

<?php
    foreach ($_SESSION['history'] as $value) { ?>


<tr>
    <td class="resItem"> <?php echo $value[0] ?> </td>
    <td class="resItem"> <?php echo $value[1] ?> </td>
    <td class="resItem"> <?php echo $value[2] ?> </td>
    <td class="resItem"> <?php echo $value[3] ? "True" : "False" ?> </td>
    <td class="resItem"> <?php echo $value[4] ?> </td>
    <td class="resItem"> <?php echo
            number_format($value[5], 10, ".", "")*1000000?> </td>



</tr>

<?php } ?>