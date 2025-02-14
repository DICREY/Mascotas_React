// Fetchs


// Main arrays
export const productList = [
    {
        id: 1,
        name: "Dog Dish",
        img: "https://i.pinimg.com/564x/1d/1f/9a/1d1f9a2d6e6927d41551c70e72bd65eb.jpg",
        price: 5000,
        description: "It's a plate designed specifically for dogs to eat or drink. This object is made of plastic that is resistant to drops and minor scratches.",
        categories: "Food",
        for: ["Dogs"]
    },
    {
        id: 2,
        name: "Rubber Bone",
        img: "https://i.pinimg.com/564x/61/79/0b/61790b3731b71c011bb9cc19c7900990.jpg",
        price: 3000,
        description: "",
        categories: "Toy",
        for: ["Dogs"]
    },
    {
        id: 3,
        name: "Cyan Necklace",
        img: "https://i.pinimg.com/564x/8f/b2/25/8fb2258fa4e5b5ca702d16a851e63cd2.jpg",
        price: 10000,
        description: "",
        categories: "Clothes",
        for: ["Dogs"]
    },
    {
        id: 4,
        name: "Dog Pajamas",
        img: "https://i.pinimg.com/236x/29/26/94/2926948b4b142da056b1b6d8b68d9e4b.jpg",
        price: 20000,
        description: "",
        categories: "Clothes",
        for: ["Dogs"]
    },
    {
        id: 5,
        name: "Brown Necklace",
        img: "https://i.pinimg.com/236x/05/84/1a/05841aa7aa0771a98a61a4d492174518.jpg",
        price: 12000,
        description: "",
        categories: "Clothes",
        for: ["Dogs"]
    },
    {
        id: 6,
        name: "Bed Hot Dog",
        img: "https://i.pinimg.com/236x/aa/a6/01/aaa601284e586ab9913e200f742d2839.jpg",
        price: 18000,
        description: "",
        categories: "Tools",
        for: ["Dogs"]
    },
    {
        id: 7,
        name: "Feeder Elegant",
        img: "https://i.pinimg.com/564x/28/13/d8/2813d85fe22d258ec3104d0e60b9e592.jpg",
        price: 35000,
        description: "",
        categories: "Food",
        for: ["Dogs", "Cats"]
    },
    {
        id: 8,
        name: "Pet Bed",
        img: "https://i.pinimg.com/564x/cf/44/b0/cf44b03d8656641596a5d041c7a5064a.jpg",
        price: 40000,
        description: "",
        categories: "Tools",
        for: ["Dogs"]
    },
    {
        id: 9,
        name: "Bath Gloves",
        img: "https://i.pinimg.com/736x/86/63/f4/8663f4da97aeb47a234cbe588f113f18.jpg",
        price: 25000,
        description: "",
        categories: "Tools",
        for: ["Dogs"]
    },
    {
        id: 10,
        name: "Wipes",
        img: "https://i.pinimg.com/236x/b9/12/e6/b912e69222e68c80c385843c601d8f8e.jpg",
        price: 7000,
        description: "",
        categories: "Accessories",
        for: ["Dogs"]
    }
]

