<%@ page import="model.Result" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8"%>


<%
    List<Result> results = (List<Result>) session.getAttribute("Results");
    if(results != null && !results.isEmpty()){
        for(Result result : results){ %>
            <tr>
            <td>  <%=result.getX()%> </td>
            <td>  <%=result.getY()%> </td>
            <td>  <%=result.getR()%> </td>
            <td>  <%=result.isResult()%> </td>
            <td>  <%=result.getCurrentTime()%> </td>
            <td>  <%=result.getScriptTime()%> </td>
            </tr>
        <%}
    }%>

