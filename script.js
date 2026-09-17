kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
});

loadSprite("bg", "BG.jpg");
loadSprite("player", "player.png");

scene("game", () => {

    add([
        sprite("bg"),
        pos(0, 0),
        scale(
            Math.max(
                width() / 1920,
                height() / 1080
            )
        ),
    ]);

    add([
        sprite("player"),
        pos(width() / 2, 200),
    ]);

});

go("game");
