import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { db } from "../firebase/config";

interface IDocument {
    title: string,
    image: string,
    body: string,
    tags: string[],
    uid: string,
    createdBt: string
}


//+ 1 criando a interface a ser usada no reducer com o state;
interface IInsertDocumentSate {
    loading:boolean,
    error: string
};

const initialState: IInsertDocumentSate = {
    loading: false,
    error: ''
}

//+ 2 criando a ação, definindo valores a serem escolhidos
interface ITitleAction { 
    type: string;
    payload?: string;
};

//+ 4 criando a função 'reducer'
function insertReducer(response: IInsertDocumentSate, action: ITitleAction)  {    
    switch (action.type) {
        case 'LOADING':
            return {loading: true, error: ''};
        case 'INSERTED_DOC':
            return {loading: false, error: ''};
        case 'ERROR':
            return {loading: false, error: 'action.payload'};
        default:
            return response;
    }
}

export const useInsertDocument = (docCollection: string) => {
    const [response, dispatch] = useReducer(insertReducer, initialState);


    // deal with memory leak
    const [cancelled, setCancelled] = useState<boolean>(false);
    const checkCancelBeforeDispatch = (action: ITitleAction) => {
        if (!cancelled) dispatch(action);
    }

    const insertDocument = async(document:IDocument) => {        
        checkCancelBeforeDispatch({
            type: "LOADING"
        })
        try {
            const newDocument = {
                ...document, createdAt: Timestamp.now()
            }
            await addDoc(
                collection(db, docCollection),
                newDocument
            );
            
            checkCancelBeforeDispatch({
                type: "INSERTED_DOC"
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
        insertDocument, response
    }
}