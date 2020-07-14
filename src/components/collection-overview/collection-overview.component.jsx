import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview-component';


import {CollectionOverviewContainer} from './collection-overview.styles';

const CollectionsOverview = ({shop}) => (
    <CollectionOverviewContainer>
        {
            shop.map(({id, ...other}) => {
                return (
                    <CollectionPreview key={id} {...other}></CollectionPreview>
                )
            })
        }
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    shop: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
