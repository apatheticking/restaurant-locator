import React, { useRef } from 'react'
import './RefineSearch.css'

// export default function RefineSearch({handleRefineSearchSubmit, searchByRef, searchValueRef}) {
export default function RefineSearch({handleRefineSearchSubmit}) {
    const searchByRef = useRef()
    const searchValueRef = useRef()

    return (
        <form 
            className={'refine-search-container'} 
            onSubmit={ (e) => handleRefineSearchSubmit(e, searchByRef, searchValueRef)}>
            <select
                className={'drop-down-menu'}
                ref={searchByRef}
            >
                <option value="name">Name</option>
                <option value="address">Address</option>
                <option value="area">Area</option>
            </select>
            <input className={'text-input'} type='text' ref={searchValueRef}/>
            <input className={'submit-button'} type="submit" value={'Search Results'}/>
        </form>
    )
}
