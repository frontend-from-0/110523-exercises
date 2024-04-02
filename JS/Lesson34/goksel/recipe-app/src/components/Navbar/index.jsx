import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
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
                            <Stack direction="column" display="flex" alignItems="flex-start">
                                <HomeIcon sx={{ ml: 5 }} />
                                <Button size="small" component={Link} to="/">
                                    <Typography
                                    color="white">Home Page</Typography>
                                </Button>
                            </Stack>
                        </Typography>

                        <Stack>

                            <Typography variant="h6">
                                <Stack direction="column"
                                    alignItems="center">
                                    <PersonIcon />
                                    <Button size="small" component={Link} to="user/login">
                                        <Typography color="white">LOGIN</Typography>
                                    </Button>
                                </Stack>
                            </Typography>

                        </Stack>
                    </Toolbar>
                    :
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <Stack direction="column" display="flex" alignItems="flex-start">
                                <HomeIcon sx={{ ml: 5 }} />
                                <Button component={Link} size="small" to="/">
                                    <Typography
                                    color="white">Home Page</Typography>
                                </Button>
                            </Stack>
                        </Typography>

                        <Stack direction="row" spacing={{ xs: 2, sm: 6, lg: 10 }}>
                            <Typography variant="h6">
                                <Stack direction="column"
                                    alignItems="center">
                                    <CreateIcon />
                                    <Button component={Link} size="small" to="recipes/new">
                                        <Typography color="white">
                                            Create New Recipe
                                        </Typography>
                                    </Button>
                                </Stack>
                            </Typography>

                            <Typography variant="h6">
                                <Stack direction="column"
                                    alignItems="center">
                                    <SettingsIcon />
                                    <Button component={Link} size="small" to="user/settings">
                                        <Typography color="white">
                                            Setting
                                        </Typography>
                                    </Button>
                                </Stack>
                            </Typography>

                            <Typography variant="h6" onClick={handleClick}>
                                <Stack direction="column"
                                    alignItems="center">
                                    <LogoutIcon />
                                    <Button component={Link} size="small" to="/">
                                        <Typography color="white">
                                            Logout
                                        </Typography>
                                    </Button>
                                </Stack>
                            </Typography>
                        </Stack>
                    </Toolbar>

                }
            </AppBar>
        </Box>
    )
}