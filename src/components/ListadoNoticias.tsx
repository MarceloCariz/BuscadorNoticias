import useNoticias from '../hooks/useNoticias'
import {Grid, Typography, Pagination, Stack} from '@mui/material'
import { Noticia } from './Noticia';

export const ListadoNoticias = () => {
    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias();

    const totalPaginas = Math.ceil(totalNoticias /20);  // son 20  ya que la api solo retorna 20 articulos  , ceil reodndea hacia arriba 

return (
    <>
        <Typography textAlign={'center'} marginY={5}  component={'h2'} variant="h3">Ultimas noticias</Typography>
        <Grid container spacing={2}>
            {noticias.map((noticia)=>(
                <Noticia key={noticia.url} noticia={noticia}/>
            ))}
        </Grid>
        <Stack sx={{marginX:5}} justifyContent={'center'} alignItems="center" spacing={2} direction="row">
            <Pagination count={totalPaginas} page={pagina} color='primary' onChange={handleChangePagina}/>
        </Stack>
    </>
)
}
