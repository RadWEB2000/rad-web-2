import Link from "next/link"

export const Menu = () => {
    return(
        <nav>
            <p>RadWEB CMS</p>
            <menu>
                <li><Link href='/dashboard'><a>Start</a></Link></li>
                <li><Link href='/dashboard/content'><a>Treści</a></Link></li>
                <li><Link href='/dashboard/users'><a>Użytkownicy</a></Link></li>
                <li><Link href='/dashboard/permissions'><a>Dostępy</a></Link></li>
                <li><Link href='/dashboard/settings'><a>Ustawienia</a></Link></li>
                <li><Link href='/'><a>Wyloguj</a></Link></li>
            </menu>
        </nav>
    )
}