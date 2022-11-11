const products = [
    {
        id: 1,
        name: 'Salvia, sahumerio limpiador',
        category: {
            name: "Rituales",
            id: 333
        },
        categoryId: 333,
        cost: 199,
        description: 'Herraienta perfecta para realizar rituales de conexión, limpieza y protección energética.',
        image: ['/images/sahumerios.jpg'],
        urlVer: "tienda/productos/sahumerios/",
        stock: 0
    },
    {
        id: 2,
        name: 'Vela de fuego, Luna Nueva',
        category: {
            name: "Rituales",
            id: 333
        },
        categoryId: 333,
        cost: 249,
        description: 'Activa tus sentidos con herramientas para el alma amorosa. De Soja',
        image: ['/images/maceta_cemento_plastico_reciclado.jpg'],
        urlVer: "tienda/productos/zafus-zabufon/",
        stock: 10
    },
    {
        id: 3,
        name: 'Kit de conexión: Aura en equilibrio',
        category: {
            name: "Rituales",
            id: 333
        },
        categoryId: 333,
        cost: 1679,
        description: 'Conecta con corazón de la Pachamama y enciende el poder de las plantas al danzar magia.',
        image: ['/images/maceta_cemento_plastico_reciclado.jpg'],
        urlVer: "tienda/productos/juego-basico-maceta-cemento/",
        stock: 15
    },
    {
        id: 4,
        name: 'Otoño en calma, sahumerio',
        category: {
            name: "Rituales",
            id: 333
        },
        categoryId: 333,
        cost: 229,
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: ['/images/maceta_cemento_plastico_reciclado.jpg'],
        urlVer: "tienda/productos/juego-basico-maceta-cemento/",
        stock: 33
    },
    {
        id: 5,
        name: 'Juego de zafu y zabutón',
        category: {
            name: "Yoga",
            id: 111
        },
        categoryId: 111,
        cost: 433,
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: ['/images/zafus_zabufon.jpg'],
        urlVer: "tienda/productos/zafus-zabufon/index.html",
        stock: 8
    },
    {
        id: 6,
        name: 'Shampoo sólido | Cero caspa',
        category: {
            name: "Cero waste",
            id: 222
        },
        categoryId: 222,
        cost: 35,
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: ['/images/maceta_cemento_plastico_reciclado.jpg'],
        urlVer: "tienda/productos/juego-basico-maceta-cemento/",
        stock: 45
    },
    {
        id: 7,
        name: 'Conectando con mi corazón',
        category: {
            name: "Talleres",
            id: 444
        },
        categoryId: 444,
        cost: 979,
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: ['/images/maceta_cemento_plastico_reciclado.jpg'],
        urlVer: "tienda/productos/juego-basico-maceta-cemento/",
        stock: 20
    },
    {
        id: 8,
        name: 'Taller: Tejiendo un Japamala',
        category: {
            name: "Talleres",
            id: 444
        },
        categoryId: 444,
        cost: 899,
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: ['/images/maceta_cemento_plastico_reciclado.jpg'],
        urlVer: "tienda/productos/juego-basico-maceta-cemento/",
        stock: 20
    },
    {
        id: 9,
        name: 'Clase: meditación y movimiento',
        category: {
            name: "Yoga",
            id: 111
        },
        categoryId: 111,
        cost: 108,
        description: 'Activa a través del cuerpo y la respiración permitiendo el fluir del corazón.',
        image: ['/images/zafus_zabufon.jpg'],
        urlVer: "tienda/productos/zafus-zabufon/index.html",
        stock: 8
    },
    {
        id: 10,
        name: 'Ceremonia de Cacao y Luna',
        category: {
            name: "Rituales",
            id: 333
        },
        categoryId: 333,
        cost: 555,
        description: 'Diciembre 22 | Navega tu existencia desde el corazón con la medicina del cacao. Una experiencia llena de magia. Meditaremos, danzaremos, cantaremos y nos habitaremos con amor.',
        image: ['/images/maceta_cemento_plastico_reciclado.jpg'],
        urlVer: "tienda/productos/juego-basico-maceta-cemento/",
        stock: 45
    }
];

module.exports = {
  products,
}