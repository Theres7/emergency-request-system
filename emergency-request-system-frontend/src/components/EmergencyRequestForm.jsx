import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Alert, Box, Button, createTheme, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import TypeButton from './TypeButton';
import SectionHeader from './SectionHeader';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HouseIcon from '@mui/icons-material/House';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import SecurityIcon from '@mui/icons-material/Security';
import HubIcon from '@mui/icons-material/Hub';
import UrgencyButton from './UrgencyButton';

function EmergencyRequestForm() {

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contactNumber: '',
    description: '',
    emergencyType: '',
    numberOfPeopleAffected: 1,
    urgencyLevel: 5,
  });

  const [selType, setSelType] = useState(0);
  const [selUrgency, setSelUrgency] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!selType) e.type = "Select an emergency type";
    if (!selUrgency) e.urgency = "Select an urgency level";
    if (!reporter.trim()) e.reporter = "Reporter name is required";
    if (!contact.trim()) e.contact = "Contact number is required";
    if (!building.trim()) e.building = "Building / zone is required";
    if (!description.trim()) e.description = "Please describe the incident";
    return e;
  };
 

  const EMERGENCY_TYPES = [
    {
      id: 1,
      label: "MEDICAL",
      typeName: "MEDICAL",
      color: "#C62828",
      bg: "#FFEBEE",
      border: "#EF9A9A",
      Icon: LocalHospitalIcon
    },
    {
      id: 2,
      label: "FIRE / RESCUE",
      typeName: "RESCUE",
      color: "#E65100",
      bg: "#FFF3E0",
      border: "#FFCC80",
      Icon: FireplaceIcon
    },
    {
      id: 3,
      label: "SHELTER",
      typeName: "SHELTER",
      color: "#4527A0",
      bg: "#EDE7F6",
      border: "#B39DDB",
      Icon: HouseIcon
    },
    {
      id: 4, 
      label: "FOOD / WATER",
      typeName: "FOOD",
      color: "#2E7D32",
      bg: "#E8F5E9",
      border: "#A5D6A7",
      Icon: LocalDrinkIcon
    },
    {
      id: 5,
      label: "SECURITY",
      typeName: "SECURITY",
      color: "#1565C0",
      bg: "#E3F2FD",
      border: "#90CAF9",
      Icon: SecurityIcon
    },
    {
      id: 6,
      label: "OTHER",
      typeName: "OTHER",
      color: "#424242",
      bg: "#F5F5F5",
      border: "#BDBDBD",
      Icon: HubIcon
    },
  ];

  const URGENCY_LEVELS = [
    {
      id: "critical",
      label: "Critical",
      desc: "Immediate life risk",
      color: "#C62828",
      bg: "#FFEBEE",
      border: "#EF9A9A",
      levelScore: 10,
    },
    {
      id: "very-high",
      label: "Very High",
      desc: "Hours to respond",
      color: "#E65100",
      bg: "#FFF3E0",
      border: "#FFCC80",
      levelScore: 9,
    },
    {
      id: "high",
      label: "High",
      color: "#E65100",
      bg: "#FFF3E0",
      border: "#FFCC80",
      levelScore: 7,
    },
    {
      id: "moderate",
      label: "Moderate",
      color: "#E65100",
      bg: "#FFF3E0",
      border: "#FFCC80",
      levelScore: 5,
    },
    {
      id: "low",
      label: "Low",
      desc: "Non-dangerous",
      color: "#E65100",
      bg: "#FFF3E0",
      border: "#FFCC80",
      levelScore: 3,
    }
  ];

  const AFFECTED_OPTIONS = [
    {
     id: 1, label:  "1 person", value: 1
    },
    {
    id: 2, label:  "2-5 people", value: 5
    },
    {
    id: 3, label:  "6-20 people", value: 15
    },
    {
    id: 4, label:  "20+ people", value: 30
    },
    {
    id: 5, label:  "Unknown", value: -1
    },
  ];

  const typeObj = EMERGENCY_TYPES.find((t) => t.id === selType);
  const sevObj = URGENCY_LEVELS.find((s) => s.id === selUrgency);
  const isReady = selType && selUrgency;
 
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1a1a2e" },
      error: { main: "#C62828" },
      warning: { main: "#E65100" },
      success: { main: "#2E7D32" },
      background: { default: "#f5f5f0", paper: "#0d0101" },

      text: {
        primary: "#ffffff",   // main text color
        secondary: "#cbd5e1",
      },

      divider: "#7effe7", // <-- border color
      
    },
    typography: {
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      h5: { fontWeight: 600, letterSpacing: "-0.3px" },
      h6: { fontWeight: 600, letterSpacing: "-0.2px" },
      subtitle2: { fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { 
            textTransform: "none", 
            fontWeight: 500, 
            fontSize: "0.875rem", 
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { 
            backgroundImage: "none",
            borderWidth: "5px"
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderBottomWidth: "1.5px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { fontSize: "0.875rem" },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: { fontSize: "0.875rem" },
        },
      },
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(formData.name)

  };


  const handleEmergencyType = (type) => {

    console.log(type.typeName);

    setFormData((prev) => ({
      ...prev,
      emergencyType: type.typeName
    }));

    setSelType(type.id); 
    setErrors((e) => ({ 
      ...e, type: undefined 
    })); 

  };



  const handleUrgencyClick = (value) => {
    console.log(value);
  
    setFormData((prev) => ({
      ...prev,
      urgencyLevel: value
    }));
  
    setErrors((prev) => ({
      ...prev,
      severity: undefined
    }));
  };


  const handlePeopleCount = (opt) => {
    console.log(opt);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:9090/api/emergency",
        formData
      );

      console.log("Saved:", response.data);

      alert("Request submitted successfully ");

      setFormData({
        name: '',
        location: '',
        contactNumber: '',
        emergencyType: '',
        numberOfPeopleAffected: 1,
        urgencyLevel: 5,
      });

    }
    catch (error) {

      console.error(error);

      alert("Error submitting request ");
    }
  };


  return (
<>
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 700, mx: "auto", py: 3, px: { xs: 2, sm: 0 } }}>
 
        {/* Status bar */}
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 2,
            py: 1.25,
            mb: 2,
            border: "2px solid",
            borderColor: isReady ? (typeObj?.border || "divider") : "divider",
            bgcolor: isReady ? (typeObj?.bg || "background.paper") : "background.paper",
            transition: "all 0.2s ease",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: isReady ? typeObj?.color : "action.disabled",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: isReady ? typeObj?.color : "text.secondary", fontWeight: isReady ? 500 : 400 }}
          >
            {isReady
              ? `${typeObj.label} emergency · ${sevObj.label} urgency — ready to submit`
              : selType
              ? `${typeObj.label} selected — now choose a urgency level`
              : "Select an emergency type to begin"}
          </Typography>
        </Paper>
 
        {/* Emergency Type */}
        <Paper elevation={0} sx={{ 
          p: 2.5, mb: 2, border: "2px solid", 
          borderColor: errors.type ? "error.light" : "divider",
         }}>
          <SectionHeader>Emergency Type</SectionHeader>
          {errors.type && (
            <Alert severity="error" sx={{ mb: 1.5, py: 0.5 }}>{errors.type}</Alert>
          )}
          <Grid container spacing={1.5} name="emergencyType">
            {EMERGENCY_TYPES.map((type) => (
              <Grid item xs={4} sm={2} key={type.id}>
                <TypeButton
                  type={type}
                  selected={selType === type.id}
                  // onClick={() => { setSelType(type.id); setErrors((e) => ({ ...e, type: undefined })); }}
                  onClick={() => handleEmergencyType(type)}
                />
              </Grid>
            ))}
          </Grid> {formData.emergencyType}
        </Paper>
 
        {/* Urgency Level */}
        <Paper elevation={0} sx={{ p: 2.5, mb: 2, border: "2px solid", borderColor: errors.severity ? "error.light" : "divider" }}>
          <SectionHeader>Urgency level</SectionHeader>
          {errors.severity && (
            <Alert severity="error" sx={{ mb: 1.5, py: 0.5 }}>{errors.severity}</Alert>
          )}
          <Grid container spacing={1.5} name="urgencyLevel">
            {URGENCY_LEVELS.map((level) => (
              <Grid item xs={4} key={level.id} >
                <UrgencyButton
                  level={level} 
                  // selected={selUrgency === level.id}
                  selected={formData.urgencyLevel === level.levelScore}
                  // onClick={() => { setSelUrgency(level.id); setErrors((e) => ({ ...e, severity: undefined })); }}
                  onClick={() => handleUrgencyClick(level.levelScore)}
                /> 
              </Grid> 
            ))}
          </Grid> 
        </Paper>
 
        {/* Location & Contact */}
        <Paper elevation={0} sx={{ p: 2.5, mb: 2, border: "2px solid", borderColor: "divider" }}>
          <SectionHeader>Location & contact</SectionHeader>
          <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Reporter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
              /> 
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Contact number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                error={!!errors.contact}
                helperText={errors.contact}
                placeholder="+919876543210"
              />
            </Grid>

              <TextField
                fullWidth
                size="small"
                label="Building / zone"
                name="location"
                value={formData.location}
             onChange={handleChange}
                error={!!errors.building}
                helperText={errors.building}
                placeholder="e.g. Block C, Floor 2"
              />{formData.location}
         
           
          </Grid>
        </Paper>
 
        {/* Incident Details */}
        <Paper elevation={0} sx={{ p: 2.5, mb: 2.5, border: "2px solid", borderColor: "divider" }}>
          <SectionHeader>Incident details</SectionHeader>

            <Grid item xs={12} sm={6}>
              <FormControl 
              sx={{ width: '50%'}}
              size="small" variant="outlined"
              >
                <InputLabel>People affected</InputLabel>
                <Select
                  value={formData.numberOfPeopleAffected}
                  label="People affected"
                  name="numberOfPeopleAffected"
                  onChange={handleChange}
                >
                  {AFFECTED_OPTIONS.map((affectedCountOpt) => (
                    <MenuItem key={affectedCountOpt.id} value={affectedCountOpt.value}>{affectedCountOpt.label}</MenuItem> 
                  ))} 
                </Select> {formData.numberOfPeopleAffected} 
              </FormControl>
            </Grid>         

          <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                fullWidth
                multiline
                rows={4}
                size="small"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
                placeholder="Describe what happened, current situation, and any immediate hazards…"
              />{formData.description}
            </Grid>
        </Paper>
 
        {/* Actions */}
        <Stack direction="row" spacing={1.5}>

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSubmit}
            sx={{
              bgcolor: "red",
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.01em",
              transition: "background 0.2s ease",
              "&.Mui-disabled": { bgcolor: "#BDBDBD", color: "#fff" },
            }}
          >
            Submit emergency request
          </Button>
        </Stack>
      </Box>
    </ThemeProvider>
    </>
  );
};


export default EmergencyRequestForm;