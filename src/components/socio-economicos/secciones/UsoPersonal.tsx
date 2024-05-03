import { delegaciones, gruposIndigenas, horas, unoSeis } from '@/libs/datos'
import { Input, InputBase, NativeSelect, Switch } from '@mantine/core'
import { IMaskInput } from 'react-imask'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: (data: any) => void
    errorCampoRequerido: string
}

export function UsoPersonal({ datosIntroducidos, setDatosIntroducidos, errorCampoRequerido }: Props) {
    const handleChange = (e: any) => {
        setDatosIntroducidos({
            ...datosIntroducidos,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div>
            <h1 className="font-bold text-center mt-8 mb-2">Para tu uso personal cuentas con...</h1>
            <div className="flex flex-col md:flex-row gap-2 py-2 ">
                <Switch
                    className="w-full flex justify-end"
                    size="lg"
                    label="Tableta"
                    labelPosition="left"
                    onLabel="Si"
                    offLabel="No"
                    checked={datosIntroducidos.tabletaPersonal}
                    onChange={(event) =>
                        handleChange({
                            ...datosIntroducidos,
                            tabletaPersonal: event.currentTarget.checked,
                        })
                    }
                />

                <Switch
                    className="w-full flex justify-end"
                    size="lg"
                    label="Laptop"
                    labelPosition="left"
                    onLabel="Si"
                    offLabel="No"
                    checked={datosIntroducidos.laptopPersonal}
                    onChange={(event) =>
                        handleChange({
                            ...datosIntroducidos,
                            laptopPersonal: event.currentTarget.checked,
                        })
                    }
                />

                <Switch
                    className="w-full flex justify-end"
                    size="lg"
                    label="Smartphone"
                    labelPosition="left"
                    onLabel="Si"
                    offLabel="No"
                    checked={datosIntroducidos.smartphonePersonal}
                    onChange={(event) =>
                        handleChange({
                            ...datosIntroducidos,
                            smartphonePersonal: event.currentTarget.checked,
                        })
                    }
                />
            </div>

            <div className="flex flex-col md:flex-row gap-2 py-2">
                <NativeSelect
                    className="w-full"
                    value={datosIntroducidos.focosCasa}
                    data={unoSeis}
                    label="¿Cuántos focos hay dentro de tu vivienda?"
                    name="focosCasa"
                    onChange={handleChange}
                    required
                />
                <NativeSelect
                    className="w-full"
                    value={datosIntroducidos.televisionesCasa}
                    data={unoSeis}
                    name="televisionesCasa"
                    label="¿Cuántas televisiones hay en tu vivienda?"
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="flex flex-col md:flex-row gap-2 py-2 mt-4">
                <Switch
                    className={`flex justify-end w-full items-center md:mt-6 ${datosIntroducidos.pertenecesGrupoIndigena && 'md:justify-start'}`}
                    size="lg"
                    label="¿Perteneces a algún grupo indígena?"
                    labelPosition="left"
                    onLabel="Si"
                    offLabel="No"
                    checked={datosIntroducidos.pertenecesGrupoIndigena}
                    onChange={(event) =>
                        setDatosIntroducidos({
                            ...datosIntroducidos,
                            pertenecesGrupoIndigena: event.currentTarget.checked,
                        })
                    }
                />
                {datosIntroducidos.pertenecesGrupoIndigena && (
                    <NativeSelect
                        className="w-full"
                        value={datosIntroducidos.cualGrupoIndigena}
                        name="cualGrupoIndigena"
                        data={gruposIndigenas}
                        label="Especifica"
                        onChange={handleChange}
                        required
                    />
                )}
            </div>

            <div className="mt-6">
                <Switch
                    className="flex justify-end w-full items-center md:mt-6"
                    size="lg"
                    label="¿Actualmente Trabajas?"
                    labelPosition="left"
                    onLabel="Si"
                    offLabel="No"
                    checked={datosIntroducidos.trabajasActualmente}
                    onChange={(event) =>
                        setDatosIntroducidos({
                            ...datosIntroducidos,
                            trabajasActualmente: event.currentTarget.checked,
                        })
                    }
                />
                {datosIntroducidos.trabajasActualmente && (
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-2 py-2">
                        <InputBase
                            className="w-full"
                            label="Nombre del lugar donde trabajas"
                            name="nombreEmpresa"
                            value={datosIntroducidos.nombreEmpresa}
                            onChange={handleChange}
                            error={errorCampoRequerido !== '' && datosIntroducidos.nombreEmpresa === '' ? errorCampoRequerido : ''}
                            required
                        />
                        <InputBase
                            className="w-full"
                            label="Cargo que desempeñas"
                            name="cargoEmpresa"
                            value={datosIntroducidos.cargoEmpresa}
                            error={errorCampoRequerido !== '' && datosIntroducidos.cargoEmpresa === '' ? errorCampoRequerido : ''}
                            onChange={handleChange}
                            required
                        />
                        <NativeSelect
                            className="w-full"
                            value={datosIntroducidos.ubicacionEmpresa}
                            data={delegaciones}
                            name="ubicacionEmpresa"
                            label="Ubicación del lugar donde trabajas"
                            onChange={handleChange}
                            required
                        />

                        <InputBase
                            className="w-full"
                            label="Teléfono del lugar donde trabajas"
                            value={datosIntroducidos.telefonoEmpresa}
                            component={IMaskInput}
                            placeholder="(000) 000-0000 "
                            mask="(000) 000-0000"
                            name="telefonoEmpresa"
                            error={errorCampoRequerido !== '' && datosIntroducidos.telefonoEmpresa === '' ? errorCampoRequerido : ''}
                            onChange={handleChange}
                            required
                        />
                        <Input.Wrapper label="Tu horario de trabajo">
                            <div className="flex-col flex md:flex-row gap-2 ">
                                <NativeSelect
                                    value={datosIntroducidos.trabajoHorarioInicio}
                                    className="mb-2 w-full"
                                    data={horas}
                                    name="trabajoHorarioInicio"
                                    onChange={handleChange}
                                    required
                                />
                                <NativeSelect
                                    className="w-full"
                                    value={datosIntroducidos.trabajoHorarioFin}
                                    data={horas}
                                    name="trabajoHorarioFin"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Input.Wrapper>
                        <NativeSelect
                            className="w-full"
                            value={datosIntroducidos.tuIngresoMensual}
                            label="Tu ingreso mensual"
                            name="tuIngresoMensual"
                            data={[
                                'Selecciona la cantidad',
                                'Hasta 500',
                                '501 a 1000',
                                '1001 a 1500',
                                '1501 a 2000',
                                '2001 a 2500',
                                '2501 a 3000',
                                '3001 a 3500',
                                '3501 a 4000',
                                'Más de 4000',
                            ]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
