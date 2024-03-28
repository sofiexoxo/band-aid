import { LockOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const defaultTheme = createTheme();
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => { };

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            mt: 10,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlined />
                        </Avatar>
                        <Typography variant="h5">Login</Typography>
                        <Box sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Grid container justifyContent={"flex-end"}>
                                <Grid item>
                                    <Link to="/register">Don't have an account? Register</Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </>
    );
};

export default Login;