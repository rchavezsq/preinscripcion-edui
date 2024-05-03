import { DatosContacto, DatosFamiliares, DatosMadre, DatosPadre, DatosPersonales } from './personal-components'

interface Props {
    datosIntroducidos: any
    updateDatosIntroducidos: (data: any) => void
    familiares: any
    setFamiliares: any
    agregarFamiliar: any
    setEnLista: any
    user: any
}

export function Personal({ datosIntroducidos, updateDatosIntroducidos, agregarFamiliar, familiares, setEnLista, setFamiliares, user }: Props) {
    return (
        <div>
            <DatosPersonales datosIntroducidos={datosIntroducidos} errorCampoRequerido="" setDatosIntroducidos={updateDatosIntroducidos} />
            <DatosContacto datosIntroducidos={datosIntroducidos} errorCampoRequerido="" setDatosIntroducidos={updateDatosIntroducidos} />
            <DatosPadre datosIntroducidos={datosIntroducidos} errorCampoRequerido="" setDatosIntroducidos={updateDatosIntroducidos} />
            <DatosMadre datosIntroducidos={datosIntroducidos} errorCampoRequerido="" setDatosIntroducidos={updateDatosIntroducidos} />
            <DatosFamiliares
                agregarFamiliar={agregarFamiliar}
                familiares={familiares}
                setEnLista={setEnLista}
                setFamiliares={setFamiliares}
                datosIntroducidos={datosIntroducidos}
                errorCampoRequerido=""
                setDatosIntroducidos={updateDatosIntroducidos}
                user={user}
            />
        </div>
    )
}
