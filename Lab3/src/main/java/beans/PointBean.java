package beans;

import jpa.services.ResultService;
import lombok.Data;
import model.Result;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Data
public class PointBean {
    private ResultService resultService = new ResultService();
    private Result newPoint = new Result();
    private List<Result> points = new ArrayList<>();

    public void addPoint() {
        Locale.setDefault(Locale.ENGLISH);
        newPoint.checkHit();
        newPoint.setCurrentTime();
        points.add(newPoint);
        resultService.saveResult(newPoint);
        newPoint = new Result();
    }
}
