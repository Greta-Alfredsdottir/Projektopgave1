import style from './nav.module.scss'

export function Navbar(){
    return <nav className={style.minNavbar}>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#advokaterne">Advokaterne</a></li>
        <li><a href="#OmLeoLov">Om LeoLov</a></li>
        <li><a href="#Kontakt">Kontakt</a></li>
    </ul>
        <p><span>Leo</span>-Lov</p>
    </nav>
}