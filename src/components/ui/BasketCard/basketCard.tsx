import React, { FC } from 'react'
import Counter from '../../common/Counter/counter'
import { decrementCountProduct, getCountProduct, incrementCountProduct } from '../../../store/basket'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { Card } from '../../../models/ICard'

interface ProductCardProps {
    card: Card
}

const BasketCard: FC<ProductCardProps> = ({ card }) => {
    const dispatch = useAppDispatch()
    const countProduct = useAppSelector(getCountProduct(card._id))
    const count = countProduct ? countProduct.count : ''
    const handleIncrementProduct = (id: string) => {
        dispatch(incrementCountProduct(id))
    }
    const handleDecrementProduct = (id: string) => {
        dispatch(decrementCountProduct(id))
    }
    return (
        <div className="cart__item">
            <div className="cart__item__inner">
                <div className="cart__item__img-wrapper">
                    <img
                      src={ card.image }
                      className="cart__item__img"
                      alt="..."
                    />
                </div>
                <div className="cart__item__content">
                    <div className="cart__item__title">{ card.title }</div>
                    <div className="cart__item__description">{ card.body }</div>
                </div>
                <div className="cart__item__amount">
                    <Counter
                      addProduct={ () => handleIncrementProduct(card._id) }
                      deleteProduct={ () => handleDecrementProduct(card._id) }
                      count={ count }
                    />
                </div>
                <div className="cart__item__price">{ card.price * card.count } ₽</div>
            </div>
        </div>
    )
}
export default BasketCard
