# Game artwork references

The Worlds panels are original simplified SVG illustrations. Character details were corrected using these visual references:

- God of War: [PlayStation - Leviathan Axe and game artwork](https://www.playstation.com/en-us/games/god-of-war/videos-and-screens/) and [Leviathan Axe silhouette reference](https://wallpapers.com/images/hd/leviathan-axe-godof-war-d6yf9eeq4unce6ah.png). The SVG now includes the curved bearded blade, carved haft, wrapped grip, rune sockets, and etched steel.
- Ghost of Tsushima: [Drew Harrison - Ghost Armor set](https://drewparadise.artstation.com/projects/3dEkN2). The character wears a headband, dark layered armor, shoulder plates, wrapped sword grips, rope details, and a worn cape.
- Valorant: [Riot Games - Jett](https://playvalorant.com/en-us/agents/jett/). The character has a sleeveless teal hooded vest, bare arms, fingerless gloves, utility trousers, and five metallic throwing knives with defined blades, wrapped grips, and ring pommels.

Reference downloads were used for review only. The repository contains the editable SVG artwork rather than copies of those reference images.


## Knight and selector symbols

- The Knight's rounded mask, inward-curving horns, oval eye sockets, flowing layered cloak, and long tapered nail were checked against [Team Cherry's official Hollow Knight artwork](https://www.hollowknight.com/) and its Godmaster key art. The scene and the small selector icon share one mask outline, replacing the earlier pointed mask and CSS pseudo-element ears.
- Ghost of Tsushima's selector uses a circular Sakai clan crest with the stacked chevron motif, replacing the decorative star. References: [PlayStation's official merchandise article](https://blog.playstation.com/2021/08/20/ghost-of-tsushima-directors-cut-official-merchandise/) and [Sakai crest reference](https://commons.wikimedia.org/wiki/File:Sakai_clan_symbol.png).


## Minecraft and Valorant selector symbols

- Minecraft uses an isometric grass block with pixel-textured grass and shaded dirt faces. This is the classic grass-block motif discussed in [Mojang's icon article](https://www.minecraft.net/en-us/article/our-icons-are-changing), rather than a rotated generic square.
- Valorant uses the two separate angular shapes of the emblem, checked against [Riot's official asset kit](https://playvalorant.com/en-gb/news/game-updates/valorant-asset-kit/), rather than a clipped italic letter V.
- Both symbols are inline SVGs using the same inherited grey as the other world selectors, with the shared selected-state tint. The block keeps its texture through opacity shading. The old CSS stand-ins were removed.
