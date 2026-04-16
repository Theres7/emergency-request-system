import { Box, Icon, Paper, Tooltip, Typography } from '@mui/material';
import React from 'react'

const TypeButton = ({ type, selected, onClick }) => {
  const { label, color, bg, border, Icon } = type;
  return (
    <Tooltip placement="top" arrow>
      <Paper
        elevation={0}
        onClick={onClick}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          border: selected ? `2px solid ${color}` : "1.5px solid",
          "&:hover": {
            borderColor: color,
            bgcolor: bg,
            transform: "translateY(-1px)",
          },
          "&:active": { transform: "scale(0.97)" },
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: selected ? color : bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.15s ease",
          }}
        >
            <Icon sx={{ color: type.color }} />
        </Box>
        <Typography variant="body2" fontWeight={500} textAlign="center">
          {label}
        </Typography>
      </Paper>
    </Tooltip>
  )
}

export default TypeButton