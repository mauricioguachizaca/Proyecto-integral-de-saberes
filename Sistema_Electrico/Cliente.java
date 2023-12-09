import java.util.ArrayList;

public class Cliente extends Persona{

    public Cliente(String nombre, String apellido, String ID, String direccion) {
        super(nombre, apellido, ID, direccion);
    }

    ArrayList<Factura> facturaList;
    Medidor medidor;

}
