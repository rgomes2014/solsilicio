import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <header className="header">
            <div className="logo">
                <Image 
                    src="/assets/images/logo.png"
                    width={188}
                    height={40}
                    alt="logo"
                />
            </div>
            <div className="right">
                <nav>
                    <ul>
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="/projects">Rquivos</Link></li>
                        <li><Link href="/">Aprovações</Link></li>
                        <li><Link href="/">Início</Link></li>
                    </ul>
                </nav>
                
            </div>
            
        </header>
    );
}

export default Header;