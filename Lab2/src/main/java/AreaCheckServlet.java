import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        double x = Double.parseDouble(request.getParameter("X"));
        double y = Double.parseDouble(request.getParameter("Y"));
        double radius = Integer.parseInt(request.getParameter("R"));

       if(validateForm(x,y,radius)){
            if (checkForm(x,y, radius)){
               System.out.println(true);
           }else {
                System.out.println(false);
            }
       }

    }

    private boolean checkForm(double x, double y, double radius){
        return   (x >= 0 && x <= radius/2 && y <= radius && y >= 0)
                || (y <= 0 && x <= 0 && y >= -(x/2 + radius/2))
                || (x >= 0 && y <= 0 && Math.pow(x,2) + Math.pow(y,2) <= Math.pow(radius/2,2));

    }

    private boolean validateForm(double x, double y, double radius){
      return checkX(x) && checkY(y) && checkR(radius);
    }


    private boolean checkX(double x){
        return  (x > - 3 && x < 3);
    }

    private boolean checkY(double y){
        double[] yVal = new double[] {-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2};

        for (double val : yVal) {
            if (y == val) {
                return true;
            }
        }
        return false;
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
