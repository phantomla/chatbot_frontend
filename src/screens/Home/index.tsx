import React from "react"
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation('user');

    return (<div>{t('user_name')}</div>)
}

export default Home