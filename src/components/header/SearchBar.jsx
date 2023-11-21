import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
    return (
        <>
            <form className="d-flex" role="search">
                <div className="input-group">
                    <span className="input-group-text"><FaSearch /></span>
                    <input className="form-control rounded-0" type="search" placeholder="Búsqueda" aria-label="Search" />
                    <button className="btn btn-outline-success rounded-0" type="submit">Search</button>
                </div>
            </form>
        </>
    )
}
