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

interface LoginProps {
    onLogin: () => void; // Definieer de onLogin-prop
}

const mockLoginData = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
    { email: "user3@example.com", password: "password3" }
];

const defaultTheme = createTheme();

const Login: React.FC<LoginProps> = ({ onLogin }) => { // Gebruik de LoginProps interface om props te typen
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const matchedUser = mockLoginData.find(user => user.email === email && user.password === password);
        if (matchedUser) {
            // Voer hier de acties uit na succesvol inloggen, zoals doorsturen naar de homepage
            console.log("Login successful");
            // Roep de onLogin-functie aan om de bovenliggende component te informeren over het succesvol inloggen
            onLogin();
            // Redirect de gebruiker naar de homepage of voer andere acties uit
            // Voor demonstratiedoeleinden kunt u window.location.href gebruiken om door te sturen
            window.location.href = "/"; // Doorsturen naar de homepage
        } else {
            alert("Invalid email or password. Please try again.");
        }
        setEmail("");
        setPassword("");
    };

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
