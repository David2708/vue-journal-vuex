

// export const myAction = ( state) => {
    
// }

export const setEntries = ( state, entries ) => {
    // Creamos un nuevo arreglo con los valores anteriores mas los que llegan de entries
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}   


export const updateEntry = ( state, entry) => {

    // state.entries.map( element => {
    //     if(element.id === entry.id){
    //         element.text = entry.text
    //         element.date = entry.date
    //     }
    // } )

    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    state.entries[idx] = entry

}


export const addEntry = ( state, entry ) => {
    state.entries = [ entry, ...state.entries ]
    // state.entries.unshift(entry)
}


export const deleteEntry = ( state, id) => {
    state.entries = state.entries.filter( entry => entry.id != id )
}