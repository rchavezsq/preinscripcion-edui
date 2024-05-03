'use client'
import { useEffect } from 'react'

import { InputBase, Input, NativeSelect, Button } from '@mantine/core'
import { IMaskInput } from 'react-imask'
import IconMadrastra from '@/../public/icons/madrastra.png'
import IconPadrastro from '@/../public/icons/padrastro.png'
import IconAbuela from '@/../public/icons/abuela.png'
import IconAbuelo from '@/../public/icons/abuelo.png'
import IconHermano from '@/../public/icons/hermano.png'
import IconHermana from '@/../public/icons/hermana.png'
import IconTio from '@/../public/icons/tio.png'
import IconTia from '@/../public/icons/tia.png'
import IconPrima from '@/../public/icons/prima.png'
import IconPrimo from '@/../public/icons/primo.png'
import IconOtra from '@/../public/icons/otra.png'
import IconOtro from '@/../public/icons/otro.png'
import Image from 'next/image'
import { ingresos } from '@/libs/datos'
import { PuntosTutor } from './PuntosTutor'
import { FamiliarOption } from './FamiliarOption'
import { Familiar } from '@/types/familiar'

interface Props {
    datosIntroducidos: any
    setDatosIntroducidos: any
    errorCampoRequerido: string
    familiares: any
    setFamiliares: any
    agregarFamiliar: any
    setEnLista: any
    user: any
}

const FAMILIARES = [
    {
        img: IconMadrastra,
        parentesco: 'Madrastra',
    },
    {
        img: IconPadrastro,
        parentesco: 'Padrastro',
    },
    {
        img: IconAbuela,
        parentesco: 'Abuela',
    },
    {
        img: IconAbuelo,
        parentesco: 'Abuelo',
    },
    {
        img: IconHermano,
        parentesco: 'Hermano',
    },
    {
        img: IconHermana,
        parentesco: 'Hermana',
    },
    {
        img: IconTio,
        parentesco: 'Tio',
    },
    {
        img: IconTia,
        parentesco: 'Tia',
    },
    {
        img: IconPrima,
        parentesco: 'Prima',
    },
    {
        img: IconPrimo,
        parentesco: 'Primo',
    },
    {
        img: IconOtra,
        parentesco: 'Otra',
    },
    {
        img: IconOtro,
        parentesco: 'Otro',
    },
]

