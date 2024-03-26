import Link from 'next/link'
import Account from '../account/Account'
import styles from './Navbar.module.css'
import { UseUser, useUser } from '@auth0/nextjs-auth0/client'

const Nav = ()=> {

    const {user} = useUser()

    return(
        <nav>
            <ul className={styles.navList}>
                <li>
                    <Link href ='#'>
                        FilmFlow
                    </Link>
                </li>

                <li>
                    <a>Search bar</a>
                </li>

                <li>
                    <a>Carrito</a>
                </li>

                <li>
                    <Account/>
                    {user ? <a href="/api/auth/logout"><button>Logout</button></a> : ""}
                </li>
            </ul>
        </nav>
    )
}

export default Nav