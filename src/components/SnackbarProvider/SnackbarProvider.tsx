import React, { FC } from 'react'
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilsConfigurator } from 'src/components/Toast/Toast'
import {
  SNACKBAR_ANCHOR_ORIGIN,
  SNACKBAR_MAX_NUM,
  SNACKBAR_AUTO_HIDE_DURATION,
} from 'src/shared/constants'

const SnackbarProviderComponent: FC = ({ children }) => (
  <SnackbarProvider
    maxSnack={SNACKBAR_MAX_NUM}
    anchorOrigin={SNACKBAR_ANCHOR_ORIGIN}
    autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
  >
    <>
      <SnackbarUtilsConfigurator />
      {children}
    </>
  </SnackbarProvider>
)

export default SnackbarProviderComponent
