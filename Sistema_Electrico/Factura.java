import java.util.ArrayList;

public class Factura {
    private String numeroFactura;
    private String fechaEmision;
    private Double IVA;
    private Double total;

    public double pagar(){
        return total + IVA;
    }

    Cliente cliente;
    Proveedor proveedor;

    ArrayList<Medidor> medidorList;
public Factura(String numeroFactura, String fechaEmision, Double IVA, Double total, Cliente cliente, Proveedor proveedor) {
        this.numeroFactura = numeroFactura;
        this.fechaEmision = fechaEmision;
        this.IVA = IVA;
        this.total = total;
        this.cliente = cliente;
        this.proveedor = proveedor;
        this.medidorList = new ArrayList<Medidor>();
    }

    public String getNumeroFactura() {
        return numeroFactura;
    }

    public String getFechaEmision() {
        return fechaEmision;
    }

    public Double getIVA() {
        return IVA;
    }

    public Double getTotal() {
        return total;
    }
}

