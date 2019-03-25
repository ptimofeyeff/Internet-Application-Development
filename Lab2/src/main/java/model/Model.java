package model;

import java.util.ArrayList;
import java.util.List;

public class Model {
    private static Model instance = new Model();

    private List<Result> model;

    public static Model getInstance(){
        return instance;
    }


    private Model () {
        model = new ArrayList<Result>();
    }


    public void add(Result result){
        model.add(result);
    }

    public void clear(){
        model.clear();
    }

    public void addAll(List<Result> results){
        model.addAll(results);
    }

    public List<Result> getModel() {
        return model;
    }
}
