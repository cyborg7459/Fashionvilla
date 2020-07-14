import React from 'react';
import {CollectionPreviewContainer, Title, Preview} from './collection-preview.styles';
import {Link, withRouter} from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item-component'

const CollectionPreview = ({title, items, match, routeName}) => (
    <CollectionPreviewContainer>
        <Title><Link to={`${match.url}/${routeName}`}>{title.toUpperCase()}</Link></Title>
        <Preview>
            {
                items
                .slice(0,4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </Preview>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview);