import React from "react";

export default function RightNavigation() {
    return (
        <React.Fragment>
            <div className="m-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <div
                        className="w-full text-sm px-4 py-2 font-bold text-center rtl:text-right text-black bg-green border-b border-gray-200 rounded-t-lg focus:outline-none">
                        Annonces
                    </div>
                    <div className="py-5">
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Appel d'offres
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Cahier des charges
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Concours
                        </a>
                    </div>
                </div>
            </div>

            <div className="m-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <div
                        className="w-full text-sm px-4 py-2 font-bold text-center rtl:text-right text-black bg-green border-b border-gray-200 rounded-t-lg focus:outline-none">
                        Documents et Rapports
                    </div>
                    <div className="py-5">
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Rapports
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Publications
                        </a>
                    </div>
                </div>
            </div>
            <div className="m-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <div
                        className="w-full text-sm px-4 py-2 font-bold text-center rtl:text-right text-black bg-green border-b border-gray-200 rounded-t-lg focus:outline-none">
                        Photos et vidéo
                    </div>
                    <div className="py-5">
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Photos
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Vidéos
                        </a>
                    </div>
                </div>
            </div>
            <div className="m-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <div
                        className="w-full text-sm px-4 py-2 font-bold text-center rtl:text-right text-black bg-green border-b border-gray-200 rounded-t-lg focus:outline-none">
                        Liens Utiles
                    </div>
                    <div className="py-5">
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Liens Nationaux
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Liens Internationaux
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
