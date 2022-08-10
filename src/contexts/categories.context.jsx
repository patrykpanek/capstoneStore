import { createContext, useState, useEffect } from "react";


import { getCategoriesAndDocuments } from "../utlis/firebase/fireabse.utils.js";


export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    
    useEffect(()=> {
        const getCategories = async()=> {

            const categoryMap = await getCategoriesAndDocuments()
        console.log(categoryMap);
        setCategoriesMap(categoryMap);
        }
        
        getCategories();
    },[])
   

    return (
        <CategoriesContext.Provider value={{categoriesMap}}>
            {children}
        </CategoriesContext.Provider>
    )
}