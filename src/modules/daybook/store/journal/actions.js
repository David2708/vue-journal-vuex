
import journalApi from "@/api/journalApi"


export const loadEntries = async( {commit} ) => {

    const { data } = await journalApi.get('/entries.json')
    
    if(!data){
        commit('setEntries', [])
        return
    }

    const entries = []
    for(let id of Object.keys( data )){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}


export const updateEntries = async( {commit}, entry ) => {

    const { date, picture, text } = entry;

    const dataToSave = {
        text,
        date,
        picture
    }

    await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
    commit('updateEntry', { ...entry })
    
}


export const createEntry = async( {commit}, entry) => {

    const { date, picture, text } = entry;

    const dataToSave = {
        text,
        date,
        picture
    }

    const {data} = await journalApi.post(`/entries.json`, dataToSave)

    entry.id = data.name
    commit('addEntry', entry)
    return entry.id

}


export const deleteEntry = async( {commit}, id ) => {

    await journalApi.delete(`/entries/${id}.json`)

    commit('deleteEntry', id)

}