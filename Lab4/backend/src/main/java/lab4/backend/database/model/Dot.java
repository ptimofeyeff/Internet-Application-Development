package lab4.backend.database.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Dot {

    @Id
    private UUID id;

    private double x;
    private double y;
    private int radius;
    private boolean isHit;

    private Dot() {
        this.id = UUID.randomUUID();
    }


    public Dot(double x, double y, int radius) {
        this();
        this.x = x;
        this.y = y;
        this.radius = radius;
        checkHit();

    }

    private void checkHit() {
        isHit = ((x <= 0 && y >= 0 && y <= radius/2.0 && x >= -radius && y <= radius)
                || (x >= 0 && y >= 0 && 2 * y <= radius - x) ||
                ((Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(radius / 2.0, 2)) && y <= 0 && x <= 0));
    }


    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public int getRadius() {
        return radius;
    }

    public boolean isHit() {
        return isHit;
    }
}
