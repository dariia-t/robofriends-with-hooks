import Card from "./Card";
import React, {useContext} from 'react'
import { RobotContext } from '../containers/RobotContext'

export default function LikedPage() {
    const { robots } = useContext(RobotContext)
    const title = robots.liked.length ? 'Liked Robots' : 'No Liked Robots'
    return (
        <div >
            <h1>{title}</h1>
            <div style={{ marginRight: '10rem', marginLeft: '10rem' }}>
                {robots.liked.map((user, i) => {
                    return  <Card key={i} {...user} />
                })}
            </div>
        </div>
    )
  };