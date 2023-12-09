import java.sql.SQLOutput;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        Proveedor p1 = new Proveedor(0.12);
        Cliente c1 = new Cliente("Juan", "Perez", "123456789", "San Jose");
        Medidor m1 = new Medidor("123456789", 50.00, p1);
        Factura f1 = new Factura("123456789", "25/11/2023", 0.12, 100.0, c1, p1);
        DispositivoElectrico d1 = new DispositivoElectrico("Lampara", 50.0, 3.0, m1);
        p1.facturaList.add(f1);
        f1.medidorList.add(m1);
        m1.dispositivoElectricoList.add(d1);
        f1.medidorList.add(m1);
        d1.medidor = m1;
        System.out.println("Cliente: " + f1.cliente.getNombre() + " " + f1.cliente.getApellido());
        System.out.println("Cedula: " + f1.cliente.getCedula());
        System.out.println("Direccion: " + f1.cliente.getDireccion());
        System.out.println("Factura: " + f1.getNumeroFactura());
        System.out.println("Fecha: " + f1.getFechaEmision());
        System.out.println("IVA: " + f1.getIVA());
        System.out.println("Total: " + f1.getTotal());
        System.out.println("El monto a pagar es: " + f1.pagar());
        System.out.println("Tarifa: " + f1.proveedor.getTarifa());
        System.out.println("Proveedor: " + f1.proveedor.getNombre());
        System.out.println("Medidor: " + m1.getNumeroMedidor());
        System.out.println("El consumo total es: " + m1.calcularConsumoTotal());
        System.out.println("Dispositivo: " + d1.getNombre());
        System.out.println("Potencia Consumida: " + d1.getPotenciaConsumida());
        System.out.println("Tiempo de Uso: " + d1.getTiempoUso());
    }
}
