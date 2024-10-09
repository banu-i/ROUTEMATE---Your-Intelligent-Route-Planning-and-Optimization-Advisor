// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/GlobalVars.css';
import './styles/index.css';
// import HomePage from './pages/homePage';
import LoginSignup from './pages/loginSignupPage/LogInSignUpPage';
// import AboutUsPage from './pages/aboutUsPage';
// import LegalPage from './pages/legalPage';
// import DatenschutzPage from './pages/legalPage/datenschutzPage';
// import RechtlicheHinweise from './pages/legalPage/rechtlicheHinweisePage';
// import ImpressumPage from './pages/impressumPage';
// import LogInPage from './pages/loginPage';
// import LogOutPage from './pages/logoutPage';
// import SignUpPage from './pages/signupPage';
// import LogInSignUpPage from './pages/logoutPage';

// import DashboardPage from './pages/dashboardPage';
// import NewsPage from './pages/newsPage';
// import UserPage from './pages/userPage';
// import AccountPage from './pages/accountPage';
// import ProfileSettingsPage from './pages/accountPage/profileSettingsPage';
// import ResetPasswordPage from './pages/accountPage/resetPasswordPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div> */}
        {/* <NavigationBar /> */}
        {/* <Content> */}
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          {/* <Route path="/legal" element={<LegalPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
              <Route
                path="/RechtlicheHinweise"
                element={<RechtlicheHinweise />}
              />
              <Route path="/loginSignup" element={<LogInSignUpPage />} />
              <Route path="/logout" element={<LogOutPage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route
                path="/profileSettings"
                element={<ProfileSettingsPage />}
              />
              <Route path="/resetPassword" element={<ResetPasswordPage />} /> */}
        </Routes>
        {/* </Content> */}
        {/* <Footer /> */}
        {/* </> */}
      </header>
    </div>
  );
}

export default App;
