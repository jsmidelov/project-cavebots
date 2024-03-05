# Prototype 1

I want to verify the core gameplay idea would be any fun before spending a bunch of time building software

## Required resources

- A metronome
- Two Ace cards and numbered cards 2-4 of two suites (a black and a red)
- A grid with sides of 6-8 tiles (or diameter of 11-15), e.g. chess board, with 2 pieces (one being black or red)
- 2 paper scales graded from 0 to 10.

## Summary

The game is the most abstract and simplified swordsman duel. The goal is for the players to "hit" the other by "striking" the board cell the opponent is on.
They do this by plaing actions on the first note of a beat of the metronome (henceforth called a "turn" to spare the reader my bad music theory knowledge).

## Terminology

Action Point (AP), an integer resource the player gains continuously, and pays when committing to actions

## Preparations

- The players place their character on the board
- The players draw the ace, and two-four of each suit
- Locate a marker at the 0 AP on the scale

## Flow of a turn

On the turn, each player may move their piece on the board in any cardinal direction (no AP cost)
    - If a player moves into the location of their opponent, it's a tackle, and the opponent is forcibly moved one step "back".

In addition they may act either of the following. These are calculated after the move:
    - Play the Ace to strike the space ahead of them (costs 1 AP).
        - A hit wins the game.
        - If both players strike each other, its a parry, and the duel continues
    - Play out the two, three or four card to fire the number of cells ahead (and costs as many, i.e. 2-4, AP).
        - A hit stuns the opponent the next turn.
        - If the opponent played an ace, the player is stunned instead
        - If both players draw a numbered card that would hit the other player, it's a parry and the duel continues.

After the turn, the players gain an AP by moving their marker one integer up on their paper scale.
    - If the player commited to an action, they first pay their action points, and then gain one AP.

## Future additions

### Ideas for expanding the prototype

To keep the idea simple, and playable at the desired beat, the suit of the played card have no effect, but here are some ideas should the players get used to the speeed:

- A suit moves the player to the destination after it has been played
- A suit disables moving onto the covered cells until the end of the duel (how to note this at the desired speed beats me)
- A suit will forcibly move any player entering the distance towards the end of the distance (details of how to mark this should be discussed between duels)

- How does the game change with hexagons instead of square tiles?
- How would the game change if there are more than two pieces? Best to assume two teams, as a three-team is doomed to be cautious and passive
- How does the game change if we time is on either player's side? I.e. one is attacker (time against them) and the other is defender (time with them)?

An optional idea for card strikes: A numbered card strikes a 3-cell width and reaches according to: 2-4 has reach 1, 5-7 has reach 2, and 8-10 has reach 3. They cost according to reach.

### Ideas for a digital prototype

- Introduce height differences to the geography i.e. hills, higher ground and ditches, lower ground
  - Cost 1 AP to climb
  - Range bonus to fire downhill
- Introduce intraversible tiles, like rivers, coastline and obstacles like trees and rocks
  - Being tackled into an obstacle stuns for one turn
