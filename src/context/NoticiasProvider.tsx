import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, createContext } from "react";
import {  NoticiaI } from "../interfaces";


type Props = {
    children: React.ReactNode
}

interface ContextInterface {
    // value: Object;
    categoria: string;
    noticias: NoticiaI[];
    totalNoticias: number;
    pagina:number;
    setCategoria: React.Dispatch<React.SetStateAction<string>>;
    handleChangeCategoria:  ((event: SelectChangeEvent<string>, child: React.ReactNode) => void) | undefined;
    handleChangePagina :  ((event: React.ChangeEvent<unknown>, page: number) => void) | undefined;
}



const NoticiasContext = createContext({} as ContextInterface);


const NoticiasProvider = ({children}:Props) =>{
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(()=>{
        const consultarAPI = async () =>{
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const {data} = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
            setPagina(1);
        };
        consultarAPI()
    },[ categoria])

    useEffect(()=>{
        const consultarAPI = async () =>{
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const {data} = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);  
        };
        consultarAPI()
    },[ pagina])

    const handleChangeCategoria = (e:SelectChangeEvent<string>) =>{
        setCategoria(e.target.value);
    }

    const handleChangePagina = (event: React.ChangeEvent<unknown>, page: number) =>{
        setPagina(page)
        // console.log(page)
    }

    return(
        <NoticiasContext.Provider  value={{categoria, setCategoria, handleChangeCategoria, noticias, totalNoticias, handleChangePagina, pagina}}>
            {children}
        </NoticiasContext.Provider>
    )
}


export {NoticiasProvider};

export default NoticiasContext;