
'use client'
import { Flex, MantineProvider } from '@mantine/core'
import React, { PropsWithChildren } from 'react'

const TestProvider = ({children}:PropsWithChildren) => {
  return (
    <MantineProvider >{children}</MantineProvider>
 
  )
}

export default TestProvider