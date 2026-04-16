import { Paper, Typography } from '@mui/material';
import React from 'react'

const UrgencyButton = ({level, selected, onClick }) => {
  const { label, desc, color, bg, border } = level;
  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        p: 1.5,
        cursor: "pointer",
        textAlign: "center",
        border: selected ? `2px solid ${color}` : "1.5px solid",
        borderColor: selected ? color : "divider",
        bgcolor: selected ? bg : "background.paper",
        transition: "all 0.15s ease",
        userSelect: "none",
        "&:hover": { borderColor: color, bgcolor: bg },
        "&:active": { transform: "scale(0.97)" },
      }}
    >
      <Typography
        variant="body2"
        fontWeight={500}
        sx={{ 
        color: "pink"}}
      >
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary" display="block">
        {desc} 
      </Typography>
    </Paper>
  )
}

export default UrgencyButton