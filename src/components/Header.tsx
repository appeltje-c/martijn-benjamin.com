import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { useTinker } from 'tinker-tools';

const pages = [
    { title: 'Curriculum', path: '/curriculum' },
    { title: 'Contact', path: '/contact' }
]

function Header() {

    const navigate = useNavigate()

    const { buttonColor, iconColor } = useTinker({
        buttonColor: '#fff',
        iconColor: '#00ff11'
    })

    return (
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', position: 'absolute', zIndex: 10000 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'right' }}>
                {
                    pages.map((page) => (
                        <Button
                            key={page.path}
                            onClick={() => navigate(page.path)}
                            sx={{ my: 2, color: buttonColor, display: 'block', fontSize: '1.2rem' }}>
                            {page.title}
                        </Button>
                    ))
                }
                <IconButton onClick={() => navigate('/')} sx={{ mr: 2 }} >
                    <Typography sx={{ color: iconColor, fontSize: '1.2rem' }}>MB</Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
export default Header