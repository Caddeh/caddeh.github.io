<<<<<<< HEAD
//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
=======
<<<<<<< HEAD
"use strict";
//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
>>>>>>> cc573c9f521090876666859b134cb53564cfe2ed
function preload() {
    game.load.image('poop', 'assets/poop.png');
}
var weapon;
var cursors;
var fireButton;
<<<<<<< HEAD
=======
var Poop = /** @class */ (function (_super) {
    __extends(Poop, _super);
    function Poop(scene, x, y) {
        var _this = _super.call(this, scene, x, y, "poop") || this;
        _this.scene.physics.add.existing(_this);
        _this.setGravityY(200);
        _this.setCollideWorldBounds(true);
        return _this;
    }
    return Poop;
}(Phaser.Physics.Arcade.Sprite));
exports.Poop = Poop;
function create() {
    weapon = game.add.weapon(1, 'bullet');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletAngleOffset = -90;
    weapon.bulletSpeed = 400;
    cursors = this.input.createCursorKeys();
    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
}
function update() {
    if (fireButton.isDown) {
        weapon.fire();
    }
}
function render() {
    weapon.debug();
=======
>>>>>>> cc573c9f521090876666859b134cb53564cfe2ed
export class Poop extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "poop");
        this.scene.physics.add.existing(this);
        this.setGravityY(200);
        this.setCollideWorldBounds(true);
    }
<<<<<<< HEAD
    create() {
        weapon = game.add.weapon(1, 'bullet');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletAngleOffset = -90;
        weapon.bulletSpeed = 400;
        cursors = this.input.createCursorKeys();
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }
    update() {
        if (fireButton.isDown) {
            weapon.fire();
        }
    }
}
function render() {
    weapon.debug();
=======
>>>>>>> fea109963957f3675a2766430964be4683e6d158
>>>>>>> cc573c9f521090876666859b134cb53564cfe2ed
}
