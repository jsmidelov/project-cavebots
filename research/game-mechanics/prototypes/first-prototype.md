# Prototype 1

I want to verify the core gameplay idea would be any fun before spending a bunch of time building software

## Required resources

- A metronome
- Two deck of cards
- A drawn grid, e.g. chess board
- 20 markers or pieces OR 2 markers on two paper scales graded from 0 to 10.

## Summary

The game is the most abstract and simplified swordsman duel. The goal is for the players to "hit" the other by "striking" the board cell the opponent is on.
They do this by plaing actions on the first note of a beat of the metronome (henceforth called a "turn" to spare the reader my bad music theory knowledge).

## Terminology

Action Point (AP), an integer resource the player gains continuously, and pays when committing to actions

## Preparations

- The players place their character on the board
- The players draw the ace, and two-four of each suit

## Flow of a turn

On the turn, each player may:
    - Move their piece on the board in any cardinal direction (no AP cost)
    - Play the Ace to strike the space ahead of them (costs 1 AP).
        - A hit wins the game.
    - Play out the two, three or four card to fire the number of cells ahead (and costs as many, i.e. 2-4, AP).
        - A hit stuns the opponent the next turn.
        - If the opponent played an ace, the player is stunned instead
        - If both players draw a numbered card that would hit the other player, it's a parry and the duel continues.

After the turn, the players gain an AP by moving their marker one integer up on their paper scale.
    - If the player commited to an action, they first pay their action points, and then gain one AP.

## Ideas for expanding the prototype

To keep the idea simple, and playable at the desired beat, the suit of the played card have no effect, but here are some ideas should the players get used to the speeed:

- A suit moves the player to the destination after it has been played
- A suit disables moving onto the covered cells until the end of the duel (how to note this at the desired speed beats me)
- A suit will forcibly move any player entering the distance towards the end of the distance (details of how to mark this should be discussed between duels)
- How would the game change if there are more than two pieces? Best to assume two teams, as a three-team is doomed to be cautious and passive

An optional idea for card strikes: A numbered card strikes a 3-cell width and reaches according to: 2-4 has reach 1, 5-7 has reach 2, and 8-10 has reach 3. They cost according to reach.
