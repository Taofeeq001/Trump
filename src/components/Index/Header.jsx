const Header = () => {
    return (
        <header className="bg-blue-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold">Welcome Back, President Trump</h1>
                <nav className="space-x-4">
                    <a href="#achievements" className="hover:underline">Achievements</a>
                    <a href="#vision" className="hover:underline">Vision</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;