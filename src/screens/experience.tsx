import { Canvas } from '@react-three/fiber'
import Imperial from "../components/experience/imperial"
import TSparx from '../components/experience/tsparx'
import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

export default function Experience() {

    const entries = [<Imperial />, <TSparx />]
    const [index, setIndex] = useState<number>(1)

    const forward = () => {
        if (index - 1 === entries.length) return
        setIndex(index + 1)
    }

    const backward = () => {
        setIndex(index - 1)
    }

    return (
        <>
            <Card sx={{ position: 'absolute', maxWidth: 275, right: 10, bottom: 10, zIndex: 10000, background: 'transparent', boxShadow: 'none' }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        2010 - 2018
                    </Typography>
                    <Typography variant="h5" component="div">
                        Sr. Software Engineer
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        T-Sparx (& Ictual)
                    </Typography>
                    <Typography variant="body2">
                        I was the lucky guy who got to work on Curacao where I helped create prepaid solutions for the telecom industry in the Caribbean region.
                    </Typography>
                </CardContent>
                <CardActions sx={{ borderRadius: 5 }}>
                    <IconButton onClick={forward}>
                        <NavigateBeforeIcon color='primary' sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton onClick={backward}>
                        <NavigateNextIcon color='primary' sx={{ fontSize: 40 }} />
                    </IconButton>
                </CardActions>
            </Card>
            <Canvas className='r3f'>

                <Imperial />
                
                <TSparx />

            </Canvas>


        </>
    )
}