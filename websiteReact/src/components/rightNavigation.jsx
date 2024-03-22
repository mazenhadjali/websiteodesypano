import React from "react";

export default function RightNavigation() {
    return (
        <React.Fragment>
            <form className="flex items-center max-w-sm mx-auto py-2">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        placeholder="Search ..." required />
                </div>
                <button type="submit"
                    className="p-2.5 ms-2 text-sm font-bold text-white bg-green rounded-lg border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
            <div className="mx-auto py-2">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <div
                        className="w-full text-sm px-4 py-2 font-bold text-center rtl:text-right text-black bg-green border-b border-gray-200 rounded-t-lg focus:outline-none">
                        Annonces
                    </div>
                    <div className="py-5">
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Appel d'offres
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Cahier des charges
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Concours
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto py-2">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <div
                        className="w-full text-sm px-4 py-2 font-bold text-center rtl:text-right text-black bg-green border-b border-gray-200 rounded-t-lg focus:outline-none">
                        Documents et Rapports
                    </div>
                    <div className="py-5">
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Rapports
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Publications
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto py-2">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <div
                        className="w-full text-sm px-4 py-2 font-bold text-center rtl:text-right text-black bg-green border-b border-gray-200 rounded-t-lg focus:outline-none">
                        Photos et vidéo
                    </div>
                    <div className="py-5">
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Photos
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Vidéos
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto py-2">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <div
                        className="w-full text-sm px-4 py-2 font-bold text-center rtl:text-right text-black bg-green border-b border-gray-200 rounded-t-lg focus:outline-none">
                        Liens Utiles
                    </div>
                    <div className="py-5">
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Liens Nationaux
                        </a>
                        <a type="button"
                            className="w-full text-sm px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Liens Internationaux
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
