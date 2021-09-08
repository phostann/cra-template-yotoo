import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCounterSlice } from './slice';
import { selectValue } from './slice/selectors';
import { Button, Container, Num } from './style';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const { actions } = useCounterSlice();
    const value = useSelector(selectValue);

    const onAdd = () => {
        dispatch(actions.incrementAsync());
    };

    const onMinus = () => {
        dispatch(actions.decrement());
    };

    return (
        <Container>
            <Button onClick={onAdd}>+</Button>
            <Num>{value}</Num>
            <Button onClick={onMinus}>-</Button>
        </Container>
    );
};
