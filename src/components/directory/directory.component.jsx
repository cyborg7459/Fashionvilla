import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import './directory.styles.scss'
import {selectDirectoryItems} from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({directory}) => (
    <div className='directory-menu'>
    {
        directory.map(({id, ...other}) => (
            <MenuItem key={id} {...other}/>
        ))
    }
</div>
)

const mapStateToProps = createStructuredSelector({
    directory : selectDirectoryItems
})

export default connect(mapStateToProps)(Directory);

    