import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashSet;


public class MyFilter extends HttpFilter {


    private static HashSet<String> forbiddenURIs = new HashSet<String>();

    static {
        forbiddenURIs.add("/Lab2/AreaCheckServlet");
        forbiddenURIs.add("/Lab2/index.jsp");
        forbiddenURIs.add("/Lab2/resTable.jsp");
    }


    @Override
    protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
        if(forbiddenURIs.contains(req.getRequestURI())){
            res.sendError(404);
        }else {
            super.doFilter(req, res, chain);
        }

    }
}

