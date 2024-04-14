import React from "react";
import { useTranslation } from 'react-i18next';

function Creation() {
    const { t, i18n } = useTranslation();
    return (
        <React.Fragment>
            
            <div className="container mx-auto flex flex-col items-center py-3">

                <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("creation")} </h5>
                    
                    <p className="font-normal text-gray-700 dark:text-gray-500 text-justify">{t("contenue creation 1")}<br/><br/>{t("contenue creation 2")}<br/><br/>{t("contenue creation 3")}</p>
                </div>
            </div>

        </React.Fragment >
    )
}

export default Creation;