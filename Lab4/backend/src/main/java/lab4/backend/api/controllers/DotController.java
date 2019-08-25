package lab4.backend.api.controllers;

import lab4.backend.Mapper;
import lab4.backend.api.DotViewModel;
import lab4.backend.database.repo.DotRepository;
import lab4.backend.database.model.Dot;
import lab4.backend.database.repo.UserRepository;
import lab4.backend.secure.UserNotFoundException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.ValidationException;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/dot")
@CrossOrigin
public class DotController {

    private Mapper mapper;
    private DotRepository dotRepository;
    private UserRepository userRepository;

    public DotController(Mapper mapper, DotRepository dotRepository, UserRepository userRepository) {
        this.mapper = mapper;
        this.dotRepository = dotRepository;
        this.userRepository = userRepository;
    }

    @PostMapping
    public DotViewModel saveDot(@RequestBody @Valid DotViewModel dotViewModel, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new ValidationException("Передаваемые данные точки не прошли валидацию на сервере");
        }

        if (userRepository.findByLogin(dotViewModel.getUser())==null){
            throw new UserNotFoundException();
        }

        Dot dotEntity = this.mapper.convertToDotEntity(dotViewModel);
        dotRepository.save(dotEntity);
        dotViewModel.setHit(dotEntity.isHit());
        return dotViewModel;
    }
    
    @GetMapping
    public Iterable<DotViewModel> getDots(){
        Iterable<Dot> dots = dotRepository.findAll();
        ArrayList<DotViewModel> dotViewModels = new ArrayList<>();
        dots.forEach(dot -> {
            dotViewModels.add(new DotViewModel(
                    dot.getX(),
                    dot.getY(),
                    dot.getRadius(),
                    dot.getUser().getUsername(),
                    dot.isHit()
            ));
        });
        return dotViewModels;
    }

}
