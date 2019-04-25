package beans;

import jpa.services.ResultService;
import lombok.Data;
import model.Result;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.util.ArrayList;
import java.util.List;

@SessionScoped
@Data
@ManagedBean
public class PointBean {

    private ResultService resultService = new ResultService();
    private Result newPoint = new Result();
    private List<Result> points = new ArrayList<Result>();


    public void addPoint() {
        newPoint.checkHit();
        points.add(newPoint);
        resultService.saveResult(newPoint);
        newPoint = new Result();

    }



}
