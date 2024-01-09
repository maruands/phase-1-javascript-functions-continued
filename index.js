// code your solution here
function saturdayFun(name = "roller-skate")
{
    return `This Saturday, I want to ${name}!`;
}

function mondayWork(office = "go to the office")
{
    return `This Monday, I will ${office}.`
}

function wrapAdjective(character)
{
    return function(adjective)
    {
        return `You are ${character}${adjective}${character}!`
    }
}