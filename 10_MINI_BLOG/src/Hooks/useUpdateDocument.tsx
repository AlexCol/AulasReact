import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { db } from "../firebase/config";
import { IDocument } from "../Interfaces/IDocument";

//+ 1 criando a interface a ser usada no reducer com o state;
interface IUpdateDocumentSate {
    loading:boolean,
    error: string
};

const initialState: IUpdateDocumentSate = {
    loading: false,
    error: ''
}

//+ 2 criando a ação, definindo valores a serem escolhidos
interface IUpdateAction { 
    type: string;
    payload?: string;
};

//+ 4 criando a função 'reducer'
function updateReducer(response: IUpdateDocumentSate, action: IUpdateAction)  {    
    switch (action.type) {
        case 'LOADING':
            return {loading: true, error: ''};
        case 'UPDATED_DOC':
            return {loading: false, error: ''};
        case 'ERROR':
            return {loading: false, error: 'action.payload'};
        default:
            return response;
    }
}

export const useUpdateDocument = (docCollection: string) => {
    

    const [response, dispatch] = useReducer(updateReducer, initialState);


    // deal with memory leak
    const [cancelled, setCancelled] = useState<boolean>(false);
    const checkCancelBeforeDispatch = (action: IUpdateAction) => {
        if (!cancelled) dispatch(action);
    }

    const updateDocument = async(document:IDocument) => {
        if(!document.id) return;

        checkCancelBeforeDispatch({
            type: "LOADING"
        })
        try {
            const toUpdate = {
                title: document.title,
                body: document.body,
                image: document.image,
                tags: document.tags                
            }
            const docRef = await doc(db, docCollection, document.id);
            await updateDoc(docRef, toUpdate);
            
            checkCancelBeforeDispatch({
                type: "UPDATED_DOC"
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
        updateDocument, response
    }
}