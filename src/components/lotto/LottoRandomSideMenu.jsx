import React, { Component } from 'react'


import NumberPlateComponent from './number-plate/NumberPlateComponent';

import styled from 'styled-components';

const LottoRandomSideMenuBox = styled.div`
    width: 30%;

    height: 1000px;
    border-radius: 15px;
    border: 2px solid skyblue;
    display: inline-block;
`;

class LottoRandomSideMenu extends Component {
    render(){
        return (
            
            
            <LottoRandomSideMenuBox>
                <NumberPlateComponent
                    selected={this.props.selected}
                    handleChange={this.props.handleChange}
                    handleButtonOnClick = {this.props.handleButtonOnClick}
                    
                />
            </LottoRandomSideMenuBox>
        );
    }
}

export default LottoRandomSideMenu;