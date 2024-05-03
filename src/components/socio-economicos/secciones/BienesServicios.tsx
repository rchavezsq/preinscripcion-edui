import { Switch } from '@mantine/core'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: (data: any) => void
}

const OPCIONES = [
    {
        id: 1,
        nombre: 'Agua Potable',
    },
    {
        id: 2,
        nombre: 'Drenaje',
    },
    {
        id: 3,
        nombre: 'Electricidad',
    },
    {
        id: 4,
        nombre: 'Lavadora de Ropa',
    },
    {
        id: 5,
        nombre: 'Estufa de Gas',
    },
    {
        id: 6,
        nombre: 'Horno Microondas',
    },
    {
        id: 7,
        nombre: 'Refrigerador',
    },
    {
        id: 8,
        nombre: 'Linea Telefónica',
    },
    {
        id: 9,
        nombre: 'Computadora de Escritorio',
    },
    {
        id: 10,
        nombre: 'Laptop',
    },
    {
        id: 11,
        nombre: 'Tableta',
    },
    {
        id: 12,
        nombre: 'Internet',
    },
    {
        id: 13,
        nombre: 'Sky, Dish, Cable, etc.',
    },
    {
        id: 14,
        nombre: 'Secadora de Gas',
    },
]

export function BienesServicios({ datosIntroducidos, setDatosIntroducidos }: Props) {
    return (
        <div>
            <h1 className="text-center font-bold my-6">¿Con cuáles de los siguientes bienes y servicios cuenta tu vivienda?</h1>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2">
                {OPCIONES.map((opcion) => (
                    <Switch
                        key={opcion.id}
                        className="flex justify-end text-wrap"
                        size="lg"
                        label={opcion.nombre}
                        labelPosition="left"
                        onLabel="Si"
                        offLabel="No"
                        checked={datosIntroducidos[opcion.nombre.toLowerCase().replace(/ /g, '')]}
                        onChange={(event) =>
                            setDatosIntroducidos({
                                ...datosIntroducidos,
                                [opcion.nombre.toLowerCase().replace(/ /g, '')]: event.currentTarget.checked,
                            })
                        }
                    />
                ))}
            </div>
        </div>
    )
}