// Appointment Arrays
export const DateName = [
    ["It Write the date of appointment","text","date-appoint input","Date Appointment"],
    ["It Write the pet's name to find a appointment","text","pets-name input","Pet's Name"]
]
export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
export const daysAvailable = [
    {
        month: "November",
        year: 2024,
        days: [
            1,20,12,4,14,15
        ]
    },
    {
        month: "December",
        year: 2024,
        days: [
            6,7,10,13,14,15
        ]
    }
]
export const timesAvailable = [
    "6am - 7am","7am - 8am","8am - 9am","9am - 10am","10am - 11am"
]
export const listPets = [ 
    "Sammy","Rocky","Max","Simba"
]
export const listServices = [
    {
        name:"Vacunación",
        description: "Es un procedimiento esencial para proteger a las mascotas contra enfermedades infecciosas como el moquillo, parvovirus, rabia o leucemia felina. Durante el proceso, el veterinario evalúa el estado de salud del animal, aplica la vacuna correspondiente según su edad, especie y estilo de vida, y establece un calendario de refuerzos para mantener la inmunidad a largo plazo. Las vacunas no solo previenen enfermedades graves, sino que también contribuyen a la salud pública al reducir el riesgo de transmisión de zoonosis.",
        url: "https://cdn2.thecatapi.com/images/MTYwMzUxNg.jpg"
    },
    {
        name: "Consulta Veterinaria General",
        description: "Una consulta veterinaria general es el primer paso para evaluar la salud de tu mascota, prevenir problemas futuros y detectar enfermedades en etapas tempranas. Es un servicio esencial que todas las clínicas veterinarias ofrecen, y que debe realizarse de manera regular para garantizar el bienestar de tu compañero animal.",
        url: "https://cdn2.thecatapi.com/images/a2l.jpg"
    },
    {
        name: "Desparasitación",
        description: "La desparasitación en una veterinaria es un procedimiento esencial para mantener la salud de las mascotas y prevenir problemas que afectan tanto a los animales como a las personas. Consiste en eliminar parásitos internos (como lombrices) y externos (como pulgas y garrapatas) que pueden causar enfermedades graves si no se tratan.",
        url: "https://cdn2.thecatapi.com/images/MTUyOTY0OQ.jpg"
    },
    {
        name: "Limpieza Dental",
        description: "Es un procedimiento profesional que elimina la placa y el sarro acumulados en los dientes de las mascotas, ayudando a prevenir enfermedades bucales como gingivitis, periodontitis y mal aliento.Previene infecciones y pérdida dental.",
        url: "https://cdn2.thecatapi.com/images/MTgxNTAxOA.jpg"
    },
    {
        name: "Baño y Corte de Pelo",
        description: "El baño y corte de pelo en una veterinaria es un servicio profesional que garantiza la higiene, salud y apariencia de las mascotas,algunos beneficios son, la prevencion de problemas de piel y parásitos, mantener el pelaje saludable y sin enredos, contribuir al bienestar general y comodidad de la mascota.",
        url: "https://cdn2.thecatapi.com/images/0c9_EEtqQ.jpg"
    },
    {
        name: "Cirugía Menor",
        description: "La cirugía menor incluye procedimientos sencillos y de bajo riesgo, realizados generalmente de manera ambulatoria, como esterilizaciones, extracción de tumores pequeños, suturas de heridas superficiales y limpieza de abscesos. Estas intervenciones suelen implicar anestesia local o general según la complejidad, un corto tiempo de recuperación y monitoreo profesional para garantizar el bienestar del animal. Sus beneficios incluyen la prevención de problemas futuros, como infecciones o reproducción no deseada, y una mejora en la calidad de vida de la mascota, siendo menos invasivas y económicas que las cirugías mayores.",
        url: "https://cdn2.thecatapi.com/images/MTk4MTAxOQ.jpg"
    },
    {
        name: "Consulta de Emergencia",
        description: "La consulta de emergencia esta destinada a atender situaciones urgentes que ponen en riesgo la vida o salud de una mascota, como accidentes, heridas graves, intoxicaciones, dificultad para respirar, convulsiones o fiebre alta. En estos casos, el veterinario realiza una evaluación rápida y prioritaria para estabilizar al animal, identificar la causa del problema y aplicar el tratamiento necesario, que puede incluir medicamentos, fluidoterapia, curas o incluso cirugía inmediata. Este servicio es vital para actuar con rapidez y aumentar las posibilidades de recuperación en casos críticos.",
        url: "https://cdn2.thecatapi.com/images/cjt.jpg"
    }
]
export const listVeterinarys = [
    {
        name: "Luis",
        lastName: "Rodríguez"
    },
    {
        name: "Carlos",
        lastName: "Martínez"
    },
    {
        name: "Daniel",
        lastName: "Jiménez"
    },
    {
        name: "Camila",
        lastName: "Reyes"
    },
]
// Login Arrays 
export const usersList = [
    {
        email: "cristianarrietar4@gmail.com",
        password: "cristian123"
    },
    {
        email: "davidarrieta@gmail.com",
        password: "david123"
    }
]
export const dataUser = [
    {
        email: "cristianarrietar4@gmail.com",
        name: "cristian",
        pastPassword: [
            "cristian123","cristian2025#","cristian2024"
        ]
    }
]