import { DatosContacto, DatosMadre, DatosPadre, DatosPersonales } from './personal-components'

interface Props {
    datosIntroducidos: any
    updateDatosIntroducidos: (data: any) => void
}

export function Personal({ datosIntroducidos, updateDatosIntroducidos }: Props) {
    return (
        <div>
            <DatosPersonales datosIntroducidos={datosIntroducidos} errorCampoRequerido="" setDatosIntroducidos={updateDatosIntroducidos} />
            <DatosContacto datosIntroducidos={datosIntroducidos} errorCampoRequerido="" setDatosIntroducidos={updateDatosIntroducidos} />
            <DatosPadre datosIntroducidos={datosIntroducidos} errorCampoRequerido="" setDatosIntroducidos={updateDatosIntroducidos} />
            <DatosMadre datosIntroducidos={datosIntroducidos} errorCampoRequerido="" setDatosIntroducidos={updateDatosIntroducidos} />
        </div>
    )
}
