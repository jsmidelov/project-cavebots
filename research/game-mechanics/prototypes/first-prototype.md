# Prototype 1

I want to verify the core gameplay idea would be any fun before spending a bunch of time building software

## Required resources

- A metronome
- Two deck of cards
- A drawn grid, e.g. chess board
- 20 markers or pieces OR 2 markers on two paper scales graded from 0 to 10.

## Preparations

- The players place their character on the board
- The players shuffle their deck, and draws six cards

## Rules

The game is the most abstract and simplified swordsman duel. The goal is for the players to "hit" the other by "striking" board cells or using their cards.

They do this by plaing actions on the first note of a beat of the metronome (henceforth called a "turn" to spare the reader my bad music theory knowledge).

From the first turn an on, the players gain an Action Point by moving their marker one integer up on their paper scale.

On the turn, each player may:
    - Move their piece on the board in any cardinal direction (no AP cost)
    - Strike the space ahead of them (costs one AP). Each piece is assumed to face their opponent.
    - Play out a card
        - A numbered card strike its number of cells ahead (and costs as many AP)
        - A JQKAJ cards parries a numbered card - but not a strike - played this turn (and costs 1 AP)
If a player playes a card, they move it to their discard pile and draws another from the draw pile. Should they draw the last card of the draw pile, they move the discard pile to the draw pile.
If both players draw a numbered card that would hit the other player, it's a parry and the duel continues.

## Ideas for expanding the prototype

To keep the idea simple, and playable at the desired beat, the suit of the played cart have no effect, but here are some ideas should the players get used to the speeed:

- A suit moves the player to the destination after it has been played
- A suit disables moving onto the covered cells until the end of the duel (how to note this at the desired speed beats me)
- A suit will forcibly move any player entering the distance towards the end of the distance (details of how to mark this should be discussed between duels)

An optional idea for card strikes: A numbered card strikes a 3-cell width and reaches according to: 2-4 has reach 1, 5-7 has reach 2, and 8-10 has reach 3. They cost according to reach.
