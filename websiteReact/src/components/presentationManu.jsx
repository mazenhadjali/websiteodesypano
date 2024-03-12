function PresentationMenu() {
    return (
        <div className="container mx-auto">
            <ul
                className="mx-4 rounded-lg text-sm font-medium text-gray-600 shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        Création
                    </a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        Champs d'Intervention
                    </a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        Historique
                    </a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        Organisation
                    </a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        Les Directions Régionales
                    </a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        Zone d'Intervention
                    </a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#"
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        Groupe Cible
                    </a>
                </li>
            </ul>

        </div>
    )
}
export default PresentationMenu;