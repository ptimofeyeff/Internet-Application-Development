package model;

import java.util.Objects;

public class Result {
    private double x;
    private double y;
    private double r;
    private boolean result;

    public Result(double x, double y, double r, boolean result) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public boolean isResult() {
        return result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Result)) return false;
        Result result1 = (Result) o;
        return Double.compare(result1.x, x) == 0 &&
                Double.compare(result1.y, y) == 0 &&
                Double.compare(result1.r, r) == 0 &&
                result == result1.result;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, result);
    }
}
