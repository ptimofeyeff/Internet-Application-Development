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

        User defaultUser1 = new User("a", DigestUtils.md5Hex("a"));
        this.userRepository.save(defaultUser1);

        User defaultUser2 = new User("b", DigestUtils.md5Hex("b"));
        this.userRepository.save(defaultUser2);

        Dot defaultDot1 = new Dot(1,2,3, defaultUser1);
        this.dotRepository.save(defaultDot1);

        Dot defaultDot2 = new Dot(3,1,4, defaultUser2);
        this.dotRepository.save(defaultDot2);

        System.out.println("Initialized databased");
    }
}
