package lab4.backend.api;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

public class DotViewModel {

    @NotNull
    private double x;

    @NotNull
    private double y;

    @NotNull
    @Positive
    @Max(4)
    private int radius;

    @NotNull
    private String user;

    private boolean isHit;

    public DotViewModel(@NotNull double x,
                        @NotNull double y,
                        @NotNull @Positive @Max(4) int radius,
                        @NotNull String user,
                        boolean isHit) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.user = user;
        this.isHit = isHit;
    }



    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public boolean isHit() {
        return isHit;
    }

    public void setHit(boolean hit) {
        isHit = hit;
    }
}
