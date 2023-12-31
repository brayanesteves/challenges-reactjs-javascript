import React, { useState }                                                   from 'react';
import { BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing }                                                           from './pages/Landing';
import { Home }                                                              from './pages/Home';
import { Dashboard }                                                         from './pages/Dashboard';
import { Analytics }                                                         from './pages/Analytics';
import { Admin }                                                             from './pages/Admin';
import { Navigation }                                                        from './utils/Navigation';
import { ProtectedRoute }                                                    from './components/ProtectedRoute';
import { Contact }                                                           from './pages/Contact';
import MinuDevApp                                                            from './pages/MinuDev';
import { CatsHome }                                                          from './pages/MinuDev/Test/JuniorsAndTrainees/Cats/pages/CatsHome';
import JuanJoseOrtizApp                                                      from './pages/JuanJoseOrtiz';
import RendererList                                                          from './pages/JuanJoseOrtiz/RendererList';
import RedererListAPIUserJSONPlaceholder                                     from './pages/JuanJoseOrtiz/RedererListAPI_User_JSONPlaceholder';
import FormRegister                                                          from './pages/JuanJoseOrtiz/FormRegister';
import OptimizeTheComponent                                                  from './pages/JuanJoseOrtiz/OptimizeTheComponent';

function App() {

  const [user, setUser] = useState(null);

  const login = () => {
    // Request 'Done'.
    setUser({
      id:1,
      name:"Halcon",
      permission:['analyze'],
      roles:['admin']
    });
  };

  const logout = () => {
    setUser(null);<Home />
  };

  return (
    <>
      <BrowserRouter>
        <Navigation user={user} />
        
        {
          user ? (            
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )
        }

        <Routes>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>            
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/analytics" element={
            <ProtectedRoute isAllowed={!!user && user.permission.includes('analyze')} redirecTo='/home'>              
              <Analytics />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute isAllowed={!!user && user.roles.includes('admin')} redirecTo='/home'>              
              <Admin />
            </ProtectedRoute>          
          } />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/minudevs" element={<MinuDevApp />} />
          <Route path="/minudevs/catshome" element={<CatsHome />} />
          <Route path="/juanjoseortiz" element={<JuanJoseOrtizApp />} />
          <Route path="/juanjoseortiz/rendererlist" element={<RendererList />} />
          <Route path="/juanjoseortiz/renderer-list-user-jsonplaceholder" element={<RedererListAPIUserJSONPlaceholder />} />
          <Route path="/juanjoseortiz/form-register" element={<FormRegister />} />
          <Route path="/juanjoseortiz/optimize-the-component" element={<OptimizeTheComponent />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
