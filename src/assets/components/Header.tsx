import '../css/header.css'

export default function Header() {
    return (
        <header>
            <a className='logo' href="#">
                <img src="/img/header/logo.svg" alt="" />
                <h1>Open Enterprise</h1>
            </a>

            <nav>
                <a href="#">Why Open Enterprise</a>
                <a href="#">Features</a>
                <a href="#">Contribute</a>
                <a className='request-a' href="#">Request early access</a>
            </nav>
        </header>
    )
}