import Link from 'next/link'
import Account from '../account/Account'

const Nav = ()=> {
    return(
        <nav>
            <ul>
                <li>
                    <Link href ='/'>
                        FilmFlow
                    </Link>
                </li>

                <li>
                    <Link href =''>
                        search bar
                    </Link>
                </li>

                <li>
                    <Link href =''>
                       carrito
                    </Link>
                </li>

                <li>
                    <Account/>
                </li>
            </ul>
        </nav>
    )
}

export default Nav