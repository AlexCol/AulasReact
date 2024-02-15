import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { logout } from '../slices/authSlice';
import { useLayoutEffect } from 'react';

interface ICookiConfig {
	sameSite: 'Strict',
	secure: boolean
}
const cookieConfig:ICookiConfig = {
	sameSite: 'Strict',
	secure: true
}

//+realizar contagem de paginas abertas, se fechar todas, dar logout 
//!metodo usando cookies
export const useHandleTabClose = () => {
	const dispatch = useDispatch<AppDispatch>();

	useLayoutEffect(() => {
		const numSessions = parseInt(Cookies.get('sessions') || '0', 10) + 1;
		Cookies.set('sessions', numSessions.toString(), cookieConfig);

		const sessionActive = Cookies.get('sessionActive');			
		if(!sessionActive && numSessions === 1){
			dispatch(logout());
		};
		Cookies.set('sessionActive', 'true', cookieConfig);	

		const handleUnload = async () => {
			const numSessions = parseInt(Cookies.get('sessions') || '0', 10) - 1;
			Cookies.set('sessions', numSessions.toString(), cookieConfig);
			if (numSessions <= 0) {
				Cookies.set('sessions', '0', cookieConfig);
			}			
		};

		//window.onunload = handleUnload;
		window.addEventListener('beforeunload', handleUnload, {once: true});
		return () => {
			handleUnload();
		};
	}, []);
};

//eu_axil@yahoo.com.br



/* //funciona
	useLayoutEffect(() => {
		const numSessions = parseInt(Cookies.get('sessions') || '0', 10) + 1;
		Cookies.set('sessions', numSessions.toString(), cookieConfig);

		const sessionActive = window.sessionStorage.getItem("sessionActive");			
		if(!sessionActive && numSessions === 1){
			dispatch(logout());
		};
		window.sessionStorage.setItem("sessionActive", 'true');		

		const handleUnload = async () => {
			const numSessions = parseInt(Cookies.get('sessions') || '0', 10) - 1;
			Cookies.set('sessions', numSessions.toString(), cookieConfig);
			if (numSessions <= 0) {
				Cookies.set('sessions', '0', cookieConfig);
			}			
		};
*/