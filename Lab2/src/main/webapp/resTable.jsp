<%@ page import="model.Result" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Pavel
  Date: 25.03.2019
  Time: 10:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<tbody>

<%

    List<Result> results = (List<Result>) request.getAttribute("Results");
    if(results != null && !results.isEmpty()){
        for(Result result : results){
            out.println("<tr>");
            out.println("<td>" + result.getX() + "</td>");
            out.println("<td>" + result.getY() + "</td>");
            out.println("<td>" + result.getR() + "</td>");
            out.println("<td>" + result.isResult() + "</td>");
            out.print("</tr>");
        }
    }else {
        System.out.println(results);
    }
%>

</tbody>