export function DatosFamiliares({
    datosIntroducidos,
    errorCampoRequerido,
    setDatosIntroducidos,
    agregarFamiliar,
    familiares,
    setFamiliares,
    setEnLista,
    user,
}: Props) {
    useEffect(() => {
        if (familiares.length == 0) {
            setDatosIntroducidos({
                ...datosIntroducidos,
                tutor: '',
            })
        }
    }, [familiares])

    // const handleChange = (e) => {
    //     setDatosIntroducidos({
    //         ...datosIntroducidos,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    const handleChangeFamiliares = (e) => {
        setFamiliares(
            familiares
                .filter((fam: Familiar) => fam.parentesco !== 'Padre')
                .filter((fam: Familiar) => fam.parentesco !== 'Madre')
                .map((familiar: Familiar) => {})
        )
    }

    // const eliminarFamiliar = async (key) => {
    //     const response = await axios
    //         .delete(`${process.env.api}familiares/${key}`)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((error) => {
    //             console.log(error.response.data.message)
    //             toast.error(error.response.data.message)
    //         })
    // }

    const getIcon = (parentesco: string) => {
        switch (parentesco) {
            case 'Madrastra':
                return IconMadrastra
            case 'Padrastro':
                return IconPadrastro
            case 'Abuela':
                return IconAbuela
            case 'Abuelo':
                return IconAbuelo
            case 'Hermano':
                return IconHermano
            case 'Hermana':
                return IconHermana
            case 'Tio':
                return IconTio
            case 'Tia':
                return IconTia
            case 'Primo':
                return IconPrimo
            case 'Prima':
                return IconPrima
            case 'Otra':
                return IconOtra
            default:
                return IconOtro
        }
    }

    const filas = familiares
        .filter((fam: Familiar) => fam.parentesco !== 'Padre')
        .filter((fam: Familiar) => fam.parentesco !== 'Madre')
        .map((familiar: Familiar) => (
            <tr key={familiar.key}>
                <td className="">
                    <Image className="icono mr-2" src={getIcon(familiar.parentesco)} alt="icono" width={30} height={30} />
                </td>

                <td>{familiar.parentesco}</td>
                <td>
                    <InputBase
                        className=""
                        placeholder="Nombre"
                        value={familiar.nombre || ''}
                        onChange={(e) => {
                            familiar.nombre = e.currentTarget.value
                            setEnLista(familiar.key)
                        }}
                        error={errorCampoRequerido !== '' && (familiar.nombre === undefined || familiar.nombre === '') ? errorCampoRequerido : ''}
                    />
                </td>
                <td>
                    <InputBase
                        className="tabla-edad w-12"
                        type="number"
                        placeholder="##"
                        value={familiar.edad || ''}
                        error={
                            errorCampoRequerido !== '' && (familiar.edad === undefined || familiar.edad === 0 || Number.isNaN(familiar.edad))
                                ? errorCampoRequerido
                                : ''
                        }
                        onChange={(e) => {
                            familiar.edad = parseInt(e.currentTarget.value)
                            setEnLista(familiar.key)
                        }}
                    />
                </td>
                <td>
                    <InputBase
                        className=""
                        placeholder="Ocupación"
                        value={familiar.ocupacion || ''}
                        error={
                            errorCampoRequerido !== '' && (familiar.ocupacion === undefined || familiar.ocupacion === '') ? errorCampoRequerido : ''
                        }
                        onChange={(e) => {
                            familiar.ocupacion = e.currentTarget.value
                            setEnLista(familiar.key)
                        }}
                    />
                </td>
                <td>
                    <NativeSelect
                        name="familiarIngreso"
                        className="w-28 tabla-ingreso"
                        value={familiar.ingreso || ''}
                        data={ingresos}
                        error={errorCampoRequerido !== '' && (familiar.ingreso === undefined || familiar.ingreso === '') ? errorCampoRequerido : ''}
                        onChange={(e) => {
                            familiar.ingreso = e.currentTarget.value
                            setEnLista(familiar.key)
                        }}
                    />
                </td>
                <td>
                    <Input.Wrapper>
                        <InputBase
                            component={IMaskInput}
                            placeholder="(123)-123-1234"
                            mask="(000) 000-0000"
                            value={familiar.celular || ''}
                            error={
                                errorCampoRequerido !== '' && (familiar.celular === undefined || familiar.celular === '') ? errorCampoRequerido : ''
                            }
                            onChange={(e) => {
                                familiar.celular = e.currentTarget.value
                                setEnLista(familiar.key)
                            }}
                        />
                    </Input.Wrapper>
                </td>
                <td>
                    <Button
                        variant="outline"
                        color="red"
                        onClick={() => {
                            //?eliminarFamiliar(familiar.key)
                            setFamiliares(
                                familiares.filter(function (obj: Familiar) {
                                    return obj.key !== familiar.key
                                })
                            )
                        }}
                    >
                        Quitar
                    </Button>
                </td>
            </tr>
        ))

    return (
        <div>
            <h1 className="my-4 font-bold text-3xl text-center mt-10">Datos familiares</h1>
            <h2 className="my-4 font-bold text-1xl text-center">(SELECCIONAR PERSONAS QUE VIVEN CONTIGO QUE NO SEAN NI TU PAPÁ NI TU MAMÁ)</h2>

            <div className="opciones-familiares">
                {FAMILIARES.map((familiar) => (
                    <FamiliarOption
                        key={familiar.parentesco}
                        agregarFamiliar={agregarFamiliar}
                        user={user}
                        parentesco={familiar.parentesco}
                        img={familiar.img}
                    />
                ))}
            </div>

            <table className="mt-5">
                <thead>
                    <tr>
                        <th></th>
                        <th>Parentesco</th>
                        <th>Nombre Completo</th>
                        <th>Edad</th>
                        <th>Ocupación</th>
                        <th>Ingreso Mensual</th>
                        <th>Num. de Celular (No usar el mismo)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{filas}</tbody>
            </table>

            <h2 className="text-lg text-center mt-5 chx:text-justify">
                El Tutor que será responsable directo en esta nueva etapa que estás por emprender, tiene una participación fundamental. Es por esto
                que los siguientes puntos servirán como guía en el desempeño de su función:
            </h2>

            <PuntosTutor />

            {familiares.length !== 0 ? (
                <div>
                    <h2 className="font-medium text-sm mt-5 chx:text-justify">
                        Sabiendo todo lo anterior por favor, selecciona al familiar que ejercerá la función de TUTOR
                    </h2>
                    <NativeSelect
                        data={familiares.map((fam: Familiar, i: number) => {
                            return `${i + 1}. ${fam.parentesco}  (${fam.nombre === undefined ? '' : fam.nombre})`
                        })}
                        label="Tutor"
                        onClick={(e) => {
                            setDatosIntroducidos({
                                ...datosIntroducidos,
                                tutor: e.target.value,
                            })
                        }}
                        required
                    />
                </div>
            ) : null}
        </div>
    )
}
