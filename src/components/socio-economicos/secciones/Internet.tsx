import { Switch } from '@mantine/core'
import { CustomSwitch } from '../ui'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: (data: any) => void
}

const OPCIONES_LUGARES = [
    {
        id: 1,
        nombre: 'Casa',
    },
    {
        id: 2,
        nombre: 'Café internet',
    },
    {
        id: 3,
        nombre: 'Escuela',
    },
    {
        id: 4,
        nombre: 'Casa de amigo o familiar',
    },
    {
        id: 5,
        nombre: 'Trabajo',
    },
    {
        id: 6,
        nombre: 'Otro',
    },
]

const OPCIONES_USO_INTERNET = [
    {
        id: 1,
        nombre: 'Jugar',
    },
    {
        id: 2,
        nombre: 'Correo Electronico',
    },
    {
        id: 3,
        nombre: 'Banca por internet',
    },
    {
        id: 4,
        nombre: 'Redes sociales',
    },
    {
        id: 5,
        nombre: 'Buscar amigos',
    },
    {
        id: 6,
        nombre: 'Foros de discusión',
    },
    {
        id: 7,
        nombre: 'Escuchar o leer noticias',
    },
    {
        id: 8,
        nombre: 'Ver videos',
    },
    {
        id: 9,
        nombre: 'Buscar pareja',
    },
    {
        id: 10,
        nombre: 'Buscar y recibir información',
    },
    {
        id: 11,
        nombre: 'Descargar software',
    },
    {
        id: 12,
        nombre: 'Bajar o ver películas',
    },
    {
        id: 13,
        nombre: 'Bajar o escuchar música',
    },
    {
        id: 14,
        nombre: 'Buscar empleo',
    },
    {
        id: 15,
        nombre: 'Comprar en línea',
    },
    {
        id: 16,
        nombre: 'Ver páginas para adultos',
    },
    {
        id: 17,
        nombre: 'Llamadas (tipo Skype)',
    },
]

const OPCIONES_REDES_SOCIALES = [
    {
        id: 1,
        nombre: 'Correo electrónico',
    },
    {
        id: 2,
        nombre: 'Canal de YouTube',
    },
    {
        id: 3,
        nombre: 'Red social (Facebook, etc.)',
    },
]

const OPCIONES_USO_REDES_SOCIALES = [
    {
        id: 1,
        nombre: 'Comunicarte',
    },
    {
        id: 2,
        nombre: 'Entretenimiento',
    },
    {
        id: 3,
        nombre: 'Relaciones de amistad',
    },
    {
        id: 4,
        nombre: 'Buscar amigos',
    },
    {
        id: 5,
        nombre: 'Relaciones profesionales',
    },
    {
        id: 6,
        nombre: 'Intercambiar información',
    },
    {
        id: 7,
        nombre: 'Buscar pareja',
    },
    {
        id: 8,
        nombre: 'Trabajos Escolares',
    },
]

const OPCIONES = [
    {
        pregunta: '¿En qué lugares tienes acceso a internet?',
        opciones: OPCIONES_LUGARES,
    },
    {
        pregunta: '¿Para qué utilizas el internet?',
        opciones: OPCIONES_USO_INTERNET,
    },
    {
        pregunta: '¿Tienes...?',
        opciones: OPCIONES_REDES_SOCIALES,
    },
    {
        pregunta: '¿Para qué lo(s) utilizas?',
        opciones: OPCIONES_USO_REDES_SOCIALES,
    },
]

export function Internet({ datosIntroducidos, setDatosIntroducidos }: Props) {
    return (
        <>
            {/* <h1 className="text-xl font-bold text-center mt-5 mb-2">Internet</h1> */}
            {OPCIONES.map((opcion) => (
                <CustomSwitch
                    key={opcion.pregunta}
                    datosIntroducidos={datosIntroducidos}
                    setDatosIntroducidos={setDatosIntroducidos}
                    pregunta={opcion.pregunta}
                    opciones={opcion.opciones}
                />
            ))}
        </>
    )
}
