package jpa;
import model.Result;

import java.util.List;

public class ResultService {

    private ResultDao resultDao = new ResultDao();

    public ResultService(){
    }

    public Result findResult(int id){
        return resultDao.findById(id);
    }

    public void saveResult(Result result){
        resultDao.save(result);
    }

    public void deleteResult(Result result){
        resultDao.delete(result);
    }

    public void updateResult(Result result){
        resultDao.update(result);
    }

    public List<Result> findAllResults(){
        return resultDao.findAll();
    }
}
