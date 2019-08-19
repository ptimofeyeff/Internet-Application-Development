package lab4.backend.database;

import lab4.backend.model.Dot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DotRepository extends JpaRepository<Dot, UUID> {
}
