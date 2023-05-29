import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter"
import { renderHook } from "@testing-library/react"

describe("Pruebas en el useCounter", () => {
    test("Debe retornar los valores por defecto", () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(0);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test("Debe de generar el counter con el valor de 100", () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test("Probar la función increment que incremente el contador", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;
        act(() => {
            increment();
        })
        expect(result.current.counter).toBe(101);

    });

    test("Probar la función decrement que reste 1 al contador", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;
        act(() => {
            decrement();
        })
        expect(result.current.counter).toBe(99);

    });

    test("Probar la función reset que reinicie el contador", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, reset} = result.current;
        act(() => {
            reset();
        })
        expect(result.current.counter).toBe(100);

    });
}
)