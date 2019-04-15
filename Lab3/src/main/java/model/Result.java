package model;

import lombok.Data;

@Data
public class Result {
    private double x;
    private double y;
    private double r;
    private boolean result;

    public void setResult() {
        result = ((x <= 0 && y >= 0 && x >= -r/2 && y <= r)
                || (x >= 0 && y <= 0 && 2*y >= x - r) ||
                ((Math.pow(x, 2) + Math.pow(y, 2) <= r) && y <= 0 && x <= 0));
    }

}
