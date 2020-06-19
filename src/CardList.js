import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
    return (
    <div>
        {
        robots.map((card, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
            />
    )
})
}
</div>
    );
}

export default CardList; 



// const singleCard = robots.map((user, id) => {
//     return <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
// }); 

// <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}
// <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}