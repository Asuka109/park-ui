import * as Ark from '@ark-ui/react/dialog'
import { createStyleContext } from '~/lib/create-style-context'
import { dialogStyles } from './recipe'
export * from '@ark-ui/react/dialog'

export type DialogProps = React.ComponentProps<typeof Dialog>

const { withProvider, withContext } = createStyleContext(dialogStyles)

const DialogRoot = withProvider(Ark.Dialog.Root, 'root')
export const DialogBackdrop = withContext(Ark.Dialog.Backdrop, 'backdrop')
export const DialogCloseTrigger = withContext(Ark.Dialog.CloseTrigger, 'closeTrigger')
export const DialogContainer = withContext(Ark.Dialog.Container, 'container')
export const DialogContent = withContext(Ark.Dialog.Content, 'content')
export const DialogDescription = withContext(Ark.Dialog.Description, 'description')
export const DialogTitle = withContext(Ark.Dialog.Title, 'title')
export const DialogTrigger = withContext(Ark.Dialog.Trigger, 'trigger')

export const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Container: DialogContainer,
  Content: DialogContent,
  Description: DialogDescription,
  Title: DialogTitle,
  Trigger: DialogTrigger,
})