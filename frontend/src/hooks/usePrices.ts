import axios from "axios"
import { useState } from "react"
import { SingleCurrencyInfo } from "../utils/helpers"

export const usePrices = () => {
    const [allCurrencies, setAllCurrencies] = useState<SingleCurrencyInfo[]>([])
    const [currency, setCurrency] = useState<any>()
    const [totalPage,setTotalPage] = useState<number>(1);

    const getAllCurrencies = async (page: number, orderBy: string, search: string) => {
        const url = `${process.env.REACT_APP_SERVER_URL}/?offset=${50*(page-1)}&orderBy=${orderBy}&search=${search}`
        const response = await axios.get(url);
        setTotalPage(Math.ceil(response?.data?.data?.stats?.total/50) > 0 ? Math.ceil(response?.data?.data?.stats?.total/50) : 1);
        setAllCurrencies(response?.data?.data?.coins)
    }
    const getCurrency = async (id: string) => {
        const url = `${process.env.REACT_APP_SERVER_URL}/${id}`
        const response = await axios.get(url);
        setCurrency(response.data.data.coin)
    }

    return { getAllCurrencies, allCurrencies, getCurrency, currency, totalPage }
}