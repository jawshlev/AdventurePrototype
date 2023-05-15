class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Open Plains of Grandillalandia");
    }
    preload() {
        this.load.image('lone','loneTree.jpg');
    }
    onEnter() {
        
        let bckrnd = this.add.sprite(700, 600, 'lone')
        let tree = this.add.text(this.w * 0.4, this.w * 0.2, "Click to move towards the tree")
        .setInteractive()
        .on('pointerover', () => this.showMessage("Maybe there's a granadilla in this tree?"))
        .on('pointerdown', () => {
            this.showMessage("*rustle*");
            this.gotoScene('demo2');
        })
        tree.scale = 1.45;
        bckrnd.scale = 1.45;
        
        
        

        /*
        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.5, this.w * 0.5, "locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
            })
            */
    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "Inside the Granadilla Tree");
    }
    preload() {
        this.load.image('in','InTree.jpg');
        this.load.image('cross','options.jpg');
    }
    onEnter() {
        let ins = this.add.sprite(700, 600, 'in');
        let grnd = this.add.text(350, 450, "Granadilla")
        .setInteractive()
        .on('pointerover', () => this.showMessage("Oh a granadilla, let's pick it"))
        .on('pointerdown', () => {
            this.showMessage("RACCOON WATCHOUT!!!");
            this.gotoScene('demo3');
        })
        
        ins.scale = 1.45;
        grnd.scale = 1.45;
        
        /*
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
        */
    }
}

class Demo3 extends AdventureScene {
    constructor() {
        super("demo3", "A Raccoon Stole Your Granadilla");
    }
    preload() {
        this.load.image('cross','options.jpg');
    }
    onEnter() {
        let ins = this.add.sprite(675, 300, 'cross');
        if (this.hasItem("Banana")) {
            this.showMessage("Go talk with the Raccoon bruh")
            let racc = this.add.text(1100, 950, "Raccoon")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Maybe you can trade your banana")
                })
            .on('pointerdown', () => {
                this.loseItem("key");
                this.showMessage("the raccoon accepts the trade");
                this.gotoScene('outro');
            })
        }
        else {
            let racc = this.add.text(1100, 950, "Raccoon")
            .setInteractive()
            .on('pointerover', () => this.showMessage("Fight this foo for ur granadilla back"))
            .on('pointerdown', () => {
                this.showMessage("let's scrap bruh");
                this.gotoScene('lose');
            })
            let worm = this.add.text(230,850, "worm?")
            .setInteractive()
            .on('pointerover', () => {
            this.showMessage("I wonder what this fine gentleman might have to say");
            })
            .on('pointerdown', () => {
            this.showMessage("lets go see wassup");
            this.gotoScene('demo4');
            })
            worm.scale = 0.85
        }
        ins.scale = 1.5
        
    }
}

class Demo4 extends AdventureScene{
    constructor() {
        super("demo4", "Slid up to the Worm on the Corna");
    }
    preload() {
        this.load.image('corner', 'Worm.jpg');
    }
    onEnter() {
        let corna = this.add.sprite(725, 450, 'corner')
        let worm = this.add.text(700,825, "Chop it up wit the worm")
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Bro got hella steez, lets see if he got sum for us");
        })
        .on('pointerdown', () => {
            this.showMessage("The Worm gave u a banana to trade the Raccoon for the Granadilla");
            this.gainItem('Banana');
            this.tweens.add({
                targets: Banana,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 800,
                onComplete: () => key.destroy()
            });
        })
        let back = this.add.text(1200,960, "Back to the Raccoon")
        .setInteractive()
        .on('pointerdown', () => {
            this.gotoScene('demo3');
        })
        back.scale = 1.25
        corna.scale = 1.35
        worm.scale = 1.25
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload() {
        this.load.image('intr', 'GranadillaQuest.jpg');
    }
    create() {
        let opn = this.add.sprite(725, 550, 'intr');
        opn.scale = 1;
        let click = this.add.text(225,700, "Click anywhere to begin.", {color: '000000', fontSize: '20px'});
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload() {
        this.load.image('win', 'Win.jpg');
    }
    create() {
        let winner = this.add.sprite(725, 450, 'win');
        winner.scale = 1.25;
        this.add.text(150, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Lose extends Phaser.Scene {
    constructor() {
        super('lose');
    }
    preload() {
        this.load.image('loser', 'Lose.jpg');
    }
    create() {
        let loserScrene = this.add.sprite(725, 450, 'loser');
        loserScrene.scale = 1.25;
        this.add.text(150, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Lose, Outro],
    title: "Adventure Game",
});

