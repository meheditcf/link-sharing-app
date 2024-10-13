import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {FormProvider} from "./context/FormContext.jsx";
import {ImageProvider} from "./context/ImageContext.jsx";
import {LinkProvider} from "./context/LinkContext.jsx";
import HomePage from "./Paths/Homepage/HomePage.jsx";
import PreviewPage from "./Paths/PreviewPage/PreviewPage.jsx";


const AppProviders = ({children}) => (
    <FormProvider>
        <ImageProvider>
            <LinkProvider>
                {children}
            </LinkProvider>
        </ImageProvider>
    </FormProvider>
);

const App = () => {
    return (
        <AppProviders>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/preview" element={<PreviewPage/>}/>
                </Routes>
            </Router>
        </AppProviders>
    );
};

export default App;
