import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage/index';
import Orphanage from './pages/Orphanage/index';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/app" component={OrphanagesMap}/>
                <Route exact path="/orphanages/create" component={CreateOrphanage}/>
                <Route path="/orphanages/:id" component={Orphanage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;