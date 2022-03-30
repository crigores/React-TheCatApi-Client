import { createContext, useState, useEffect} from "react";
import {ICats} from '../models/Cat';

type Props = {
    children?: JSX.Element[] | JSX.Element,
};

interface context {
    listCats: string[],
    getCats: ()=>void,
    getCatsByBreed: any,
    getCatsByCategory: any

}

const CatContext = createContext<context>({listCats: [], getCats:Function, getCatsByBreed:Function, getCatsByCategory:Function});


export const CatProvider: React.FC = ({children}) =>{
    const [listCats, setListCats] = useState([]);
    
    useEffect(()=> {
        getCats();
    },[]);

    // GET CATS DEFAULT
    const getCats = async () =>{
        const response = await fetch(`/cats`);
        const data = await response.json();
        
        setListCats(data.cats);
    }

    // GET CATS BY BREEDS
    const getCatsByBreed = async (id: any) =>{
        const response = await fetch(`/cats/breed/${id}`);
        const data = await response.json();
        
        // console.log("id: ", id , "data", data);
        setListCats(data.cats);
    }

    // GET CATS BY CATEGORY
    const getCatsByCategory = async (id: any) =>{
        const response = await fetch(`/cats/category/${id}`);
        const data = await response.json();
        
        // console.log("id: ", id , "data", data);
        setListCats(data.cats);
    }


    return (
    <CatContext.Provider value={{listCats, getCats, getCatsByBreed, getCatsByCategory}}>
        {children}
    </CatContext.Provider>
    )
}

export default CatContext;