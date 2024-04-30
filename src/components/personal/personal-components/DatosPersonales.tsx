'use client'

import es from 'date-fns/locale/es'
import DatePicker, { registerLocale } from 'react-datepicker'
//registerLocale('es', es)
import 'react-datepicker/dist/react-datepicker.css'
import { useState, useEffect, FormEvent } from 'react'
import { paises, estados } from '@/libs/datos'
import { InputBase, NativeSelect, Switch } from '@mantine/core'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: any
    errorCampoRequerido: string
}
//FormEvent<HTMLInputElement | HTMLSelectElement>
export function DatosPersonales({ datosIntroducidos, setDatosIntroducidos, errorCampoRequerido }: Props) {
    const handleChange = (e: any) => {
        setDatosIntroducidos({
            ...datosIntroducidos,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="my-5">
            <h1 className="font-bold text-3xl text-center md:mb-12">Datos Personales</h1>
            <div className="flex flex-col md:flex-row gap-2">
                <InputBase
                    value={datosIntroducidos.nombre}
                    name="nombre"
                    className="w-full"
                    label="Nombre/s"
                    onChange={handleChange}
                    required
                    error={errorCampoRequerido !== '' && datosIntroducidos.nombre === '' ? errorCampoRequerido : ''}
                />
                <InputBase
                    className="w-full"
                    name="apellidoPaterno"
                    label="Apellido Paterno"
                    onChange={handleChange}
                    value={datosIntroducidos.apellidoPaterno}
                    error={errorCampoRequerido !== '' && datosIntroducidos.apellidoPaterno === '' ? errorCampoRequerido : ''}
                    required
                />
                <InputBase
                    className="w-full"
                    name="apellidoMaterno"
                    label="Apellido Materno"
                    onChange={handleChange}
                    value={datosIntroducidos.apellidoMaterno}
                    error={errorCampoRequerido !== '' && datosIntroducidos.apellidoMaterno === '' ? errorCampoRequerido : ''}
                    required
                />
            </div>

            <div className="w-[100%] grid grid-cols-2 mdn:grid-cols-3 gap-5 my-5">
                <InputBase
                    name="curp"
                    className="mdx:col-span-2"
                    label="CURP"
                    onChange={handleChange}
                    value={datosIntroducidos.curp}
                    error={errorCampoRequerido !== '' && datosIntroducidos.curp === '' ? errorCampoRequerido : ''}
                    required
                />
                <NativeSelect
                    name="genero"
                    className="chx:mt-5"
                    data={['Masculino', 'Femenino']}
                    label="Genero"
                    onChange={handleChange}
                    value={datosIntroducidos.genero}
                    required
                />

                {/* <div className="ch:mt-2">
                    <h2 className="font-medium ch:text-sm ">
                        Fecha de Nacimiento<span className="text-red-500"> *</span>
                    </h2>
                    <div className="">
                        <DatePicker
                            name="fechaNacimiento"
                            value={datosIntroducidos.fechaNacimiento.toLocaleDateString('es-MX')}
                            required
                            className="fecha w-[100%]"
                            selected={datosIntroducidos.fechaNacimiento}
                            onChange={setFechaNacimiento}
                            locale="es"
                            dateFormat="dd-MM-yyyy"
                            showYearDropdown
                            yearDropdownItemNumber={50}
                            scrollableYearDropdown
                            maxDate={new Date()}
                        />
                    </div>
                </div> */}
            </div>

            <div className="w-[100%] grid grid-cols-2 gap-5 my-5">
                <NativeSelect
                    name="nacionalidad"
                    className=""
                    value={datosIntroducidos.nacionalidad}
                    data={paises}
                    label="Nacionalidad"
                    onChange={handleChange}
                    required
                />
                {datosIntroducidos.nacionalidad === 'México' ? (
                    <NativeSelect
                        name="lugarNacimiento"
                        data={estados}
                        value={datosIntroducidos.lugarNacimiento}
                        label="Lugar de Nacimiento"
                        onChange={handleChange}
                        required
                    />
                ) : (
                    <NativeSelect
                        name="lugarNacimiento"
                        data={['Extranjero']}
                        label="Lugar de Nacimiento"
                        onChange={handleChange}
                        value={datosIntroducidos.lugarNacimiento}
                        required
                    />
                )}
            </div>

            <div className={datosIntroducidos.tieneHijos ? 'w-[100%] grid ch:grid-cols-3 gap-5 my-5' : 'w-[100%] grid ch:grid-cols-2 gap-5 my-5'}>
                <NativeSelect
                    data={['Soltero(a)', 'Comprometido(a)', 'Unión Libre', 'Casado(a)', 'Divorciado(a)', 'Viudo(a)']}
                    name="estadoCivil"
                    value={datosIntroducidos.estadoCivil}
                    label="Estado Civil"
                    onChange={handleChange}
                    required
                />
                <Switch
                    name="tieneHijos"
                    className="ch:mt-6 flex justify-center"
                    size="lg"
                    label="¿Tienes Hijos?"
                    labelPosition="left"
                    onLabel="Si"
                    offLabel="No"
                    checked={datosIntroducidos.tieneHijos}
                    onChange={(event) =>
                        setDatosIntroducidos({
                            ...datosIntroducidos,
                            tieneHijos: event.currentTarget.checked,
                        })
                    }
                />

                {datosIntroducidos.tieneHijos ? (
                    <NativeSelect
                        name="cuantosHijos"
                        value={datosIntroducidos.cuantosHijos}
                        data={['1 Hijo(a)', '2 Hijos(as)', '3 Hijos(as)', '4 Hijos(as)', 'Más de 4 hijos(as)']}
                        label="¿Cuantos?"
                        required
                        onChange={(event) =>
                            setDatosIntroducidos({
                                ...datosIntroducidos,
                                cuantosHijos: event.currentTarget.value,
                            })
                        }
                    />
                ) : null}
            </div>
        </div>
    )
}
