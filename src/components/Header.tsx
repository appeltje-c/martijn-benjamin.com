import { AppBar, Button, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router'

const pages = [
    { title: 'Experience', path: '/' },
    { title: 'Contact', path: '/contact' }
]

function Header() {

    const navigate = useNavigate()

    return (
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', position: 'absolute', zIndex: 10000 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                {
                    pages.map((page) => (
                        <Button
                            key={page.path}
                            onClick={() => navigate(page.path)}
                            sx={{ my: 2, display: 'block', fontSize: '1.2rem', color: '#fff' }}>
                            {page.title}
                        </Button>
                    ))
                }
            </Toolbar>
        </AppBar>
    );
}
export default Header