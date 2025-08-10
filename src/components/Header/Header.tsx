import Link from 'next/link';
import Container from '../Container';

export default function Header() {
    return (
        <header className="  bg-gray-800 text-white py-4">
            <Container className=" flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Sakura Test
                </Link>
                <button>Меню</button>
            </Container>
        </header>
    );
}
