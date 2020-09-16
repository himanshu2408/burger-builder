import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Classes from './Layout.css';

const layout = ( props ) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={Classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;