import Logo from './logo'

export default function Header() {
    return (
        <>
            <nav>
                <Logo />
                <ul>
                    <li><a href="#">About <div></div></a></li>
                    <li><a href="#">Collection <div></div></a></li>
                    <li><a href="https://github.com/MathijsN" target='_blank'>Github <div></div></a></li>
                </ul>
            </nav>
        </>
    );
}