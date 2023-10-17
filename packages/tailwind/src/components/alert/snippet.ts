import { ark } from '@ark-ui/react'
import { createStyleContext } from '~/lib/create-style-context'
import { alertStyles } from './recipe'

const { withProvider, withContext } = createStyleContext(alertStyles)

export const Alert = withProvider(ark.div, 'root')
export const AlertContent = withContext(ark.div, 'content')
export const AlertDescription = withContext(ark.p, 'description')
export const AlertIcon = withContext(ark.svg, 'icon')
export const AlertTitle = withContext(ark.h5, 'title')