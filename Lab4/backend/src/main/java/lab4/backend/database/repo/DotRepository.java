package lab4.backend.database.repo;

import lab4.backend.database.model.Dot;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface DotRepository extends CrudRepository<Dot, UUID> {
}
