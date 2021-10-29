import { useContext } from 'react';
import { AuthContext } from '../components/Pages/context/AuthProvider';


const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;