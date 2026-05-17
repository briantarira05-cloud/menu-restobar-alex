const MENU_DATA = {
    tapasFrias: {
        title: "Tapas Frías",
        icon: "fa-ice-cream",
        items: [
            { name: "Jamón ibérico", price: 15.00, desc: "" },
            { name: "Boquerones en vinagre", price: 7.50, desc: "¡Novedad de la casa!", badge: "NUEVO" },
            { name: "Queso semi", price: 5.00, desc: "" },
            { name: "Queso curado", price: 8.50, desc: "" },
            { name: "Ensaladilla rusa", price: 4.50, desc: "" },
            { name: "Olivas rellenas", price: 2.60, desc: "" },
            { name: "Olivas aliñadas", price: 2.40, desc: "" },
            { name: "Bolsa patatas chips", price: 1.90, desc: "" },
            { name: "Pan de coca con tomate (4ud)", price: 2.50, desc: "" },
            { name: "Cesta de pan", price: 1.00, desc: "" }
        ]
    },
    tapasCalientes: {
        title: "Tapas Calientes y Raciones",
        icon: "fa-fire",
        items: [
            { name: "Oreja a la gallega / Oreja", price: 8.50, desc: "" },
            { name: "Pimientos de padrón", price: 6.00, desc: "" },
            { name: "Tortilla de patatas", price: 4.50, desc: "" },
            { name: "Sepia plancha", price: 11.50, desc: "" },
            { name: "Morro / Morros", price: 8.50, desc: "" },
            { name: "Alitas (6ud) / Alitos", price: 7.50, desc: "" },
            { name: "Nuggets pollo", price: 5.50, desc: "" },
            { name: "Calamares andaluza", price: 11.50, desc: "" },
            { name: "Chocos", price: 11.50, desc: "" },
            { name: "Tequeños de queso (6ud)", price: 8.50, desc: "Tequeños de Queso, Avellana y Chocolate" },
            { name: "Rejos", price: 11.50, desc: "" },
            { name: "Lacón a la gallega", price: 8.50, desc: "" },
            { name: "Fingers de pollo", price: 7.90, desc: "" },
            { name: "Pescadito Frito", price: 7.50, desc: "" },
            { name: "Carne en salsa", price: 6.50, desc: "" },
            { name: "Bravas", price: 5.50, desc: "" },
            { name: "Patatas fritas", price: 5.00, desc: "" },
            { name: "Pinchos morunos", price: 8.50, desc: "" },
            { name: "Cochinillo", price: 8.90, desc: "" },
            { name: "Callos", price: 7.50, desc: "" },
            { name: "Calamares romana", price: 9.90, desc: "" },
            { name: "Croquetas (4ud)", price: 6.80, desc: "Surtido de Croquetas: 4 unidades a elegir entre pollo, jamón, cabrales, chipirón, rabo de toro o buey" },
            { name: "Huevos rotos con Jamón", price: 9.50, desc: "" },
            { name: "Huevos rotos con chistorra", price: 7.50, desc: "" },
            { name: "Chistorra", price: 7.50, desc: "" },
            { name: "Torreznos de Soria", price: 8.90, desc: "" },
            { name: "Bomba de patatas rellena de carne (1ud)", price: 3.50, desc: "" },
            { name: "Patatas \"Restobar\"", price: 10.50, desc: "Patatas crujientes acompañadas de queso cheddar fundido, jugoso pollo frito, cebolla crujiente y deliciosa salsa BBQ.", badge: "NUEVO" }
        ]
    },
    hamburguesas: {
        title: "Nuestras Hamburguesas",
        subtitle: "Todas servidas en exquisito pan de brioche",
        icon: "fa-hamburger",
        items: [
            { name: "LA COMPLETA", price: 11.00, desc: "Hamburguesa 180 gr, huevo, bacon, tomate, queso cheddar, lechuga, mayonesa y ketchup." },
            { name: "LA SMASH", price: 9.00, desc: "Hamburguesa smash, queso cheddar, bacon y mayonesa trufada." },
            { name: "LA PULLED", price: 12.50, desc: "Hamburguesa 180 gr, queso cheddar, bacon, pulled pork bbq y mayonesa." },
            { name: "LA MOJONA", price: 12.50, desc: "Hamburguesa 180 gr, queso cheddar, bacon, pepinillos y cebolla crujiente en salsa cheddar." },
            { name: "LA CRISPY", price: 10.00, desc: "Pechuga crujiente, queso cheddar, bacon, lechuga, tomate y salsa bbq." },
            { name: "LA CABRONA", price: 12.50, desc: "Hamburguesa 180 gr, queso cabra, tomate, cebolla caramelizada, lechuga y mermelada de fresa." }
        ]
    },
    novedades: {
        title: "Novedades / Hamburguesas Nuevas",
        subtitle: "Las últimas incorporaciones estrella de nuestra carta",
        icon: "fa-star",
        items: [
            { name: "BURGUER \"RESTOBAR\"", price: 11.90, desc: "Smash burger, queso cheddar, carrillera melosa en su salsa, pepinillos y salsa Restobar secreta.", badge: "TOP 🆕" },
            { name: "BURGUER \"LA SETE\" / \"LA NUEVA\"", price: 10.50, desc: "Smash burger, queso cheddar, crujiente beicon y pimiento caramelizado artesanal.", badge: "NUEVO" },
            { name: "MOLLETE", price: 6.50, desc: "Tierno mollete relleno de carrillera melosa, col encurtida y salsa especial Restobar.", badge: "¡PRUÉBALO!" }
        ]
    },
    bocadillosFrios: {
        title: "Bocadillos Fríos",
        icon: "fa-bread-slice",
        items: [
            { name: "Fuet", price: 3.60, desc: "" },
            { name: "Chorizo", price: 3.60, desc: "" },
            { name: "Jamón ibérico", price: 8.00, desc: "" },
            { name: "Atún", price: 3.60, desc: "" },
            { name: "Jamón dulce", price: 3.10, desc: "" },
            { name: "Queso semi", price: 3.60, desc: "" },
            { name: "Queso curado", price: 4.60, desc: "" },
            { name: "Vegetal atún", price: 5.50, desc: "" }
        ]
    },
    bocadillosCalientes: {
        title: "Bocadillos Calientes",
        subtitle: "💡 Suplementos en bocadillos: Queso o bacon (+1€) | Huevo (+1€) | Pimientos (+1€) | Cebolla (+1€)",
        icon: "fa-hotdog",
        items: [
            { name: "Lomo", price: 4.00, desc: "" },
            { name: "Pollo", price: 4.50, desc: "" },
            { name: "Bacon", price: 4.00, desc: "" },
            { name: "Lacón", price: 4.50, desc: "" },
            { name: "Bikini", price: 3.50, desc: "" },
            { name: "Tortilla de patatas", price: 4.00, desc: "" },
            { name: "Tortilla francesa", price: 4.00, desc: "" },
            { name: "Pinchos", price: 5.80, desc: "" },
            { name: "Cochinillo", price: 6.00, desc: "" },
            { name: "Hamburguesa", price: 5.80, desc: "" },
            { name: "Chistorra", price: 4.00, desc: "" },
            { name: "Frankfurt casa Vallés", price: 3.50, desc: "" },
            { name: "Hamburguesa Moruna", price: 4.50, desc: "" },
            { name: "Cervela", price: 3.80, desc: "Exquisito embutido Cervela cocinado a la plancha.", badge: "NUEVO" }
        ]
    },
    ensaladas: {
        title: "Ensaladas",
        icon: "fa-leaf",
        items: [
            { name: "Queso de cabra", price: 9.50, desc: "Fresca lechuga, tomate jugoso, rulo de queso de cabra caramelizado y crujiente de jamón." },
            { name: "Verde", price: 7.50, desc: "Lechuga, tomate cherry, olivas sabrosas, maíz dulce, cebolla roja y pimientos tricolor." },
            { name: "César", price: 9.50, desc: "Crujiente lechuga, tomate fresco, sabroso pollo crujiente, picatostes dorados y salsa César especial." },
            { name: "Atún", price: 8.90, desc: "Lechuga seleccionada, atún, tomate, huevo duro, cebolla roja picada y olivas verdes." }
        ]
    },
    platosCombinados: {
        title: "Platos Combinados y Ofertas",
        icon: "fa-utensils",
        items: [
            { name: "Plato 1: Sepia, verdura plancha y patatas", price: 15.00, desc: "" },
            { name: "Plato 2: Entrecot (350gr), pimientos de padrón y patatas", price: 18.00, desc: "" },
            { name: "Plato 3: Hamburguesa, 2 huevos, bacon y patatas", price: 11.90, desc: "¡Actualizado con el incremento de +1,40€!" },
            { name: "Plato 4: Pollo o lomo plancha, ensalada o patatas y pimientos de padrón", price: 11.90, desc: "¡Actualizado con el incremento de +1,40€!" },
            { name: "Plato 5: Bistec, 2 huevos, bacon y patatas", price: 11.90, desc: "¡Actualizado con el incremento de +1,40€!" },
            { name: "Plato 6: Secreto adobado, 2 huevos, bacon y patatas", price: 12.90, desc: "¡Actualizado con el incremento de +1,40€!" },
            { name: "EL ESPECIAL AVENIDA", price: 10.50, desc: "Crujientes patatas fritas cubiertas de queso cheddar fundido, con bacon crujiente o jugoso pulled pork." },
            { name: "OFERTA CHULETÓN", price: 50.00, desc: "Espectacular Chuletón de ternera gallega de 1 kg a la piedra, acompañado de 2 sabrosas tapas y botella de vino de la casa." }
        ]
    },
    carnes: {
        title: "Carnes Premium",
        subtitle: "🍖 Todos los platos se sirven acompañados con patatas y/o pimientos de Padrón",
        icon: "fa-drumstick-bite",
        items: [
            { name: "Rabo Vacuno en Salsa", price: null, desc: "Sujeto a mercado / Precio a consultar" },
            { name: "Lagarto de Cerdo", price: null, desc: "Sujeto a mercado / Precio a consultar" },
            { name: "Pluma de Cerdo Ibérico", price: null, desc: "Sujeto a mercado / Precio a consultar" },
            { name: "Presa de Cerdo Ibérico", price: null, desc: "Sujeto a mercado / Precio a consultar" },
            { name: "Solomillo al Roquefort", price: null, desc: "Sujeto a mercado / Precio a consultar" },
            { name: "Lomo al Roquefort", price: null, desc: "Sujeto a mercado / Precio a consultar" }
        ]
    }
};
