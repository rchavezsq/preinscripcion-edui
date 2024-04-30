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
            <div className="flex flex-col md:flex-row gap-2 py-2">
                <InputBase
                    className="w-full md:w-2/3"
                    name="nombrePadre"
                    label="Nombre Completo del Padre"
                    placeholder="Nombre(s) Primer Apellido Segundo Apellido"
                    value={datosIntroducidos.nombrePadre}
                    onChange={handleChange}
                    error={errorCampoRequerido !== '' && datosIntroducidos.nombrePadre === '' ? errorCampoRequerido : ''}
                    required
                />
                <Switch
                    name="padreVive"
                    className="mt-6 flex justify-center w-full md:w-1/3"
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

            {datosIntroducidos.padreVive && (
                <div>
                    <div className="flex flex-col md:flex-row gap-2 py-2">
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
                            name="nacionalidadPadre"
                            value={datosIntroducidos.nacionalidadPadre}
                            data={paises}
                            label="Nacionalidad"
                            onChange={handleChange}
                        />
                        {datosIntroducidos.nacionalidadPadre === 'México' ? (
                            <NativeSelect
                                className="w-full"
                                name="lugarNacimientoPadre"
                                data={estados}
                                value={datosIntroducidos.lugarNacimientoPadre}
                                label="Lugar de Nacimiento"
                                onChange={handleChange}
                                required
                            />
                        ) : (
                            <NativeSelect
                                className="w-full"
                                name="lugarNacimientoPadre"
                                data={['Extranjero']}
                                value={datosIntroducidos.lugarNacimientoPadre}
                                label="Lugar de Nacimiento"
                                onChange={handleChange}
                                required
                            />
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 py-2">
                        <InputBase
                            className="w-full"
                            name="curpPadre"
                            label="CURP"
                            placeholder='Ej. "AAAA000000AAAAAA00"'
                            value={datosIntroducidos.curpPadre}
                            error={errorCampoRequerido !== '' && datosIntroducidos.curpPadre === '' ? errorCampoRequerido : ''}
                            onChange={handleChange}
                            required
                        />
                        <NativeSelect
                            className="w-full"
                            name="gradoEstudiosPadre"
                            data={estudios}
                            value={datosIntroducidos.gradoEstudiosPadre}
                            label="Grado máximo de estudios"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 py-2">
                        <Input.Wrapper label="Teléfono de Casa" className="w-full">
                            <InputBase
                                name="telefonoCasaPadre"
                                placeholder='Ej. "(000) 000-0000"'
                                value={datosIntroducidos.telefonoCasaPadre}
                                component={IMaskInput}
                                mask="(000) 000-0000"
                                onChange={handleChange}
                            />
                        </Input.Wrapper>
                        <Input.Wrapper label="Teléfono celular" required className="w-full">
                            <InputBase
                                name="telefonoCelularPadre"
                                placeholder='Ej. "(000) 000-0000"'
                                value={datosIntroducidos.telefonoCelularPadre}
                                component={IMaskInput}
                                mask="(000) 000-0000"
                                onChange={handleChange}
                                error={errorCampoRequerido !== '' && datosIntroducidos.telefonoCelularPadre === '' ? errorCampoRequerido : ''}
                                required
                            />
                        </Input.Wrapper>
                    </div>

                    <div className="py-2">
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
                        {!datosIntroducidos.viveContigoPadre && (
                            <InputBase
                                name="domicilioPadre"
                                label="Domicilio"
                                placeholder="Calle, Número exterior, Número interior, Colonia, Delegación o Municipio, Estado, País"
                                onChange={handleChange}
                                value={datosIntroducidos.domicilioPadre}
                                error={errorCampoRequerido !== '' && datosIntroducidos.domicilioPadre === '' ? errorCampoRequerido : ''}
                                required
                            />
                        )}
                    </div>

                    <div className="py-2">
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
                        {datosIntroducidos.trabajaPadre && (
                            <div className="flex flex-col md:flex-row gap-2">
                                <NativeSelect
                                    className="w-full"
                                    name="ocupacionPadre"
                                    data={ocupaciones}
                                    value={datosIntroducidos.ocupacionPadre}
                                    label="¿Ocupación?"
                                    onChange={handleChange}
                                    error={errorCampoRequerido !== '' && datosIntroducidos.ocupacionPadre === '' ? errorCampoRequerido : ''}
                                    required
                                />
                                <InputBase
                                    className="w-full"
                                    name="lugarTrabajoPadre"
                                    label="¿Dónde trabaja?"
                                    placeholder="Nombre de la empresa o lugar de trabajo"
                                    value={datosIntroducidos.lugarTrabajoPadre}
                                    error={errorCampoRequerido !== '' && datosIntroducidos.lugarTrabajoPadre === '' ? errorCampoRequerido : ''}
                                    onChange={handleChange}
                                    required
                                />
                                <NativeSelect
                                    className="w-full"
                                    name="ingresosPadre"
                                    data={ingresos}
                                    value={datosIntroducidos.ingresosPadre}
                                    error={errorCampoRequerido !== '' && datosIntroducidos.ingresosPadre === '' ? errorCampoRequerido : ''}
                                    label="Ingreso mensual"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
