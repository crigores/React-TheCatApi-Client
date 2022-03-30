import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CatProvider } from 'src/context/CatContext';

import CatList from "src/components/CatList";
import CatOrder from "src/components/CatOrder";

export const theCatApi = () => {

    return (
        <CatProvider>
            <CatOrder />
            <CatList />
        </CatProvider>
    )
}
