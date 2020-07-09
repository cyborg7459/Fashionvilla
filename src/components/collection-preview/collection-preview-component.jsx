import React from 'react';
import './collection-preview-styles.scss';
import {Link, withRouter} from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item-component'

const CollectionPreview = ({title, items, match, routeName}) => (
    <div className='collection-preview'>
        <h1 className='title'><Link to={`${match.url}/${routeName}`}>{title.toUpperCase()}</Link></h1>
        <div className='preview'>
            {
                items
                .slice(0,4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default withRouter(CollectionPreview);