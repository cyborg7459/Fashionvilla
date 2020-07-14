import React from 'react';
import {CollectionItemContainer, Image, CollectionFooter, Button, Name, Price}  from './collection-item.styles';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <Image
            className='image'
            style={
                {backgroundImage: `url(${imageUrl})`}
            }
            />
            <CollectionFooter>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </CollectionFooter>
            <Button className="custom-button" onClick={()=> addItem(item)} inverted >Add to Cart</Button>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);