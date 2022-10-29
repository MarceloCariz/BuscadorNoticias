import { FC } from "react";
import { NoticiaI  } from "../interfaces";
import {Card, CardContent, CardMedia, Link, Typography, Grid, CardActions} from '@mui/material'
// interface Props extends Noticia {};
interface Props {
    noticia: NoticiaI;
}

export const Noticia:FC<Props> = ({noticia}) => {
    const {urlToImage, title, description,source, url} = noticia;
  return (
    <Grid item md={6} lg={4} >
        <Card>
            {urlToImage && (
                <CardMedia component="img" alt={`Imagen de la noticia ${title}`} image={urlToImage} height={'250'}/>
            )}
            <CardContent>
                <Typography variant="body1" color={"error"}>{source.name}</Typography>
                <Typography variant="h5" component="div">{title}</Typography>
                <Typography variant="body2" >{title}</Typography>
            </CardContent>
            <CardActions>
                <Link href={url} target="_blank" variant="button" width={'100%'} textAlign="center" sx={{textDecoration: 'none'}}>
                    Leer Noticia
                </Link>
            </CardActions>
        </Card>
    </Grid>

  )
}
