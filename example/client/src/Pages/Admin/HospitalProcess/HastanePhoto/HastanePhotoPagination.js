import React from 'react'
import {Link} from "react-router-dom";
export default function HastanePhotoPagination({postPerPage,totalPost , paginate}) {

const pageNumbers=[];

for(let i = 1 ; i <= Math.ceil(totalPost/postPerPage) ; i++)
{
        pageNumbers.push(i);
}

  return (
    <nav  >

                        <ul   className='pagination'>

                            {pageNumbers.map((number) =>{

                                        return(
                                                    <li   className='page-item'>

                                                            <Link onClick={() =>paginate(number)}   className='page-link'>
                                                                {
                                                                    number
                                                                }
                                                            </Link>

                                                    </li>

                                        )


                            })}
                        </ul>


    </nav>
  )
};