import Link from "next/link"
import {navigation} from "@/util/navigation";

export default function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-content text-center">
                        <Link href="/" className="logo">
                            <img src="/assets/img/signature.png" alt="Logo" style={{height: "40px"}}/>
                        </Link>
                        <ul className="footer-menu">
                            {navigation.map(({name, path}, index) => (
                                <li key={name + index}><Link href={path}>{name}</Link></li>
                            ))}
                        </ul>
                        <p className="copyright">
                            Created by <span>Nomen Ama</span>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
