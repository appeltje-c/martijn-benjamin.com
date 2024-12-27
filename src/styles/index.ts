import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material/styles'

const options: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#64b5f6',
        },
        secondary: {
            main: '#76ff03',
        },
    },
}

export default responsiveFontSizes(createTheme(options))