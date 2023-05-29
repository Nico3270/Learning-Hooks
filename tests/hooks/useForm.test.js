import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "@testing-library/react";

describe("Pruebas en UseForm", () => {

    test("Debe de regresar la información por defecto", () => {
        const { result } = renderHook(() => useForm());
        expect(result.current.formState).toEqual({})
    });

    const newValue = { name: "name", value: "nicolas" };
    const initialForm = { name: "Nicolas", email: "cristian@hotmail.com" }
    test("Debe de regresar la información por defecto", () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { name, formState, onInputChange } = result.current;
        act(() => {
            onInputChange({ target: newValue })
        });
        expect(result.current.name).toBe(newValue.value);
        expect(result.current.formState.name).toBe(newValue.value);
    });

    test("Probando funcion reset", () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm, onInputChange } = result.current;
        act(
            () => {
                onInputChange({ target: newValue });
                onResetForm();
            }
        );
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
})