import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview-component';


import './collection-overview.styles.scss';

const CollectionsOverview = ({shop}) => (
    <div className='collections-overview'>
        {
            shop.map(({id, ...other}) => {
                return (
                    <CollectionPreview key={id} {...other}></CollectionPreview>
                )
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    shop: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
