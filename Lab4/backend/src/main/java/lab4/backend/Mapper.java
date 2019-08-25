package lab4.backend;

import lab4.backend.api.DotViewModel;
import lab4.backend.database.model.Dot;
import lab4.backend.database.repo.UserRepository;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    private UserRepository userRepository;

    public Mapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Dot convertToDotEntity(DotViewModel dotViewModel) {

        return new Dot(
                dotViewModel.getX(),
                dotViewModel.getY(),
                dotViewModel.getRadius(),
                userRepository.findByLogin(dotViewModel.getUser())
        );
    }
}
