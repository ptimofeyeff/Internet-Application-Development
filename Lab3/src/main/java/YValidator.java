import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("yValidator")
@ManagedBean
public class YValidator implements Validator {


    @Override
    public void validate(FacesContext context, UIComponent component, Object value) throws ValidatorException {
        try {
            double y = (Double) value;
            if (y <= -3 || y >= 3){
                throw new ClassCastException();
            }
        }catch (ClassCastException e){
            throw new ValidatorException(new FacesMessage());
        }
    }
}
