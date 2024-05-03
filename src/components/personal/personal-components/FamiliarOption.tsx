import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
    agregarFamiliar: any
    user: any
    parentesco: string
    img: StaticImport
}

export function FamiliarOption({ agregarFamiliar, user, img, parentesco }: Props) {
    return (
        <div
            className="opcion-familiar"
            onClick={() =>
                agregarFamiliar({
                    id_alumno: user.id,
                    parentesco: parentesco,

                    key: Date.now().toString(),
                })
            }
        >
            <Image src={img} width={30} height={30} alt={`foto familiar ${parentesco}`} />
            <h2>{parentesco}</h2>
        </div>
    )
}
