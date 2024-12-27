import { useRef, useState } from 'react'
import { AppBar, Box, Button, Toolbar, Container, Avatar, IconButton, Typography, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb'
import { useNavigate } from 'react-router'

const pages = [
    { title: 'About', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'Resume', path: '/resume' },
    { title: 'Contact', path: '/contact' }
]

function Header() {

    const navigate = useNavigate()
    const anchor = useRef<HTMLButtonElement | null>(null)
    const [isOpen, setOpen] = useState(false)

    const handleNavigation = (path: string) => {
        navigate(path)
        setOpen(false)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}>
                        MB
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            ref={anchor}
                            size="large"
                            onClick={() => setOpen(!!open)}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchor.current}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={isOpen}
                            sx={{ display: { xs: 'block', md: 'none' } }}>
                            {
                                pages.map((page) => (
                                    <MenuItem key={page.path} onClick={() => handleNavigation(page.path)}>
                                        <Typography sx={{ textAlign: 'center' }}>{page.title}</Typography>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        MB
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {
                            pages.map((page) => (
                                <Button
                                    key={page.path}
                                    onClick={() => handleNavigation(page.path)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page.title}
                                </Button>
                            ))
                        }
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Martijn Benjamin" src="images/me.jpeg" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header