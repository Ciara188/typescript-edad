"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = new Date(fechaNacimiento);
    }
    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        const dia = hoy.getDate() - this.fechaNacimiento.getDate();
        if (mes < 0 || (mes === 0 && dia < 0)) {
            edad--;
        }
        return edad;
    }
    mostrarInfo() {
        console.log(`${this.nombre} tiene ${this.calcularEdad()} años.`);
    }
}
const persona1 = new Persona("Juan Pérez", "1990-05-15");
persona1.mostrarInfo();
const persona2 = new Persona("Ana Gómez", "2000-12-01");
persona2.mostrarInfo();
//# sourceMappingURL=app.js.map