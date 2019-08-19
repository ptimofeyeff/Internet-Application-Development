package lab4.backend;

import lab4.backend.api.DotViewModel;
import lab4.backend.model.Dot;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    public Mapper() {
    }

    public Dot convertToDotEntity(DotViewModel dotViewModel){
        return  new Dot(dotViewModel.getX(), dotViewModel.getY(), dotViewModel.getRadius());
    }
}
