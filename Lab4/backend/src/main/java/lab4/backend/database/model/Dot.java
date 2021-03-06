package lab4.backend.database.model;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Dot {

    @Id
    private UUID id;

    @Column(nullable = false)
    private double x;
    @Column(nullable = false)
    private double y;
    @Column(nullable = false)
    private int radius;
    @Column(nullable = false)
    private boolean isHit;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    private Dot() {
        this.id = UUID.randomUUID();
    }


    public Dot(double x, double y, int radius, User user) {
        this();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
