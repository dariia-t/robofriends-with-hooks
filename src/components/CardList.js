import React from "react";
import Card from './Card';

const CardList = ({robots}) => {
    const someRobots = robots.slice(0, 3);
    return (
        <div>
            {
                someRobots.map((robot) => {
                    return (
                    <Card 
                        key={robot.id} 
                        id={robot.id} 
                        name={robot.name} 
                        email={robot.email}
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;