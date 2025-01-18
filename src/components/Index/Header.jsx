const Header = () => {
    return (
        <header className=" text-white py-4 z-[5000] fixed top-0 w-full">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold">Trump</h1>
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