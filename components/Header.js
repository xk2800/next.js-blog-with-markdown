import Link from 'next/link';

// _rfc
export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href="/" passHref>
                    <h2>My Blog</h2>
                </Link>
            </div>
        </header>
    );
}
