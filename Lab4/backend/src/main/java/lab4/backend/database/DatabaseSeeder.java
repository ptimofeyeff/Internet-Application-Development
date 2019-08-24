package lab4.backend.database;

import lab4.backend.database.model.Dot;
import lab4.backend.database.model.User;
import lab4.backend.database.repo.DotRepository;
import lab4.backend.database.repo.UserRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(value = "database.recreate", havingValue = "true")
public class DatabaseSeeder implements CommandLineRunner {

    private DotRepository dotRepository;
    private UserRepository userRepository;

    public DatabaseSeeder(DotRepository dotRepository, UserRepository userRepository) {
        this.dotRepository = dotRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        this.dotRepository.deleteAll();
        this.userRepository.deleteAll();;

        User defaultUser = new User("a", DigestUtils.md5Hex("a"));
        this.userRepository.save(defaultUser);

        Dot defaultDot = new Dot(1,2,3);
        this.dotRepository.save(defaultDot);

        System.out.println("Initialized databased");
    }
}
