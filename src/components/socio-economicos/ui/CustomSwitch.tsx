import { Switch } from '@mantine/core'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: (data: any) => void
    pregunta: string
    opciones: { id: number; nombre: string }[]
}

export function CustomSwitch({ datosIntroducidos, setDatosIntroducidos, pregunta, opciones }: Props) {
    return (
        <>
            <h3 className="font-bold text-center mt-5 mb-2">{pregunta}</h3>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2">
                {opciones.map((opcion) => (
                    <Switch
                        key={opcion.id}
                        className="flex justify-end"
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
        </>
    )
}
