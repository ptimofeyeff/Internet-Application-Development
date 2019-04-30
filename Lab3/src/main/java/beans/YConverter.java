package beans;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.ConverterException;

public class YConverter implements Converter {


    @Override
    public Object getAsObject(FacesContext context, UIComponent component, String value) {
        try {
            value = value.trim();
            if(!value.equals("")) {
                value = value.replace(",",".");
                double y = Double.parseDouble(value);
                //noinspection SuspiciousNameCombination
                y = roundTo3(y);
                return y;
            }else {
                throw new ConverterException();
            }
        }catch (NumberFormatException e){
            throw new ConverterException();
        }
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
