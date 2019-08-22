package lab4.backend.api.controllers;

import lab4.backend.api.UserViewModel;
import lab4.backend.database.model.User;
import lab4.backend.database.repo.UserRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.ValidationException;

@RestController
@RequestMapping("api/login")
@CrossOrigin
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping
    public boolean checkUser(@RequestBody @Valid UserViewModel user, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new ValidationException("Отправленный юзер не прошел валидацию на сервере");
        }

        User userEntity = userRepository.findByLogin(user.getLogin());
        return ((userEntity != null) &&
                userEntity.getPassword().equals(DigestUtils.md5Hex(user.getPassword())));


    }

}
