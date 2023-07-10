import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import ThemeSwitch from "../elements/ThemeSwitch"
import {navigation} from "@/util/navigation";

export default function Header() {
    const router = useRouter()

    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)

    return (
        <>
            <header className="header-area">
                <div className="container">
                    <div className="gx-row d-flex align-items-center justify-content-between">
                        <Link href="/" className="logo">
                            <img src="/assets/img/signature.png" alt="Logo" style={{height: "40px"}}/>
                        </Link>
                        <nav className={isToggled ? "navbar active" : " navbar"}>
                            <ul className="menu">
                                {navigation.map(({name, path}, index) => (
                                    <li key={name + index} className={router.pathname === path ? "active" : ""}><Link href={path}>{name}</Link></li>
                                ))}
                            </ul>
                            <Link href="/contact" className="theme-btn">Let&apos;s talk</Link>
                        </nav>
                        <Link href="/contact" className="theme-btn">Let&apos;s talk</Link>
                        {/*<ThemeSwitch />*/}
                        <div className={isToggled ? "show-menu active" : " show-menu"} onClick={handleToggle}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
