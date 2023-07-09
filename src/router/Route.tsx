import { PropsWithChildren, useContext } from "react"
import { RouterContext } from "./Router";

type RouteProps = PropsWithChildren<{
    path: string;
}>

export const Route = ({path,children}:RouteProps) => {
    const {path: currentPath} = useContext(RouterContext);
    if(currentPath.split("?")[0] === path.split("?")[0]){
        return <>{children}</>
    }

    return null;
}