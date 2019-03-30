<%@ page import="model.Result" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Pavel
  Date: 25.03.2019
  Time: 10:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
    List<Result> results = (List<Result>) request.getAttribute("Results");
    if(results != null && !results.isEmpty()){
        for(Result result : results){ %>
            <tr>
            <td>  <%=result.getX()%> </td>
            <td>  <%=result.getY()%> </td>
            <td>  <%=result.getR()%> </td>
            <td>  <%=result.isResult()%> </td>
            </tr>
        <%}
    }%>

