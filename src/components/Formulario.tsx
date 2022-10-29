import {FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import useNoticias from '../hooks/useNoticias';

interface Categoria {
  value: string;
  label: string;
}


const CATEGORIAS:Categoria[] = [
  { value: 'general', label: 'General'},
  { value: 'business', label: 'Negocios'},
  { value: 'entertainment', label: 'Entretenimiento'},
  { value: 'health', label: 'Salud'},
  { value: 'science', label: 'Ciencia'},
  { value: 'sports', label: 'Deportes'},
  { value: 'technology', label: 'Tecnología'},
]
export const Formulario = () => {

  const { handleChangeCategoria, categoria} = useNoticias();
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select label="categoria" onChange={handleChangeCategoria} value={categoria}>
          {CATEGORIAS.map(categoria => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>


      </FormControl>
    </form>
  )
}
