import { Divider, Typography } from '@mui/material'
import React from 'react'

const SectionHeader = ({children}) => {
  return (
  <>
    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
        {children}
      </Typography>
      <Divider sx={{ mb: 2, opacity: 0.5 }} />
  </>
  )
}

export default SectionHeader