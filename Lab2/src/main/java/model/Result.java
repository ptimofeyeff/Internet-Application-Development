package model;



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
    public String toString() {
        return "Result{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", result=" + result +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Result)) return false;

        Result result1 = (Result) o;

        if (Double.compare(result1.getX(), getX()) != 0) return false;
        if (Double.compare(result1.getY(), getY()) != 0) return false;
        if (Double.compare(result1.getR(), getR()) != 0) return false;
        return isResult() == result1.isResult();
    }

    @Override
    public int hashCode() {
        int result1;
        long temp;
        temp = Double.doubleToLongBits(getX());
        result1 = (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(getY());
        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(getR());
        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
        result1 = 31 * result1 + (isResult() ? 1 : 0);
        return result1;
    }
}
