'use client'
import { ReactNode } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { Stepper, rem } from '@mantine/core'

interface Props {
    props: ReactNode
}

export function StyledStepper(props: any) {
    const isMobile = useMediaQuery('(max-width: 900px)')
    return (
        <Stepper
            styles={
                isMobile
                    ? {
                          stepBody: {
                              display: 'none',
                          },

                          step: {
                              padding: 0,
                          },

                          stepIcon: {
                              borderWidth: rem(4),
                          },

                          separator: {
                              marginLeft: rem(-2),
                              marginRight: rem(-2),
                              height: rem(10),
                          },
                      }
                    : undefined
            }
            {...props}
        />
    )
}
