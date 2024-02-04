import { useEffect, useReducer, useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

interface IDeletedDocumentSate {
    loading:boolean,
    error: string
};

const initialState: IDeletedDocumentSate = {
    loading: false,
    error: ''
}

interface IDeleteAction { 
    type: string;
    payload?: string;
};

function deleteReducer(response: IDeletedDocumentSate, action: IDeleteAction)  {    
    switch (action.type) {
        case 'LOADING':
            return {loading: true, error: ''};
        case 'DELETED_DOC':
            return {loading: false, error: ''};
        case 'ERROR':
            return {loading: false, error: 'action.payload'};
        default:
            return response;
    }
}

export const useDeleteDocument = (docCollection: string) => {
    

    const [response, dispatch] = useReducer(deleteReducer, initialState);
    
    // deal with memory leak
    const [cancelled, setCancelled] = useState<boolean>(false);
    const checkCancelBeforeDispatch = (action: IDeleteAction) => {
        if (!cancelled) dispatch(action);
    }
    
    const deleteDocument = async (id:string|undefined) => {
        if (!id) return;
        checkCancelBeforeDispatch({
            type: "LOADING"
        })

        try {
            await deleteDoc(doc(db, docCollection, id));
            
            checkCancelBeforeDispatch({
                type: "DELETED_DOC"
            })
        } catch (error:any) {
            let errorMessage:string = error.message;
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: errorMessage
            })
        }
    }

    
    useEffect(() => {
        setCancelled(false);
        return () => {
            setCancelled(true);
        }
    }, []);
    
    return {
        deleteDocument, response
    }
}