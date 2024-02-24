# Combat system

My inspiration is primarily from my own collage year's Soul Calibur 2 duels set to minimum health, as they were fully focused on defence, parries and mind games.
Some inspiration also comes from how any notion of "permadeath" incluence how degrees of threat can be empoyed to resolve a conflict in non-violent ways.

## Resources

The player has two primary resources: Hit points and stamina.

- Hit points direct how many direct hits a combatant can take before defeat. As a rule of thumb, this value is 1, but it may climb the occational point over the progress of the game. They reset each morning.
- Stamina limits how much a player can do and how frequently. Most actions the player can do in combat costs stamina, and while not doing anything stamina rapidly recovers. Depleted stamina cause a temporary stasis, until the stamina is fully recovered.
- Combatants can wield one weapon at a time.
- The player can equip a small number of spells and abilities.

## Actions
 <!-- Jag vill introducera skjutvapen, men det skapar för många undantag och märkliga relationer. Tänk på de som förmågor just nu, och kanske kan de vävas in som vapen senare. -->
- A combatant can at any time execute an attack. A hit by an attack drains one hit point from the opponent.
  - Slice weapon can be aimed high, low, left or right. This is reflected on a character's stance, and thereby percieved by the opponent.
  - A slice aimed at an incoming slice can parry the attack, which drains the attacker's stamina further.
  - Thrust weapons can be aimed straight ahead.
- A player can dodge an attack, which drains some stamina.
- Spells and abilities are most of the "RPG" stuff a player may wish to do. They generally
  - covers a shape on the ground starting from the caster,
  - has a time from action to cast effect
  - applies an effect on the targeted area for a set amount of time
  - applies said effect on a combatant entering the area during said time

## Goal

The goal is to hit the opponent, or set conditions that would make an attack so likely to hit the opponent prefers to yield.
