import React from 'react'
import { render } from '@testing-library/react'
import DropDown from './DropDown'

import "@testing-library/jest-dom"

const handleClose = () => {
    const x = 'xyz';
    console.log(x);

}
it('checks whether component renders properly', () => {
    render(<DropDown handleClose={handleClose} anchorEl={null} />)

})