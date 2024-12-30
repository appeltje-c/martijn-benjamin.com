import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router'
import ViewInArIcon from '@mui/icons-material/ViewInArTwoTone';
import { useTinker } from 'tinker-tools';

const pages = [
    { title: 'Creations', path: '/creations' },
    { title: 'Curriculum', path: '/curriculum' },
    { title: 'Contact', path: '/contact' }
]

function Header() {

    const navigate = useNavigate()

    const { buttonColor, iconColor } = useTinker({
        buttonColor: '#fff',
        iconColor: '#ff4d59'
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
                    <ViewInArIcon sx={{ color: iconColor, fontSize: '3rem' }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
export default Header