import React from "react";
import Card from './Card';

const CardList = ({robots, type}) => {
    return (
        <div>
        {
            robots.map((user, i) => {
                return (
                    <Card key={i} {...user} type={type} />
                );
            })
        }
        </div>
    );
}

export default CardList;