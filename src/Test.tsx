import React from "react";
import {ITest} from "./types";

type ITestProp = string;

interface ITestProps {
    test: ITest
    number?: ITestProp
}


const Test: React.FC<ITestProps> = ({test, number}) => {

    console.log(test, number)

    return (
        <div>

        </div>
    );
};

export default Test;