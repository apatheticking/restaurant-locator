import React from 'react'
import './RefineSearch.css'

export default function RefineSearch({handleRefineSearchSubmit, searchByRef, searchValueRef}) {
    return (
        <form className={'refine-search-container'} onSubmit={handleRefineSearchSubmit}>
            <select
                className={'drop-down-menu'}
                ref={searchByRef}
            >
                <option value="name">Name</option>
                <option value="address">Address</option>
                <option value="area">Area</option>
            </select>
            <label htmlFor={'refine-search-field'}>Search By</label>
            <input id={'refine-search-field'} className={'text-input'} type='text' ref={searchValueRef}/>
            <input id={'refine-search-submit-button'} className={'submit-button'} type="submit" value={'Search Results'}/>
        </form>
    )
}
