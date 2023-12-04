import Image from "next/image";
import Text from "../__ui/text";
import Link from "next/link";

const Footer = () => {
    return(
        <Footer classNam="footer">
            <div>
                <div>
                    <Image src="/" width={200} height={200}  alt="logo"/>
                </div>
                <div>
                    <div>
                        <Text tag="h3">Ínicio</Text>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/">Meus projetos</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Meus projetos</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Image src="/" width={200} height={200} alt="asds"/>
                </div>
            </div>
        </Footer>
    );  
}

export default Footer;