import "./styles.css";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import LogoutIcon from '@mui/icons-material/Logout';



export const Navbar = ({ isSignedIn, setIsSignedIn }) => {



    const handleClick = () => {
        setIsSignedIn(!isSignedIn);
    }

    return (
        <Box sx={{ flexGrow: 1, mt: 10 }}>
            <AppBar position="fixed" className="nav">

                {isSignedIn ?
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <Stack direction="column">
                                <HomeIcon sx={{ ml: 5 }} />
                                <Link to="/">Home Page</Link>
                            </Stack>
                        </Typography>

                        <Stack>

                            <Typography variant="h6">
                                <Stack direction="column"
                                    alignItems="center">
                                    <PersonIcon />
                                    <Link to="user/login">Login</Link>
                                </Stack>
                            </Typography>

                        </Stack>
                    </Toolbar>
                    :
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <Stack direction="column">
                                <HomeIcon sx={{ ml:5 }} />
                                <Link to="/">Home Page</Link>
                            </Stack>
                        </Typography>

                        <Stack direction="row" spacing={{ xs: 2, sm: 6, lg: 10 }}>
                            <Typography variant="h6">
                                <Stack direction="column"
                                alignItems="center">
                                    <CreateIcon />
                                    <Link to="recipes/new">Create New Recipe</Link>
                                </Stack>
                            </Typography>

                            <Typography variant="h6">
                                <Stack direction="column"
                                alignItems="center">
                                    <SettingsIcon />
                                    <Link to="user/settings">Setting</Link>
                                </Stack>
                            </Typography>

                            <Typography variant="h6" onClick={handleClick}>
                                <Stack direction="column"
                                alignItems="center">
                                    <LogoutIcon />
                                    <Link to="/">Logout</Link>
                                </Stack>
                            </Typography>
                        </Stack>
                    </Toolbar>

                }
            </AppBar>
        </Box>
    )
}