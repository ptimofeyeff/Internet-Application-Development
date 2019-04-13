import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;


@FacesConverter("yConverter")
public class YConverter implements Converter {


    @Override
    public Object getAsObject(FacesContext context, UIComponent component, String value) {
        value = value.trim().replace(",",".");
        double y = Double.parseDouble(value);
        //noinspection SuspiciousNameCombination
        y = roundTo3(y);
        return y;
    }

    @Override
    public String getAsString(FacesContext context, UIComponent component, Object value) {
        return value.toString();
    }

    private static double roundTo3(double x){
        x = x*1000;
        x = Math.round(x);
        x = x/1000;
        return x;
    }
}
