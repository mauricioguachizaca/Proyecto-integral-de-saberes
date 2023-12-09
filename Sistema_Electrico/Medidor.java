import java.util.ArrayList;

public class Medidor {
    private String numeroMedidor;
    private Double registroConsumo;

    public Double calcularConsumoTotal() {
        return (double) 50.00;
    }

    Proveedor proveedor;

    ArrayList<DispositivoElectrico> dispositivoElectricoList;

    public Medidor(String numeroMedidor, Double registroConsumo, Proveedor proveedor) {
        this.numeroMedidor = numeroMedidor;
        this.registroConsumo = registroConsumo;
        this.proveedor = proveedor;
        this.dispositivoElectricoList = new ArrayList<DispositivoElectrico>();
    }

    public String getNumeroMedidor() {
        return numeroMedidor;
    }
    public Double getRegistroConsumo() {
        return registroConsumo;
    }
}
