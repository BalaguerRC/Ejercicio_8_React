import React from 'react';
import FilterContainer from '../containers/FilterContainer';


const Filteroptions = () => {

    return (
        <div className='filters'>
            <FilterContainer filter="SHOW_ALL">All</FilterContainer>
            <FilterContainer filter="SHOW_COMPLETED">COMPLETED</FilterContainer>
            <FilterContainer filter="SHOW_ACTIVE">ACTIVE</FilterContainer>
        </div>
    );
};




export default Filteroptions;
