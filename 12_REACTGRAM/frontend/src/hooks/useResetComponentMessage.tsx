import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { resetMessage } from "../slices/photoSlice";
import { RootState } from "../store";

type dispatchType = ThunkDispatch<RootState, undefined, UnknownAction> & Dispatch<UnknownAction>;

export function useResetComponentMessage (dispatch: dispatchType) {
return () => {
		setTimeout(() => {
			dispatch(resetMessage());
		}, 2000);
	}
}