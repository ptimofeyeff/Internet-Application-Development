import model.Result;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            Double.parseDouble(request.getParameter("X"));
            Double.parseDouble(request.getParameter("Y"));
            if (!checkR(Integer.parseInt(request.getParameter("R")))){
                throw new NumberFormatException();
            }
        }catch (NumberFormatException e){
            response.sendError(404);
            return;
        }

        double x = Double.parseDouble(request.getParameter("X"));
        double y = Double.parseDouble(request.getParameter("Y"));
        int radius = Integer.parseInt(request.getParameter("R"));

        boolean result = checkForm(x,y,radius);


        List<Result> results;
        HttpSession session = request.getSession();

        if (session.getAttribute("Results") == null){
            results = new ArrayList<Result>();
            results.add(new Result(x,y,radius,result));
        }else {
            results = (List<Result>) session.getAttribute("Results");
            results.add(new Result(x,y,radius,result));
        }
        session.setAttribute("Results", results);


        RequestDispatcher dispatcher = request.getRequestDispatcher("resTable.jsp");
        dispatcher.forward(request, response);
    }


    private boolean checkForm(double x, double y, double radius){
        return   (x >= 0 && x <= radius/2 && y <= radius && y >= 0)
                || (y <= 0 && x <= 0 && y >= -(x/2 + radius/2))
                || (x >= 0 && y <= 0 && Math.pow(x,2) + Math.pow(y,2) <= Math.pow(radius/2,2));

    }

    private boolean checkR(double r){
        double [] rVal = new double[] {1, 2, 3, 4, 5};

        for (double val : rVal){
            if (r == val){
                return true;
            }
        }
        return false;
    }

}
