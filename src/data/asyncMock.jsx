
export const productos = [
  {
    id: 1,
    nombre: "Test de Personalidad Eneagramático",
    precio: 15,
    categoria: "Tests",
    stock: 5,
    descripcion:
      "Descubre más sobre ti mismo con nuestro test de personalidad eneagramático. Obtén insights valiosos y reflexiona sobre tu crecimiento personal.",
    img: "https://www.viventi.es/wp-content/uploads/2015/05/eneagrama.jpg",
  },
  {
    id: 2,
    nombre: "Curso de Desarrollo Personal",
    precio: 130,
    categoria: "Cursos",
    stock: 5,
    descripcion:
      "Participa en nuestro curso de desarrollo personal. Aprende técnicas y herramientas prácticas para mejorar tu bienestar emocional y mental.",
    img: "https://ilcacademy.com/wp-content/uploads/2022/03/post_thumbnail-697a424fb26f532d1b16c1c8a57ba4f4-1100x619.jpeg",
  },
  {
    id: 3,
    nombre: "Suscripción Mensual - Programa de Mindfulness",
    precio: 20,
    categoria: "Suscripciones",
    stock: 5,
    descripcion:
      "Únete a nuestro programa mensual de mindfulness. Recibe contenido exclusivo, meditaciones guiadas y actividades para cultivar la paz interior.",
    img: "https://acdn.mitiendanube.com/stores/944/335/products/4181-ba681e6c1fd38d3ed816651113884723-1024-1024.jpg",
  },
  {
    id: 4,
    nombre: "Test de Psicología Positiva",
    precio: 10,
    categoria: "Tests",
    stock: 5,
    descripcion:
      "Viste con optimismo nuestro remeron con mensajes positivos. ¡Comparte mensajes inspiradores y fomenta un ambiente positivo!",
    img: "https://i0.wp.com/www.informapsicologia.com/wp-content/uploads/2020/05/012-psicologia-positiva.jpg?w=1080&ssl=1",
  },
  {
    id: 5,
    nombre: "Curso de Mindfulness",
    precio: 149,
    categoria: "Cursos",
    stock: 5,
    descripcion:
      "Camina con atención plena usando nuestras zapatillas de mindfulness. Diseñadas para la comodidad y la conexión con el presente.",
    img: "https://cdn-3.expansion.mx/dims4/default/acd9edf/2147483647/strip/true/crop/733x476+0+0/resize/1200x779!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F2c%2F36%2Ffae2e56848cdb94317c374e254b1%2Fistock-1328684881.jpg",
  },
  {
    id: 6,
    nombre: "Suscripción Anual - Programa de Autoconocimiento",
    precio: 99,
    categoria: "Suscripciones",
    stock: 5,
    descripcion:
      "Sumérgete en un viaje de autoconocimiento con nuestra suscripción anual. Recibe recursos exclusivos para explorar tu mente y emociones.",
    img: "https://www.desatatupotencial.org/wp-content/uploads/2022/03/autoconocimiento.png",
  },
];

  export default productos;

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((prod) => prod.id === Number(id)));
      }, 2000);
    });
  };

  export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(productos.filter((prod) => prod.categoria === category))
      }, 2000)
    });
  };

  