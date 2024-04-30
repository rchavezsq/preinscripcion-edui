'use client'
import { estados, estudios, ingresos, ocupaciones, paises } from '@/libs/datos'
import { InputBase, NativeSelect, Input, Switch } from '@mantine/core'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { DatePickerInput } from '@mantine/dates'
import * as dayjs from 'dayjs'
import 'dayjs/locale/es'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: any
    errorCampoRequerido: string
}

export function DatosMadre({ datosIntroducidos, setDatosIntroducidos, errorCampoRequerido }: Props) {
    const [fechaPadre, setFechaPadre] = useState<Date | null>()

    const handleChange = (e: any) => {
        setDatosIntroducidos({
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="my-5">
            <h1 className="my-4 font-bold text-3xl text-center mt-10">Datos de la Madre</h1>
            <div className="py-2 flex flex-col md:flex-row gap-2">
                <InputBase
                    className="w-full md:w-2/3"
                    name="nombreMadre"
                    value={datosIntroducidos.nombreMadre}
                    label="Nombre Completo de la Madre"
                    placeholder="Nombre(s) Primer Apellido Segundo Apellido"
                    onChange={handleChange}
                    error={errorCampoRequerido !== '' && datosIntroducidos.nombreMadre === '' ? errorCampoRequerido : ''}
                    required
                />
                <Switch
                    name="madreVive"
                    className="mt-6 flex justify-center w-full md:w-1/3"
                    size="lg"
                    label="¿Vive?"
                    labelPosition="left"
                    onLabel="Si"
                    offLabel="No"
                    checked={datosIntroducidos.madreVive}
                    onChange={(event) => {
                        setDatosIntroducidos({
                            ...datosIntroducidos,
                            madreVive: event.currentTarget.checked,
                        })
                        // if (!datosIntroducidos.madreVive) {
                        //     agregarFamiliar({
                        //         parentesco: 'Madre',
                        //         nombre: datosIntroducidos.nombreMadre,
                        //         key: 'madre',
                        //     })
                        // } else {
                        //     setFamiliares(
                        //         familiares.filter(function (obj) {
                        //             return obj.parentesco !== 'Madre'
                        //         })
                        //     )
                        // }
                    }}
                />
            </div>

            {datosIntroducidos.madreVive ? (
                <div>
                    <div className="flex flex-col md:flex-row gap-2 py-2">
                        {/* <div className="mt-2">
                            <h2 className="font-medium text-sm ">
                                Fecha de Nacimiento
                                <span className="text-red-500"> *</span>
                            </h2>
                            <DatePicker
                                name="fechaMadre"
                                required
                                className="fecha w-[100%]"
                                selected={datosIntroducidos.fechaMadre}
                                onChange={setFechaMadre}
                                locale="es"
                                dateFormat="dd-MM-yyyy"
                                showYearDropdown
                                yearDropdownItemNumber={50}
                                scrollableYearDropdown
                                maxDate={new Date()}
                            />
                        </div> */}

                        <div className="w-full">
                            <DatePickerInput
                                locale="es"
                                label="Fecha de Nacimiento"
                                placeholder="Seleccione una fecha"
                                valueFormat="YYYY-MM-DD"
                                value={fechaPadre}
                                onChange={setFechaPadre}
                            />
                        </div>

                        <NativeSelect
                            className="w-full"
                            name="nacionalidadMadre"
                            value={datosIntroducidos.nacionalidadMadre}
                            data={paises}
                            label="Nacionalidad"
                            onChange={handleChange}
                            required
                        />
                        {datosIntroducidos.nacionalidadMadre === 'México' ? (
                            <NativeSelect
                                className="w-full"
                                name="lugarNacimientoMadre"
                                value={datosIntroducidos.lugarNacimientoMadre}
                                data={estados}
                                label="Lugar de Nacimiento"
                                onChange={handleChange}
                                required
                            />
                        ) : (
                            <NativeSelect
                                className="w-full"
                                name="lugarNacimientoMadre"
                                data={['Extranjero']}
                                value={datosIntroducidos.lugarNacimientoMadre}
                                label="Lugar de Nacimiento"
                                onChange={handleChange}
                                required
                            />
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 py-2">
                        <InputBase
                            className="w-full"
                            name="curpMadre"
                            placeholder='Ej. "AAAA000000AAAAAA00"'
                            label="CURP"
                            value={datosIntroducidos.curpMadre}
                            error={errorCampoRequerido !== '' && datosIntroducidos.curpMadre === '' ? errorCampoRequerido : ''}
                            onChange={handleChange}
                            required
                        />
                        <NativeSelect
                            className="w-full"
                            name="gradoEstudiosMadre"
                            data={estudios}
                            value={datosIntroducidos.gradoEstudiosMadre}
                            label="Grado máximo de estudios"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 py-2">
                        <Input.Wrapper label="Teléfono de Casa" className="w-full">
                            <InputBase
                                name="telefonoCasaMadre"
                                placeholder='Ej. "(000) 000-0000"'
                                value={datosIntroducidos.telefonoCasaMadre}
                                component={IMaskInput}
                                mask="(000) 000-0000"
                                onChange={handleChange}
                            />
                        </Input.Wrapper>
                        <Input.Wrapper label="Teléfono celular" required className="w-full">
                            <InputBase
                                name="telefonoCelularMadre"
                                placeholder='Ej. "(000) 000-0000"'
                                value={datosIntroducidos.telefonoCelularMadre}
                                component={IMaskInput}
                                error={errorCampoRequerido !== '' && datosIntroducidos.telefonoCelularMadre === '' ? errorCampoRequerido : ''}
                                mask="(000) 000-0000"
                                onChange={handleChange}
                            />
                        </Input.Wrapper>
                    </div>

                    <Switch
                        name="viveContigoMadre"
                        className="mt-6 flex justify-center"
                        size="lg"
                        label="¿Tu mamá vive contigo?"
                        labelPosition="left"
                        onLabel="Si"
                        offLabel="No"
                        checked={datosIntroducidos.viveContigoMadre}
                        onChange={(event) =>
                            setDatosIntroducidos({
                                ...datosIntroducidos,
                                viveContigoMadre: event.currentTarget.checked,
                            })
                        }
                    />
                    {!datosIntroducidos.viveContigoMadre && (
                        <InputBase
                            name="domicilioMadre"
                            label="Domicilio"
                            value={datosIntroducidos.domicilioMadre}
                            error={errorCampoRequerido !== '' && datosIntroducidos.domicilioMadre === '' ? errorCampoRequerido : ''}
                            placeholder="Calle, Número exterior, Número interior, Colonia, Delegación o Municipio, Estado, País"
                            onChange={handleChange}
                            required
                        />
                    )}
                    <Switch
                        name="trabajaMadre"
                        className="my-6 flex justify-center"
                        size="lg"
                        label="¿Trabaja actualmente?"
                        labelPosition="left"
                        onLabel="Si"
                        checked={datosIntroducidos.trabajaMadre}
                        offLabel="No"
                        onChange={(event) =>
                            setDatosIntroducidos({
                                ...datosIntroducidos,
                                trabajaMadre: event.currentTarget.checked,
                            })
                        }
                    />
                    {datosIntroducidos.trabajaMadre && (
                        <div className="flex flex-col md:flex-row gap-2 py-2">
                            <NativeSelect
                                className="w-full"
                                name="ocupacionMadre"
                                data={ocupaciones}
                                value={datosIntroducidos.ocupacionMadre}
                                error={errorCampoRequerido !== '' && datosIntroducidos.ocupacionMadre === '' ? errorCampoRequerido : ''}
                                label="¿Ocupación?"
                                onChange={handleChange}
                                required
                            />
                            <InputBase
                                className="w-full"
                                name="lugarTrabajoMadre"
                                placeholder="Nombre de la empresa o lugar de trabajo"
                                value={datosIntroducidos.lugarTrabajoMadre}
                                error={errorCampoRequerido !== '' && datosIntroducidos.lugarTrabajoMadre === '' ? errorCampoRequerido : ''}
                                label="¿Dónde trabaja?"
                                onChange={handleChange}
                                required
                            />
                            <NativeSelect
                                className="w-full"
                                name="ingresosMadre"
                                value={datosIntroducidos.ingresosMadre}
                                error={errorCampoRequerido !== '' && datosIntroducidos.ingresosMadre === '' ? errorCampoRequerido : ''}
                                data={ingresos}
                                label="Ingreso mensual"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    )
}
