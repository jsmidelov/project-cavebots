# State and Actions (placeholder title)

## Scope of prototype

This prototype only aims to cover a single fight between a player and a computer controlled oponent.
I want to support multiple computer controlled components to test how it would work

I do not want to support character progression between fights or longer ter game state.
Assuming I want fights to happen seamlessly, I should consider how the full game state is managed.
This seems a matter for a later prototype.

## Stray thoughts

I didn't think I wanted this in state, because it's not dynamic, but that actually sounds like fun elemental magic stuff!
    - Fire would disable tiles (fire is always creatively simple)
    - Water would create a force pathfinding to lower heights, and create puddles at local minimum, undoing fire disable, puddle if nothing or deep puddle if already a puddle thus disabled.
        - Puddle disappears if no surrounding tile is lower.
        - Deep puddle spreads to puddle if  no surrounding tile is lower (how would multiple tiles of deep puddle - ie a lake or coast - work?)
    - Wind would create a directional force a number of tiles, pushing any opponent, player or fire in its path, but stop at an obstacle
    - Earth would manipulate height, possibly pushing away puddles, or moving obstacles on tiles

Maybe I can use an IndexedDB to store static information?

## State shape

{
    Environment: [
        turn: number,
        environment: [ // horisontal
            [ // diagonal
                {
                    height: -5 - 5, // may want to introduce later
                    effect: 'none','obstacle', 'fire','puddle','deep puddle'
                    wind: number (0-6, where 0 is none and 1-6 hexagonal directions)
                }
            ]
        ]
        base_speed: Number,
    ],
    Players: [
        {
            location: {
                horisontal: number,
                diagonal: number
            }
            attributes: {
                speed: number, // stamina gained per turn
                stamina: Number (0-10) // an action point is 100 stamina
            },
            effects: [
                {
                    remaining_turns: number
                    effecting: string // an attribute
                    strength: number // percentage value
                }
            ],
            actions: {
                // The finisher is generally cheap, close range, and intended to defeat the opponent.
                finisher: {
                    name: string,
                    description: string,
                    image: string, // file path
                    action_point_cost: Number,
                    range: Number
                },
                // A skill is generally some cost, has some range, and meant to enable the player, or to disable or limit the opponent, to enable a finisher
                skill: {
                    name: string,
                    description: string,
                    image: string, // file path
                    action_point_cost: Number,
                    range: Number
                },
                skill: {
                    name: string,
                    description: string,
                    image: string, // file path
                    action_point_cost: Number,
                    range: Number
                },
                // An ultimate is a very expensive but "game breaking" ability meant to make a follow-up finisher all but certain (ie "a bomb")
                ultimate: {
                    name: string,
                    description: string,
                    image: string, // file path
                    action_point_cost: Number,
                    range: Number
                },
                // the block can be played at any time to cancel another action
                block: {
                    name: string,
                    description: string,
                    image: string, // file path
                    action_point_cost: Number,
                    range: Number
                }
            }
        }
    ],
    Opponents: [
        {
            // follows a template with predetermined location, attributes, effects and actions
        }
    ],
    Ordered: [
        Player: {}
        Opponents: []
        Environment: []
    ]
}

## Actions

END_TURN(actor): Happens regularly. Initiate the actor's next turn and execute their ordered movements and actions.
    // For now, keep everyone on the same turn speed. I may wish to decouple the actor speeds from the environment speed.
ORDER_ACTION(ability stats): The player applies an action. This can be overriden with e.g. a block. Executes on the next turn.
ORDER_MOVEMENT(current_row, current_diagonal, target_row, target_diagonal): The player applies a movement. Movement to current location undoes the movement.
