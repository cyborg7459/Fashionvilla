import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {DirectoryMenuContainer} from './directory.styles'
import {selectDirectoryItems} from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({directory}) => (
    <DirectoryMenuContainer>
    {
        directory.map(({id, ...other}) => (
            <MenuItem key={id} {...other}/>
        ))
    }
    </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
    directory : selectDirectoryItems
})

export default connect(mapStateToProps)(Directory);

    