import java.util.ArrayList;

public class Proveedor {
    private Double tarifa;

    public Double getTarifa() {
        return tarifa;
    }

    ArrayList<Factura> facturaList;
    ArrayList<Medidor> medidorList;

    public Proveedor(Double tarifa) {
        this.tarifa = tarifa;
        this.facturaList = new ArrayList<Factura>();
        this.medidorList = new ArrayList<Medidor>();
    }

    public String getNombre() {
        return "Proveedor";
    }
}
