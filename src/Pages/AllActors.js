import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import CardLists from './CardLists';

let GET_ALL_ACTORS = gql`
    query($page:Int, $filter: FilterCharacter){
        characters(page:$page,filter:$filter){
        info {
            pages
            count
            next
            prev
        }
        results{
                id
                name
                image
                status
                gender
        }
    }        
    }
`

function AllActors() {
    let { data, loading, fetchMore } = useQuery(GET_ALL_ACTORS, { variables: { page: 1, filter: {} } })
    let [nextPBtn, setNextPBtn] = useState(1);
    let [allActors, setAllActors] = useState('');


    if (loading) {
        <h3>Loading Data</h3>
    }


    const nextPageFun = () => {
        fetchMore({
            variables: { page: nextPBtn, filter: {} }, updateQuery: (prevResult, { fetchMoreResult }) => {
                return fetchMoreResult;
            }
        })
    }

    const prevPageFun = () => {
        fetchMore({
            variables: { page: data.characters.info.prev, filter: {} }, updateQuery: (prevResult, { fetchMoreResult }) => {
                return fetchMoreResult;
            }
        })
    }

    useEffect(() => {
        if (data) {
            setNextPBtn(data.characters.info.next)
            return setAllActors(data.characters.results)
        }
    }, [data])


    return (
        <>

            <div className='container'>
                {!allActors ? <h2>Data is fetching....</h2> : allActors.map((individualActor, iValue) =>

                    <CardLists key={iValue} actor={individualActor} />

                )}
            </div>

            <div className='paginationBtns'>
                <button disabled={nextPBtn > 2 ? false : true} onClick={prevPageFun} className='buttons'>Prev Page</button>
                <button onClick={nextPageFun} className='buttons'> Next Page</button>
            </div>
        </>
    )

}

export default AllActors


