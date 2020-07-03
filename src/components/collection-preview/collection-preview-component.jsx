import React from 'react';
import './collection-preview-styles.scss';
import CollectionItem from '../collection-item/collection-item-component'

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter(({id})=>id<=4)
                .map(({id, ...other}) => (
                    <CollectionItem key={id} {...other}></CollectionItem>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;