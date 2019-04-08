import lombok.Data;
import model.Result;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import java.util.ArrayList;
import java.util.List;

@ViewScoped
@Data
@ManagedBean
public class PointBean {

    private Result newPoint = new Result();
    private List<Result> points = new ArrayList<Result>();


    public void addPoint() {
        newPoint.setResult();
        points.add(newPoint);
        newPoint = new Result();

    }



}
