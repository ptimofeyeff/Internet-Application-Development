package model;



public class Result {
    private double x;
    private double y;
    private double r;
    private boolean result;
    private String currentTime;
    private long scriptTime;

    public Result(double x, double y, double r, boolean result, String currentTime, long scriptTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        this.currentTime = currentTime;
        this.scriptTime = scriptTime;
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

    public String getCurrentTime(){
        return currentTime;
    }

    public long getScriptTime() {
        return scriptTime;
    }

    @Override
    public String toString() {
        return "Result{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", result=" + result +
                ", currentTime='" + currentTime + '\'' +
                ", scriptTime=" + scriptTime +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Result result1 = (Result) o;

        if (Double.compare(result1.x, x) != 0) return false;
        if (Double.compare(result1.y, y) != 0) return false;
        if (Double.compare(result1.r, r) != 0) return false;
        if (result != result1.result) return false;
        if (scriptTime != result1.scriptTime) return false;
        return currentTime.equals(result1.currentTime);

    }

    @Override
    public int hashCode() {
        int result1;
        long temp;
        temp = Double.doubleToLongBits(x);
        result1 = (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(y);
        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(r);
        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
        result1 = 31 * result1 + (result ? 1 : 0);
        result1 = 31 * result1 + currentTime.hashCode();
        result1 = 31 * result1 + (int) (scriptTime ^ (scriptTime >>> 32));
        return result1;
    }
}
