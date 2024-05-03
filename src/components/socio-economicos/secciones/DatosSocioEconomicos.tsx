import { Radio } from '@mantine/core'
import { RadioGroup } from '../ui'

interface Props {
    datosIntroducidos: any
    handleChange: (data: any) => void
}

const PREGUNTAS = [
    {
        name: 'casa',
        label: 'La casa donde vives es:',
        opciones: ['Propia', 'Rentada', 'Prestada', 'Otro'],
        labelRadio: ['Propia', 'Rentada', 'Prestada', 'Otro'],
    },
    {
        name: 'tipoCasa',
        label: 'Tipo de vivienda:',
        opciones: ['Casa', 'Departamento', 'Vecindad', 'Otro'],
        labelRadio: ['Casa', 'Departamento', 'Vecindad', 'Otro'],
    },
    {
        name: 'tipoParedes',
        label: 'Las paredes son de:',
        opciones: ['Bloque', 'Madera', 'Lámina', 'Otro'],
        labelRadio: ['Bloque', 'Madera', 'Lámina', 'Otro'],
    },
    {
        name: 'piso',
        label: 'El piso es de:',
        opciones: ['Loseta', 'Cemento', 'Madera', 'Otro'],
        labelRadio: ['Loseta', 'Cemento', 'Madera', 'Otro'],
    },
    {
        name: 'tipoTecho',
        label: 'El techo es de:',
        opciones: ['Concreto', 'Lámina', 'Madera', 'Otro'],
        labelRadio: ['Concreto', 'Lámina', 'Madera', 'Otro'],
    },
]

export function DatosSocioEconomicos({ datosIntroducidos, handleChange }: Props) {
    return (
        <div>
            <h1 className="text-center font-bold my-2">Completa tus datos Socio-Económicos</h1>
            <div className="my-2">
                {PREGUNTAS.map((pregunta, index) => (
                    <RadioGroup key={index} datosIntroducidos={datosIntroducidos} handleChange={handleChange} {...pregunta} />
                ))}
            </div>
        </div>
    )
}
