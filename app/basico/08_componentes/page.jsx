import Componente from "@/app/componentes/Componente-01"

export default function componente (){
    return <>
        <div> 
            <Componente
                principal="Este é o titulo"
                secundario="Este é o subtitulo"
                pequeno 
            />
        </div>
        <div> 
            <Componente
                principal="login"
                secundario="senha"
                pequeno = {false}
            />
        </div>
    </>
}
