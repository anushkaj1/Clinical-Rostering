import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme();

export default function Register() {
    const [eid, setEid] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [primarydesg, setPrimarydesg] = useState('');
    const [secondarydesg, setSecondarydesg] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
    //   const data = new FormData(event.currentTarget);
      console.log({
        eid: eid,
        password: password,
        fname: fname,
        lname: lname,
        primarydesg: primarydesg,
        secondarydesg: secondarydesg,
        location: location
      });

      setEid('');
      setFname('');
      setLname('');
      setLocation('');
      setPassword('');
      setPrimarydesg('');
      setSecondarydesg('');

      Array.from(event.target).forEach((e) => (e.value = ""));
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register new user
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="fname"
                    required
                    fullWidth
                    id="fname"
                    label="First Name"
                    autoFocus
                    onChange={(event) => setFname(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lname"
                    label="Last Name"
                    name="lname"
                    autoComplete="family-name"
                    onChange={(event) => setLname(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="eid"
                    label="Employee ID"
                    name="eid"
                    autoComplete="eid"
                    onChange={(event) => setEid(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="primarydesg"
                    label="Primary Designation"
                    name="primarydesg"
                    autoComplete="primarydesg"
                    onChange={(event) => setPrimarydesg(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="secondarydesg"
                    label="Secondary Designation"
                    name="secondarydesg"
                    autoComplete="secondarydesg"
                    onChange={(event) => setSecondarydesg(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="location"
                    label="Location"
                    name="location"
                    autoComplete="location"
                    onChange={(event) => setLocation(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(event) => setPassword(event.target.value)} 
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}