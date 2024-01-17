class Pedido {
  constructor(cantidad_empanadas, cantidad_cafe) {
    this.empanadas = cantidad_empanadas;
    this.cafe = cantidad_cafe;
  }

  total_ventas() {
    return this.empanadas * 20 + this.cafe * 5;
  }
}

class Bodega {
  constructor(cantidad_empanadas, cantidad_cafe) {
    this.empanadas = cantidad_empanadas;
    this.cafe = cantidad_cafe;
    this.acumulador_ventas = 0;

    this.pedidos = [];
  }

  metodo_procesar_pedido(pedido) {
    if (pedido.empanadas > this.empanadas || pedido.cafe > this.cafe) {
      alert("No hay suficientes ");
      return;
    }

    this.empanadas -= pedido.empanadas;
    this.cafe -= pedido.cafe;

    this.pedidos.push(pedido);
  }

  total_ventas() {
    this.pedidos.forEach((element) => {
      this.acumulador_ventas += element.total_ventas();
    });

    return this.acumulador_ventas;
  }
}
const bodega = new Bodega(20, 5);

const pedido1 = new Pedido(5, 3);
const pedido2 = new Pedido(2, 1);
const pedido3 = new Pedido(8, 3);
const pedido4 = new Pedido(4, 2);
const pedido5 = new Pedido(1, 0);

bodega.metodo_procesar_pedido(pedido1);

bodega.metodo_procesar_pedido(pedido2);

bodega.metodo_procesar_pedido(pedido3);

bodega.metodo_procesar_pedido(pedido4);

bodega.metodo_procesar_pedido(pedido5);

const salida = document.getElementById("salida");
salida.innerHTML = "venta total " + bodega.total_ventas();

const ct = document.getElementById("venta_total");
ct.innerHTML = "total de empanadas restantes " + bodega.empanadas;
