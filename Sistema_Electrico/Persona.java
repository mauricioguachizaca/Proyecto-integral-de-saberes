public class Persona {
    private String nombre;
    private String apellido;
    private String direccion;
    private String ID;

    public Persona(String nombre, String apellido, String ID, String direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ID = ID;
        this.direccion = direccion;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getID() {
        return ID;
    }

    public String getDireccion() {
        return direccion;
    }

    public String getCedula() {
        return ID;
    }
}
