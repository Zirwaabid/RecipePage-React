import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image1 from "./assets/img1.jpeg";
import "./RecipePage.css"

export default function RecipePage() {
    return <>
    <div className='card-container'>
        <Card sx={{ maxWidth: 700, maxHeight: 900 }}>
            <CardActionArea>
                <div className="Img">
                    <CardMedia
                        component="img"
                        height="300"
                        image={Image1}
                        alt="green iguana"
                         sx={{ borderRadius: 2 }} 
                    />

                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                     <h2>  Simple Omelette Recipe</h2>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
            </div>
    </>
}