'use client'
import { Button, Stepper } from '@mantine/core'
import { StyledStepper } from './StyledStepper'
import { Personal } from './personal/Personal'
import { useState } from 'react'
import { IconCircleCheck } from '@tabler/icons-react'

export function Formulario() {
    const [pageActive, setPageActive] = useState(0)
    const [datosIntroducidos, setDatosIntroducidos] = useState({})

    const updateDatosIntroducidos = (data: any) => {
        setDatosIntroducidos((prev) => ({ ...prev, ...data }))
    }

    const prevStep = () => setPageActive((current) => (current > 0 ? current - 1 : current))
    const nextStep = () => setPageActive((current) => (current < 3 ? current + 1 : current))

    return (
        <div className="md:m-10 bg-white md:shadow-xl p-10 rounded-xl">
            <div className="flex justify-end">
                <button
                    className=" bg-blue-600 w-[8rem] rounded-md p-2 mb-4 text-white"
                    onClick={() => {
                        //TODO: Implementar cierre de sesión
                    }}
                >
                    Cerrar Sesión
                </button>
            </div>
            <StyledStepper active={pageActive} completedIcon={<IconCircleCheck size="1.1rem" />} color="teal" size="sm" iconPosition="right">
                <Stepper.Step>
                    <Personal datosIntroducidos={datosIntroducidos} updateDatosIntroducidos={updateDatosIntroducidos} />
                </Stepper.Step>
                <Stepper.Step>Hola</Stepper.Step>
                <Stepper.Step>Hola</Stepper.Step>
                <Stepper.Step>Hola</Stepper.Step>
            </StyledStepper>
            <div className="flex justify-center gap-4 md:flex-row flex-col mt-10">
                <Button variant="default" className="w-full" onClick={prevStep}>
                    Regresar
                </Button>
                <Button className="w-full" variant="outline" color="lime">
                    Guardar esta sección
                </Button>

                <Button variant="outline" className="w-full" onClick={nextStep}>
                    Siguiente
                </Button>
            </div>
        </div>
    )
}
