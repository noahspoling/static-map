export let rerender = () => {};

export const setRerender = (newRerender) => {
    console.log("Function setRerender called")
    rerender = newRerender;
};
