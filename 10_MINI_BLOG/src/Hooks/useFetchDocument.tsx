import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { IDocument } from "../Interfaces/IDocument";
import { db } from "../firebase/config";


export const useFetchDocument = (docCollection:string, id: string) => {
    const [document, setDocument] = useState<IDocument|null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // deal with memory leak
    const [cancelled, setCancelled] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            if(cancelled) return;
            
            setLoading(true);
            try {
                //const refDoc = await doc(db, docCollection, id);
                const refDoc = await doc(db, docCollection, id);
                const docSnap = await getDoc(refDoc);
                setDocument(docSnap.data() as IDocument);
            } catch (error: any) {
                console.log(error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }            
        }
        
        loadData();
    }, [docCollection, id, cancelled]);

    useEffect(() => {
        setCancelled(false);
        return () => {
            setCancelled(true);
        }
    }, []);

    return {document, loading, error};
}