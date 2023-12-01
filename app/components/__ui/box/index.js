import Link from "next/link";

const Box = () => {
    return(
        <header className="header">
            <div className="logo">
                asdasdasd
            </div>
            <div className="right">
                <nav>
                    <ul>
                        <li><Link className="/">Início</Link></li>
                        <li><Link className="/projects">Rquivos</Link></li>
                        <li><Link className="/">Aprovações</Link></li>
                        <li><Link className="/">Início</Link></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}

export default Box;