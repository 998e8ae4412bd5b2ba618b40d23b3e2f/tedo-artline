import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayoutDigital from "./digital/ui/AppLayout.jsx";
import HomeDigital from "./digital/pages/Home.jsx";
import ServicesDigital from "./digital/pages/Services.jsx";
import ContactDigital from "./digital/pages/Contact.jsx";
import {BurgerProvider as BurgerProviderDigital} from "./digital/context/BurgerContext.jsx";
import PartnersDigital from "./digital/pages/Partners.jsx";
import AboutDigital from "./digital/pages/About.jsx";
import {Toaster} from "react-hot-toast";
import AppLayoutArchitecture from "./architecture/ui/AppLayout.jsx";
import HomeArchitecture from "./architecture/pages/Home.jsx";
import {BurgerProvider as BurgerProviderArchitecture} from "./architecture/context/BurgerContext.jsx";
import ContactArchitecture from "./architecture/pages/Contact.jsx";
import AboutArchitecture from "./architecture/pages/About.jsx";
import Project1Architecture from "./architecture/pages/Project1.jsx";
import StartPage from "./StartPage.jsx";

const App = () => {
    return (
        <BurgerProviderDigital>
            <BurgerProviderArchitecture>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayoutDigital/>}>
                            <Route path='digital/home' element={<HomeDigital/>}/>
                            <Route path='digital/partners' element={<PartnersDigital/>}/>
                            <Route path='digital/contact' element={<ContactDigital/>}/>
                            <Route path='digital/about' element={<AboutDigital/>}/>
                            <Route path='digital/services/:id' element={<ServicesDigital/>}/>
                        </Route>
                        <Route element={<AppLayoutArchitecture/>}>
                            <Route path='architecture/home' element={<HomeArchitecture/>}/>
                            <Route path='architecture/contacts' element={<ContactArchitecture/>}/>
                            <Route path='architecture/about' element={<AboutArchitecture/>}/>
                            <Route path='architecture/project1' element={<Project1Architecture/>}/>
                        </Route>
                        <Route path='*' element={<StartPage/>}/>
                    </Routes>
                </BrowserRouter>
                <Toaster/>
            </BurgerProviderArchitecture>
        </BurgerProviderDigital>
    );
};

export default App;