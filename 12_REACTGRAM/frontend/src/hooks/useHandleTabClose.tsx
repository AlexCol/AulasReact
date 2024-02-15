import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { logout } from '../slices/authSlice';
import { useLayoutEffect } from 'react';

//+realizar contagem de paginas abertas, se fechar todas, dar logout 
//!metodo usando cookies
export const useHandleTabClose = () => {
	const dispatch = useDispatch<AppDispatch>();
	
	useLayoutEffect(() => {
		const numSessions = parseInt(Cookies.get('sessions') || '0', 10) + 1;
		Cookies.set('sessions', numSessions.toString());	

		const sessionActive = window.sessionStorage.getItem("sessionActive");			
		if(!sessionActive && numSessions === 1){
			dispatch(logout());
		};
		window.sessionStorage.setItem("sessionActive", 'true');		

		const handleUnload = async () => {
			const numSessions = parseInt(Cookies.get('sessions') || '0', 10) - 1;
			Cookies.set('sessions', numSessions.toString());
			if (numSessions <= 0) {
				Cookies.set('sessions', '0');
			}			
		};

		window.onunload = handleUnload;
		return () => {
			handleUnload();
		};
	}, []);
};

//eu_axil@yahoo.com.br