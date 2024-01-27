  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+ 4 - custom hooks
import { useEffect, useState } from "react";
import api from "../Axios";
import IProduct from "../Interface/IProduct";

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const useCustomFetch = (searchInfo?: string) => {
    const [mainData, setMainData] = useState<IProduct[]>([]);
    const [paramData, setParamData] = useState<IProduct|null>(null);
    const [method, setMethod] = useState<string>('');
    const [callFech, setCallFect] = useState<boolean>(true);
    console.log(searchInfo);
    
    //! esse troço tah bem zuado, mas serve pra ter uma rotina só pra processar todo tipo de pesquisa
    useEffect(() => {      
      if (!callFech) return;
      setLoading(true);      
      const fetchData = async () => {
        const searchData = (
          searchInfo ? //se tiver informaçaõ
            searchInfo.includes("?") ?
            searchInfo  //se tiver ? é query params, então a informação está pronta, só anexar a url
            : "/"+searchInfo //senão, veio a Id, ai anexo a barra
          : '' //se não tem nada, deixo em branco
        );
        const res = await api.get<IProduct[]>("products" + searchData);
        const data = (Array.isArray(res.data)) ? res.data : [res.data];
        setMainData(data);
        setLoading(false);
        setCallFect(false);
      };
      fetchData();      
    }, [callFech]);

    //! sem isso, quando chamado na busca, como o callFech só é mudado no 'executa', estava saindo na validaçaõ do useeffect acima e não buscava os dados
    useEffect(() => {
      setCallFect(true);
    }, [searchInfo]);

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
  }, [paramData]);
  return { mainData, executa, loading, error };
}

export default useCustomFetch