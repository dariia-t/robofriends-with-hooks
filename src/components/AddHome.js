import React, {useContext} from 'react'
import { RobotContext } from '../containers/RobotContext'
import Card from './Card'

const AddHome = () => {
    const { robots } = useContext(RobotContext)
    const title = robots.options.length ? 'Select a robot' : 'No more options left'
    return (
        <div>
            <h1>{title}</h1>
            <div style={{ marginRight: '10rem', marginLeft: '10rem' }}>
                {robots.options.map((user, i) => {
                    return  <Card key={i} {...user} />
                })}
            </div>
        </div>
    )
}

export default AddHome
