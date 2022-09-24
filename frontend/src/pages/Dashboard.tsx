import { useState } from "react"
import { useSelector } from "react-redux"
import { AllCurrencies } from "../components/AllCurrencies"
import { RootState } from "../redux/store"
import { SortOptions } from "../components/SortOptions";

export const Dashboard = () => {
    const sortOption = useSelector((state: RootState) => state.sortOptionReducer.option);
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <div className="container my-10 overflow-x-auto  m-auto	">
            <div className="flex justify-between">
            <SortOptions setSearchTerm={setSearchTerm} />
            </div>
            <AllCurrencies sortOption={sortOption} searchTerm={searchTerm}  />
        </div>
    )
}