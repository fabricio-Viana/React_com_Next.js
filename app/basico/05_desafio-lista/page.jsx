export default function DesadioLista (){
    const list = [1,2,3,4,5,6,7,8,9,10]

    const listMap = list.map(a=> <li>array nº{a}</li>)
    return <div>
        <ol>{listMap}</ol>
    </div>
}