import jpa.services.ResultService;
import model.Result;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        ResultService resultService = new ResultService();
        List<Result> results = resultService.findAllResults();
        System.out.println(results);
    }
}
