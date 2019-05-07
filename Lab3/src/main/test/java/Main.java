import jpa.services.ResultService;
import model.Result;

import java.util.*;


public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.ENGLISH);
        testOracle();
    }


    private static void testOracle(){
        ResultService resultService = new ResultService();
        Result result = new Result(1,2,3);
        resultService.saveResult(result);
    }

    private static void addindData(){
        ResultService resultService = new ResultService();
        List<Result> results = new ArrayList<>();
        results.add(new Result(1,2,3));
        results.add(new Result(2,3,5));
        results.add(new Result(3,3,3));
        resultService.saveAllResults(results);

    }
}
