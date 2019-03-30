import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class MyFilter extends HttpFilter {

    @Override
    protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {

        if(req.getRequestURI().equals("/Lab2/") || req.getRequestURI().equals("/Lab2/ControllerServlet")) {
            super.doFilter(req, res, chain);
        }else {
            res.sendError(404);
        }
    }
}

