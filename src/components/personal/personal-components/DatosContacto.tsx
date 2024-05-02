import { Input, InputBase } from '@mantine/core'
import React from 'react'
import { IMaskInput } from 'react-imask'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: any
    errorCampoRequerido: string
}

export function DatosContacto({ datosIntroducidos, errorCampoRequerido, setDatosIntroducidos }: Props) {
    const handleChange = (e: any) => {
        setDatosIntroducidos({
            ...datosIntroducidos,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="my-5">
            <div className="flex flex-col md:flex-row gap-2 py-2">
                <InputBase
                    className="w-full"
                    name="calle"
                    label="Calle"
                    onChange={handleChange}
                    value={datosIntroducidos.calle}
                    error={errorCampoRequerido !== '' && datosIntroducidos.calle === '' ? errorCampoRequerido : ''}
                    required
                />

                <InputBase
                    className="w-full"
                    name="colonia"
                    label="Colonia"
                    onChange={handleChange}
                    value={datosIntroducidos.colonia}
                    error={errorCampoRequerido !== '' && datosIntroducidos.colonia === '' ? errorCampoRequerido : ''}
                    required
                />
            </div>

            <div className="flex flex-col md:flex-row gap-2 py-2">
                <InputBase
                    className="w-full"
                    name="numeroExterior"
                    label="Número Exterior"
                    onChange={handleChange}
                    value={datosIntroducidos.numeroExterior}
                    error={errorCampoRequerido !== '' && datosIntroducidos.numeroExterior === '' ? errorCampoRequerido : ''}
                    required
                />
                <InputBase
                    className="w-full"
                    name="numeroInterior"
                    label="Número Interior"
                    value={datosIntroducidos.numeroInterior}
                    onChange={handleChange}
                />
                <InputBase
                    className="w-full"
                    name="codigoPostal"
                    label="Código Postal"
                    onChange={handleChange}
                    value={datosIntroducidos.codigoPostal}
                    error={errorCampoRequerido !== '' && datosIntroducidos.codigoPostal === '' ? errorCampoRequerido : ''}
                    required
                />
            </div>

            <div className="flex flex-col md:flex-row gap-2 py-2">
                <Input.Wrapper label="Teléfono de Casa" className="w-full">
                    <InputBase
                        name="telefonoCasa"
                        component={IMaskInput}
                        mask="(000) 000-0000"
                        onChange={handleChange}
                        value={datosIntroducidos.telefonoCasa}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Teléfono Celular" required className="w-full">
                    <InputBase
                        name="telefonoCelular"
                        component={IMaskInput}
                        mask="(000) 000-0000"
                        onChange={handleChange}
                        value={datosIntroducidos.telefonoCelular}
                        error={errorCampoRequerido !== '' && datosIntroducidos.telefonoCelular === '' ? errorCampoRequerido : ''}
                    />
                </Input.Wrapper>
            </div>

            <div>
                <h2 className="py-5 text-pretty">
                    Por favor, ingresa un <span className="font-bold">correo electrónico válido</span> ya que será utilizado en los procesos de esta
                    institución como lo son:
                    <ul className="list-disc pl-8">
                        <li>Becas</li>
                        <li>Trámites Escolares</li>
                    </ul>
                </h2>
                <InputBase
                    name="correo"
                    label="Correo Electrónico"
                    onChange={handleChange}
                    value={datosIntroducidos.correo}
                    error={errorCampoRequerido !== '' && datosIntroducidos.correo === '' ? errorCampoRequerido : ''}
                    required
                />
            </div>
        </div>
    )
}
