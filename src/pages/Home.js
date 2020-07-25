import React from 'react';
import { Main } from '../components/Main';

export function Home(props) {
    return (
        <Main selectedCity={props.selectedCity} getSelectedCity={props.getSelectedCity} />
    )
}