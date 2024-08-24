import React from 'react'
import { Snackbar, Alert } from '@mui/material'

interface CustomSnackbarProps {
  open: boolean
  onClose: () => void
  message: string
  severity?: 'success' | 'info' | 'warning' | 'error'
  autoHideDuration?: number
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  onClose,
  message,
  severity = 'success',
  autoHideDuration = 2000
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
