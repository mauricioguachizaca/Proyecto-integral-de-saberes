public class DispositivoElectrico {
    private final String nombreDispositivo;
    private final Double potenciaConsumida;
    private final Double tiempoUso;

    public Double calcularConsumo() {
        return potenciaConsumida * tiempoUso;
    }

    Medidor medidor;

    public DispositivoElectrico(String nombreDispositivo, Double potenciaConsumida, Double tiempoUso, Medidor medidor) {
        this.potenciaConsumida = potenciaConsumida;
        this.tiempoUso = tiempoUso;
        this.medidor = medidor;
        this.nombreDispositivo = null;
    }

    public String getNombre() {
        return nombreDispositivo;
    }

    public Double getTiempoUso() {
        return tiempoUso;
    }

    public Double getPotenciaConsumida() {
        return potenciaConsumida;
    }
}
