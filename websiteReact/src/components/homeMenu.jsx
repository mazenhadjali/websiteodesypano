function HomeMenu() {
    return (
        <div className="container mx-auto">
            <ul className="mx-4 text-sm font-medium text-gray-600 shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <li className="w-full focus-within:z-10">
                    <a href="./creation.html"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">Présentation</a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">Projet</a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">Domaine d'activité</a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">Approches de developpement</a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">Partenariat</a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">Outil de gestion</a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">Témoinages</a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">Accès à l'information</a>
                </li>
            </ul>

        </div>
    )
}
export default HomeMenu;