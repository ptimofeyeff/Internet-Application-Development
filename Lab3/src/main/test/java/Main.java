import jpa.services.ResultService;
import model.Result;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ResultService resultService = new ResultService();
        List<Result> results = new ArrayList<Result>();
        results.add(new Result(1,2,3));
        results.add(new Result(2,3,5));
        results.add(new Result(3,3,3));

        resultService.saveAllResults(results);

       /* List<Result> results = resultService.findAllResults();
        System.out.println(results);
    */}
}
