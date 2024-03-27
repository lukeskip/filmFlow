import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import styles from './Navbar.module.scss'
import logoimg from '../../img/logo-white-expanded.png';
import userpic from '../../img/userpic.png'
import cart from '../../img/shopping-cart.png'
import { UseUser, useUser } from '@auth0/nextjs-auth0/client'

const Nav = (props)=> {

    const {data} = props;
    const {user} = useUser()

    const [showDropdown, setShowDropdown] = useState(false);

    const handleAccountClick = () => {
      setShowDropdown(!showDropdown);
    };

    return(
        <nav>
            <ul className={styles.navList}>
                <div className={styles.logo}>
                    
                    <li>
                        <Link href ='/home'>
                            
                            <Image src={logoimg} alt="Logo" width={150} height={30} />
                            
                        </Link>
                    </li>

                </div>
                

                <div className={styles.searchBar}>
                   <li >
                        <input type="text" placeholder="Search" />
                  </li> 
                </div>
                

                
                <div className={styles.toRight}> 
                    <li >
                        <Image src={cart} alt="Cart" width={30} height={30} />
                    </li>

                    <li >
                        <Image src={userpic} alt="Account" width={30} height={30} onClick={handleAccountClick} />
                            {showDropdown && (
                            <div className={styles.dropdown}>

                                <ul>

                                <li>
                                    <Link href="#">
                                        My Account
                                    </Link>
                                </li>

                                <li> 
                                    <Link href="/form">
                                        Form
                                    </Link>
                                </li>

                                <li>
                                    {user ? <a href="/api/auth/logout"><button>Log out</button></a> : ""}
                                </li>

                                </ul>
                            </div>
                        )}
                    </li>   
                </div>
            </ul>
        </nav>
    )
}

export default Nav