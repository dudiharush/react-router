import { PropsWithChildren, createContext, useEffect, useState }   from "react";

export const RouterContext = createContext({
    path: "",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    pushState: (path: string)=>{},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    replaceState: (path: string)=>{}
});

export const Router = ({children}:PropsWithChildren) => {
    const [path, setPath] = useState<string>("");

    const pushState = (path: string)=> {
        window.history.pushState({},"",path);
        setPath(path);
    }

    const replaceState = (path: string)=> {
        window.history.replaceState({},"",path);
        setPath(path);
    }

    useEffect(()=>{
        setPath(window.location.pathname);
        window.addEventListener("popstate", ()=>{
            console.log('pathname = ' + window.location.pathname);
            setPath(window.location.pathname);
        })
    },[])

    return (
        <RouterContext.Provider value={{path, pushState, replaceState}}>
            {children}
        </RouterContext.Provider>
    )
}