  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+ 4 - custom hooks
import { useEffect, useState } from "react";
import api from "../Axios";
import IProduct from "../Interface/IProduct";

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const useCustomFetch = () => {
    const [mainData, setMainData] = useState<IProduct[]>([]);
    const [paramData, setParamData] = useState<IProduct|null>(null);
    const [method, setMethod] = useState<string>('');
    const [callFech, setCallFect] = useState<boolean>(true);

    useEffect(() => {
      console.log("inicio fetch");
      if (!callFech) return;
      setLoading(true);
      
      const fetchData = async () => {
        const res = await api.get<IProduct[]>("products");
        const data = (Array.isArray(res.data)) ? res.data : [res.data];
        setMainData(data);
        setLoading(false);
      };

      fetchData();
      setCallFect(false);
    }, [callFech]);

    //+loading
    const [loading, setLoading] = useState<boolean>(false);
    //+loading

    //+erros
    const [error, setError] = useState<any>(null);
    //+erros
  const executa = (_data:IProduct, _method:string) => {
    setParamData(_data);
    setMethod(_method);
  };
  useEffect(() => {
    console.log("teste");
    const newRequest = async() => {
      if (!paramData) return;      
      setLoading(true);

      if (method === "POST" && paramData.id === "0") {
        try {
          let nextId: number;
          const data = (await api.get("products")).data;
          if (!Array.isArray(data))
            nextId = Number.parseInt(data.id)+1;
          else {
            const ids:number[] = data.map(prd => Number.parseInt(prd.id));
            nextId = Math.max(...ids)+1;
          }
        
          const product: IProduct = {
            id: nextId.toString(),
            name: paramData.name,
            price: paramData.price
          }
          await api.post("products", product);        
        } catch(error: any) {
          console.log(error.message);
          setError(error.message);
        }
      }
      
      if (method === "DELETE" && paramData.id !== "0") {
        await api.delete(`products/${paramData.id}`);
      }
      
      setParamData(null);
      setMethod('');
      setCallFect(true);
      setLoading(false);  
    }
    newRequest();
  }, [paramData, method]);
  return { mainData, executa, loading, error };
}

export default useCustomFetch