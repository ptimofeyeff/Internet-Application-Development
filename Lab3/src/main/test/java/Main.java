import jpa.ResultService;
import model.Result;

public class Main {
    public static void main(String[] args) {
        Result result1 = new Result(2,3,4);
        Result result2 = new Result(-2,3,4);

        ResultService resultService = new ResultService();
        resultService.saveResult(result1);
        resultService.saveResult(result2);

    }
}
