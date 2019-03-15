import javax.servlet.RequestDispatcher;
import java.io.IOException;


public class ControllerServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        RequestDispatcher dispatcher;


        if ((request.getParameter("X")!=null) &&
                (request.getParameter("Y")!=null) &&
                (request.getParameter("R")!=null)) {

            dispatcher = request.getRequestDispatcher("/WEB-INF/AreaCheckServlet");

        }else {
            dispatcher = request.getRequestDispatcher("/index.jsp");
        }
        dispatcher.forward(request, response);

    }
}