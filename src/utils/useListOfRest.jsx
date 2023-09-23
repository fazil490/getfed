import { useState, useEffect } from "react"

const useListOfRest = () => {
    const [listOfRest, setListOfRest] = useState();
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        setListOfRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRest
}

export default useListOfRest;