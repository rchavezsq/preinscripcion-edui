'use client'
import { estados, estudios, ingresos, ocupaciones, paises } from '@/libs/datos'
import { InputBase, NativeSelect, Input, Switch } from '@mantine/core'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { DatePickerInput } from '@mantine/dates'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: any
    errorCampoRequerido: string
}

export function DatosPadre({ datosIntroducidos, setDatosIntroducidos, errorCampoRequerido }: Props) {
    const [fechaPadre, setFechaPadre] = useState<Date | null>()

    const handleChange = (e: any) => {
        setDatosIntroducidos({
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="my-5">
            <h1 className="my-4 font-bold text-3xl text-center mt-10">Datos del Padre</h1>
            <div className="w-[100%] grid ch:grid-cols-2 gap-5 my-2">
                <InputBase
                    name="nombrePadre"
                    label="Nombre Completo del Padre"
                    value={datosIntroducidos.nombrePadre}
                    onChange={handleChange}
                    error={errorCampoRequerido !== '' && datosIntroducidos.nombrePadre === '' ? errorCampoRequerido : ''}
                    required
                />
                <Switch
                    name="padreVive"
                    className="mt-6 flex justify-center"
                    size="lg"
                    label="¿Vive?"
                    labelPosition="left"
                    onLabel="Si"
                    offLabel="No"
                    checked={datosIntroducidos.padreVive}
                    onChange={(event) => {
                        setDatosIntroducidos({
                            ...datosIntroducidos,
                            padreVive: event.currentTarget.checked,
                        })
                        // if (!datosIntroducidos.padreVive) {
                        //     agregarFamiliar({
                        //         parentesco: 'Padre',
                        //         nombre: datosIntroducidos.nombrePadre,
                        //         key: 'padre',
                        //     })
                        // } else {
                        //     setFamiliares(
                        //         familiares.filter(function (obj) {
                        //             return obj.parentesco !== 'Padre'
                        //         })
                        //     )
                        // }
                    }}
                />
            </div>

            {datosIntroducidos.padreVive ? (
                <div>
                    <div className="w-[100%] grid ch:grid-cols-3 gap-5 my-2">
                        {/* <div className="mt-2">
                            <h2 className="font-medium text-sm ">
                                Fecha de Nacimiento
                                <span className="text-red-500"> *</span>
                            </h2>
                            <DatePicker
                                name="fechaPadre"
                                required
                                className="fecha w-[100%]"
                                value={new Date(datosIntroducidos.fechaPadre)}
                                selected={datosIntroducidos.fechaPadre}
                                onChange={setFechaPadre}
                                locale="es"
                                dateFormat="dd-MM-yyyy"
                                showYearDropdown
                                yearDropdownItemNumber={50}
                                scrollableYearDropdown
                                maxDate={new Date()}
                            />
                        </div> */}

                        <div>
                            <DatePickerInput
                                label="Fecha de Nacimiento"
                                placeholder="Seleccione una fecha"
                                value={fechaPadre}
                                onChange={setFechaPadre}
                            />
                        </div>

                        <NativeSelect
                            name="nacionalidadPadre"
                            value={datosIntroducidos.nacionalidadPadre}
                            data={paises}
                            label="Nacionalidad"
                            onChange={handleChange}
                        />
                        {datosIntroducidos.nacionalidadPadre === 'México' ? (
                            <NativeSelect
                                name="lugarNacimientoPadre"
                                data={estados}
                                value={datosIntroducidos.lugarNacimientoPadre}
                                label="Lugar de Nacimiento"
                                onChange={handleChange}
                                required
                            />
                        ) : (
                            <NativeSelect
                                name="lugarNacimientoPadre"
                                data={['Extranjero']}
                                value={datosIntroducidos.lugarNacimientoPadre}
                                label="Lugar de Nacimiento"
                                onChange={handleChange}
                                required
                            />
                        )}
                    </div>

                    <div className="w-[100%] grid ch:grid-cols-2 gap-5">
                        <InputBase
                            name="curpPadre"
                            label="CURP"
                            value={datosIntroducidos.curpPadre}
                            error={errorCampoRequerido !== '' && datosIntroducidos.curpPadre === '' ? errorCampoRequerido : ''}
                            onChange={handleChange}
                            required
                        />
                        <NativeSelect
                            name="gradoEstudiosPadre"
                            data={estudios}
                            value={datosIntroducidos.gradoEstudiosPadre}
                            label="Grado máximo de estudios"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="w-[100%] grid ch:grid-cols-2 gap-5">
                        <Input.Wrapper label="Teléfono de Casa">
                            <InputBase
                                name="telefonoCasaPadre"
                                value={datosIntroducidos.telefonoCasaPadre}
                                component={IMaskInput}
                                mask="(000) 000-0000"
                                onChange={handleChange}
                            />
                        </Input.Wrapper>
                        <Input.Wrapper label="Teléfono celular" required>
                            <InputBase
                                name="telefonoCelularPadre"
                                value={datosIntroducidos.telefonoCelularPadre}
                                component={IMaskInput}
                                mask="(000) 000-0000"
                                onChange={handleChange}
                                error={errorCampoRequerido !== '' && datosIntroducidos.telefonoCelularPadre === '' ? errorCampoRequerido : ''}
                                required
                            />
                        </Input.Wrapper>
                    </div>

                    <Switch
                        name="viveContigoPadre"
                        className="mt-6 flex justify-center"
                        size="lg"
                        label="¿Tu papá vive contigo?"
                        labelPosition="left"
                        onLabel="Si"
                        offLabel="No"
                        checked={datosIntroducidos.viveContigoPadre}
                        onChange={(event) =>
                            setDatosIntroducidos({
                                ...datosIntroducidos,
                                viveContigoPadre: event.currentTarget.checked,
                            })
                        }
                    />
                    {!datosIntroducidos.viveContigoPadre ? (
                        <InputBase
                            name="domicilioPadre"
                            label="Domicilio"
                            placeholder="Calle, Número exterior, Número interior, Colonia, Delegación o Municipio, Estado, País"
                            onChange={handleChange}
                            value={datosIntroducidos.domicilioPadre}
                            error={errorCampoRequerido !== '' && datosIntroducidos.domicilioPadre === '' ? errorCampoRequerido : ''}
                            required
                        />
                    ) : null}
                    <Switch
                        name="trabajaPadre"
                        className="my-6 flex justify-center"
                        size="lg"
                        label="¿Trabaja actualmente?"
                        labelPosition="left"
                        onLabel="Si"
                        offLabel="No"
                        checked={datosIntroducidos.trabajaPadre}
                        onChange={(event) =>
                            setDatosIntroducidos({
                                ...datosIntroducidos,
                                trabajaPadre: event.currentTarget.checked,
                            })
                        }
                    />
                    {datosIntroducidos.trabajaPadre ? (
                        <div className="w-[100%] grid ch:grid-cols-3 gap-5">
                            <NativeSelect
                                name="ocupacionPadre"
                                data={ocupaciones}
                                value={datosIntroducidos.ocupacionPadre}
                                label="¿Ocupación?"
                                onChange={handleChange}
                                error={errorCampoRequerido !== '' && datosIntroducidos.ocupacionPadre === '' ? errorCampoRequerido : ''}
                                required
                            />
                            <InputBase
                                name="lugarTrabajoPadre"
                                label="¿Dónde trabaja?"
                                value={datosIntroducidos.lugarTrabajoPadre}
                                error={errorCampoRequerido !== '' && datosIntroducidos.lugarTrabajoPadre === '' ? errorCampoRequerido : ''}
                                onChange={handleChange}
                                required
                            />
                            <NativeSelect
                                name="ingresosPadre"
                                data={ingresos}
                                value={datosIntroducidos.ingresosPadre}
                                error={errorCampoRequerido !== '' && datosIntroducidos.ingresosPadre === '' ? errorCampoRequerido : ''}
                                label="Ingreso mensual"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    )
}
