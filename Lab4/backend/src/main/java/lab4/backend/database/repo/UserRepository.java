package lab4.backend.database.repo;

import lab4.backend.database.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {
    User findByLogin(String login);
}
