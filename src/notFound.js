import {Link} from 'react-router-dom'

const notFound = () => {

    return (
        <div className="Basket">
            <div className ="App-header__ins">
                <Link to="/">
                    <div className = "logo"/>
                </Link>
                <h1>Такой страницы не существует</h1>
            </div>
        </div>
    )
}
export default notFound;