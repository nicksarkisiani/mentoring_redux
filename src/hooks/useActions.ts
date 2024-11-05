import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {useMemo} from "react";
import {increment, decrement, incrementByAmount} from "../store/reducers/counterSlice";

const rootActions = {
    increment,
    decrement,
    incrementByAmount,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

