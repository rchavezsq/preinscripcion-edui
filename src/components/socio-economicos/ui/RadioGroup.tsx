import { Radio } from '@mantine/core'

interface Props {
    datosIntroducidos: any
    handleChange: (data: any) => void
    name: string
    label: string
    opciones: string[]
    labelRadio: string[]
}

export function RadioGroup({ datosIntroducidos, handleChange, label, labelRadio, name, opciones }: Props) {
    return (
        <Radio.Group
            value={datosIntroducidos[name]}
            onChange={(e) => {
                const data = { [name]: e }
                handleChange(data)
            }}
            name={name}
            label={label}
        >
            <div className="flex flex-col md:flex-row gap-2 pt-4 pb-6">
                {opciones.map((opcion, index) => (
                    <Radio key={index} className="flex-1" value={opcion} label={labelRadio[index]} />
                ))}
            </div>
        </Radio.Group>
    )
}
