import Link from 'next/link'
import Account from '../account/Account'
import styles from './Navbar.module.css'

const Nav = ()=> {
    return(
        <nav>
            <ul className={styles.navList}>
                <li>
                    <Link href ='/home'>
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
                </li>
            </ul>
        </nav>
    )
}

export default Nav