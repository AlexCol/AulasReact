export const hack = () => {
    interface MeuObjeto {
        fbase_key: string;
      }
      
      const nomeDoBanco: string = 'firebaseLocalStorageDb';
      const nomeDaTabela: string = 'firebaseLocalStorage';
      //const objetoParaInserir: MeuObjeto = { fbase_key: '{"fbase_key":"firebase:authUser:AIzaSyCIXQqGKrz5fzGhYYaOSn-IBMO96NfxQgA:[DEFAULT]","value":{"uid":"fmqP9OHBIua6USMWRavFpiY8r4m2","email":"eu_axil@yahoo.com.br","emailVerified":false,"displayName":"alexandre","isAnonymous":false,"providerData":[{"providerId":"password","uid":"eu_axil@yahoo.com.br","displayName":"alexandre","email":"eu_axil@yahoo.com.br","phoneNumber":null,"photoURL":null}],"stsTokenManager":{"refreshToken":"AMf-vBz-fLUa-kvVZB7rs98e5Ke61sDagFY2CEcrlN_vg2IUmPLnfLJ2nmNRGSc1tJM5dAbK3xmZhLR1xOgHHLXeED8RoASAjntZbLG93dA61WiDnOoj7Eu6mDJeMtEbdLkuJvdijLRyttN-ydfpsTjYajN4i2G7xMzQdDdy9KMPVzIFswexK2_Iji2rtEnf1zX-Ixb6NAMtpAdQXCCk4E_zTJRwytUAFg","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjY5NjI5NzU5NmJiNWQ4N2NjOTc2Y2E2YmY0Mzc3NGE3YWE5OTMxMjkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWxleGFuZHJlIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL21pbmlibG9nLWFsZXgiLCJhdWQiOiJtaW5pYmxvZy1hbGV4IiwiYXV0aF90aW1lIjoxNzA2NzIyNTMzLCJ1c2VyX2lkIjoiZm1xUDlPSEJJdWE2VVNNV1JhdkZwaVk4cjRtMiIsInN1YiI6ImZtcVA5T0hCSXVhNlVTTVdSYXZGcGlZOHI0bTIiLCJpYXQiOjE3MDY3MjI1MzMsImV4cCI6MTcwNjcyNjEzMywiZW1haWwiOiJldV9heGlsQHlhaG9vLmNvbS5iciIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJldV9heGlsQHlhaG9vLmNvbS5iciJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UEYpm3roPCVxsykxJo0tzxINUBnZlm_HaZEfEMhghQ9wC83cJLT1YtTwTNKF65iXjmeqR1DvgU9JThZEH2WpXreEf629Nxf0RrizgGwP5pMgD7oS_O_LZgr0uKX8ZXteuEcC2rhPyIjHr3XYyV_crlp4b80AlWRXLJyvVzrShDam3MXLizY7FLuszJt5kLceZ6sBhC6RT8FYsQTdLMFcxSF9le__DMvs5Hj3rTYTWGkQ_eJIzheGnxrHZtsMpfwIl_HerAbonBRJc-I7FVh0YQOet5qMD6k9ylXwoZysLJe0eLPnlP6WrvL-rvif3j52AnfY0YqVkOw_HxaxWLPd6g","expirationTime":1706726134013},"createdAt":"1706720792106","lastLoginAt":"1706722533450","apiKey":"AIzaSyCIXQqGKrz5fzGhYYaOSn-IBMO96NfxQgA","appName":"[DEFAULT]"}}'};
      const objetoParaInserir: MeuObjeto = { fbase_key: '{"fbase_key":"oi"}'};
      
      
      
      const request: IDBOpenDBRequest = window.indexedDB.open(nomeDoBanco, 1);
      
      request.onerror = () => {
        console.error('Erro ao abrir o banco de dados:');
      };
      
      request.onsuccess = (event: Event) => {
        const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      
        // Mostra todas as tabelas existentes no banco de dados
        console.log('Tabelas existentes no banco de dados:', db.objectStoreNames);
    
        
        // Verifica se a tabela existe    
        if (!db.objectStoreNames.contains(nomeDaTabela)) {
          console.error('A tabela não existe no banco de dados.');
          db.close();
          return;
        }  
        // Inicia uma transação de leitura na tabela
        const transaction: IDBTransaction = db.transaction([nomeDaTabela], 'readwrite');
        const objectStore: IDBObjectStore = transaction.objectStore(nomeDaTabela);
    
        // Abre um cursor para iterar sobre os itens da tabela
        const requestCursor: IDBRequest<IDBCursorWithValue | null> = objectStore.openCursor();
    
        requestCursor.onsuccess = (event: Event) => {
          const cursor: IDBCursorWithValue | null = (event.target as IDBRequest<IDBCursorWithValue | null>).result;
    
          if (cursor) {
            // Exibe os dados do item
            console.log('Item:', JSON.stringify(cursor.value));
    
            // Move para o próximo item
            cursor.continue();
          } else {
            // Todos os itens foram exibidos, agora adicionamos o objetoParaInserir
            
            const requestAdd: IDBRequest<IDBValidKey> = objectStore.add(JSON.parse(objetoParaInserir.fbase_key));
    
            requestAdd.onsuccess = (event: Event) => {
              console.log('Objeto adicionado com sucesso:', (event.target as IDBRequest<IDBValidKey>).result);
              db.close();
            };
    
            requestAdd.onerror = (event: Event) => {
              console.error('Erro ao adicionar objeto:', (event.target as IDBRequest<IDBValidKey>).error);
              db.close();
            };
            
            db.close();
          }
        };
      }
      
}