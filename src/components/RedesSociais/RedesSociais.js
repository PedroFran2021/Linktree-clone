import './RedesSociais.css'

const RedesSociais = () => {

    const ListaRedes = [
        {id:1 , urlNome: 'Instagram', url: ''},
        {id:2 , urlNome: 'Twitter', url: ''},
        {id:3 , urlNome: 'Discord', url: ''},
        {id:4 , urlNome: 'Youtube', url: ''},
        {id:5 , urlNome: 'Tiktok', url: ''},

    ]

    const LinksRedes = ListaRedes.map((props) =>
    <div key ={props.id} className='conteudo_links'>
        <a href={props.url}>{props.urlNome}</a>
    </div>
    )

    return (
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais