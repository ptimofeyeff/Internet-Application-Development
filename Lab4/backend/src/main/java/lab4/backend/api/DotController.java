package lab4.backend.api;

import lab4.backend.Mapper;
import lab4.backend.database.DotRepository;
import lab4.backend.model.Dot;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.ValidationException;

@RestController
@RequestMapping("/api/dot")
@CrossOrigin
public class DotController {

    private Mapper mapper;
    private DotRepository dotRepository;

    public DotController(Mapper mapper, DotRepository dotRepository) {
        this.mapper = mapper;
        this.dotRepository = dotRepository;
    }

    @PostMapping
    public Dot saveDot(@RequestBody @Valid DotViewModel dotViewModel, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new ValidationException("Передаваемые данные точки не прошли валидацию на сервере");
        }

        Dot dotEntity = this.mapper.convertToDotEntity(dotViewModel);
        dotRepository.save(dotEntity);
        return dotEntity;
    }
}
