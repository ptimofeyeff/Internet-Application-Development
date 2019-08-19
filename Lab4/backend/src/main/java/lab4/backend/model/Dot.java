package lab4.backend.model;

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

    private Dot() {
        this.id = UUID.randomUUID();
    }

    public Dot(double x, double y, int radius) {
        this();
        this.x = x;
        this.y = y;
        this.radius = radius;
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
}
