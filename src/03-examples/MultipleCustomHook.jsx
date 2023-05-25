import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingQuote } from "../Components/LoadingQuote";
import { Quote } from "../Components/Quote";
import { useState } from "react";
import { Memorize } from "../06-memos/Memorize";



export const MultipleConstHook = () => {
    const url2 = "https://api.breakingbadquotes.xyz/v1/quotes";
    let { counter, increment, decrement, reset } = useCounter();
    let url = `https://api.breakingbadquotes.xyz/v1/quotes/20`;
    const { data, isLoading, hasError, setCounter } = useFetch(url);
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <h3>Hola a todos</h3>
            <hr></hr>

            {

                isLoading ?
                    (
                        <LoadingQuote />
                    )
                    : (<Quote data={data} counter={counter} />)
            }
            <h1>{`Frase número ${counter}`}</h1>
            <button className="btn btn-primary" onClick={decrement} disabled={isLoading}>Last Quote</button>
            <button className="btn btn-warning" onClick={increment} disabled={isLoading}>Next Quote</button>
            <Memorize />
        </>
    )
}