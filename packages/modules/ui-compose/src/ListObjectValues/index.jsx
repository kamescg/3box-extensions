import { useState, useEffect } from 'react'
import Component from '../Component'


const ListObjectValues = props => {
    const [list, setList] = useState()

    useEffect(() => {
        if (props.data) {
            const deltas = Object.keys(props.data)
            setList(Object.values(props.data).map((item, index) => ({ ...item, delta: deltas[index], key: deltas[index] })))
        }
    }, [props.data])
    return (
        list && Array.isArray(list) && list.length > 0
            ? list.map(item => Component(props.component, { ...item, ...props.pass }))
            : null
    )
}

export default ListObjectValues