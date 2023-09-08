export const addSong = (e: any) => {
    return { type: "Add", payload: e };
}


export const decrement = () => {
    return { type: "decrement" }
}

export const increment = () => {
    return { type: "increment" }
}