import { useDispatch, useSelector } from "react-redux"
import { setSortOption } from "../redux/sortOptionReducer"
import { RootState } from "../redux/store"
import { sortDashBoardOptions } from "../utils/helpers"
import { Dispatch, SetStateAction } from "react"

type SearchProps = {
    setSearchTerm: Dispatch<SetStateAction<string>>
}
export const SortOptions: React.FC<SearchProps> = ({setSearchTerm}) => {
    const dispatch = useDispatch()
    const sortOption = useSelector(({ sortOptionReducer }: RootState) => sortOptionReducer.option)

    const selectOptions = Object.keys(sortDashBoardOptions);

    return (
        <div className="flex mb-10">
            <select value={sortOption} onChange={(e) => dispatch(setSortOption(e.currentTarget.value))}  className="select select-bordered max-w-xs ml-2 text-white	">
                {selectOptions.map(item => (
                    <option key={item} value={item}>{sortDashBoardOptions[item]}</option>
                ))}
            </select>
            <input
            onChange={e => setSearchTerm(e.target.value)}
            type="text" placeholder="Search cryptocurrency" className="input input-bordered w-full max-w-xs ml-2 text-white" />
        </div>
    )
}