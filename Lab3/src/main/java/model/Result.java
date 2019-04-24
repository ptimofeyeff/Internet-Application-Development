package model;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table(name = "Result")
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double x;
    private double y;
    private double r;
    private boolean isHit;

    public Result(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
        isHit = ((x <= 0 && y >= 0 && x >= -r/2 && y <= r)
                || (x >= 0 && y <= 0 && 2*y >= x - r) ||
                ((Math.pow(x, 2) + Math.pow(y, 2) <= r) && y <= 0 && x <= 0));
    }
}
