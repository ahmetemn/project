import React,{ useState , useEffect }  from "react" 
import { useDispatch } from 'react-redux';
import React from 'react'




// export const getBranch = () =>{ 

//     useEffect(()=>{
//         try {
//             fetch("http://localhost:3002/hastane/branches",
//               {
//                 method: "POST",
//                 body: JSON.stringify({ userId: user, }),
//                 headers: {
//                   Authorization: `Bearer ${accessToken}`,
//                   "Content-type": "application/json; charset=UTF-8"
//                 },
//               })
      
//               .then(response => response.json())
//               .then(data => sethastaneBranchName(data.data))
      
//           } catch (error) {
//             console.log(error)
//           }
//     },[])
// }


    const dispatch = useDispatch();
    useEffect(()=>{
        try {
            fetch("http://localhost:3002/hastane/branches",
              {
                method: "POST",
                body: JSON.stringify({ userId: user, }),
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  "Content-type": "application/json; charset=UTF-8"
                },
              })
      
              .then(response => response.json())
              .then(data => {
                const mappedData = data.data.map(item => {
                  return item.id;
                });
                dispatch({ type: 'SET_BRANCHES', payload: mappedData });

              });
      
          } catch (error) {
            console.log(error)
          }
    },[])





