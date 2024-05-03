import { BienesServicios, DatosSocioEconomicos, Internet, UsoPersonal } from './secciones'

interface Props {
    datosIntroducidos: any
    handleChange: (data: any) => void
    errorCampoRequerido: string
}

export default function SocioEconomico({ datosIntroducidos, handleChange, errorCampoRequerido }: Props) {
    return (
        <div>
            <DatosSocioEconomicos datosIntroducidos={datosIntroducidos} handleChange={handleChange} />
            <BienesServicios datosIntroducidos={datosIntroducidos} setDatosIntroducidos={handleChange} />
            <Internet datosIntroducidos={datosIntroducidos} setDatosIntroducidos={handleChange} />
            <UsoPersonal datosIntroducidos={datosIntroducidos} setDatosIntroducidos={handleChange} errorCampoRequerido={errorCampoRequerido} />
        </div>
    )
}
