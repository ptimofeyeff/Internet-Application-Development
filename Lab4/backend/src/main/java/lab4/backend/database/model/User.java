package lab4.backend.database.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "usr")
public class User {

    @Id
    private UUID id;

    private String login;
    private String password;


    private User() {
        this.id = UUID.randomUUID();
    }

    public User(String login, String password) {
        this();
        this.login = login;
        this.password = password;
    }


    public UUID getId() {
        return id;
    }

    public String getUsername() {
        return login;
    }

    public String getPassword() {
        return password;
    }
}
