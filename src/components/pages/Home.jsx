import Welcome from "../Welcome.jsx";
import Field from "../Field.jsx";
import List from "../List.jsx";
import Task from "../Task.jsx";
import MainContent from "../MainContent.jsx";
import React from "react";


const Home = () => {
    return (
        <>
            <Welcome name={"Dima"} lastname={"Pryimak"}/>
            <Field label={"Введіть текст"} placeholder={"..."}/>
            <List/>
            <Task/>
            <MainContent/>

        </>
    )

}

export default Home;