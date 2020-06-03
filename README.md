# Personal Eslint Config

Install via

```sh
npm install --save-dev @roboshoes/eslint-config eslint@~7.1.0 tslint@~6.1.2
```

Define your `.eslintrc.js` as the following:

```js
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        ecmaVersion:  2018,
        ecmaFeatures: { modules: true },
        sourceType: "module",
        project: "./tsconfig.json",
    },
    "extends": ["@roboshoes/eslint-config"],
    "rules": {},
};
```


It has some peerDependencies such as:

```json
{
    "eslint": "^7.1.0",
    "tslint": "^6.1.2"
}
```

This setup represents my personal setup for eslint including tslint settings. A basic example of
the formatting it enforces can be seen below:

```ts
import { bootstrap, draw, getCanvas, getContext, options } from "canvas-recorder";
import { Vector2 } from "three";

options( {
    record: false,
    frames: 1,
} );

type Point3D = [ number, number, number ];
type Point2D = [ number, number ];

const context = getContext();
const canvas = getCanvas();

class Control {
    private _point = new Vector2();
    get point(): Vector2 {
        return this._point.lerpVectors( this.a, this.b, 0.5 );
    }

    constructor( public readonly a: Vector2, public readonly b: Vector2 ) {}
}

const circle: Control[] = [
    new Control( new Vector2( -100, -100 ), new Vector2( 100, -100 ) ),
    new Control( new Vector2( 100, -100 ), new Vector2( 100, 100 ) ),
    new Control( new Vector2( 100, 100 ), new Vector2( -100, 100 ) ),
    new Control( new Vector2( -100, 100 ), new Vector2( -100, -100 ) ),
];

function drawControlPoints( controls: Control[] ): void {
    context.beginPath();

    for ( let i = 0; i < controls.length; i++ ) {
        if ( i === 0 ) {
            const from: Vector2 = controls[ i ].point;
            context.moveTo( from.x, from.y );
        }

        const ii: number = ( i + 1 ) % controls.length;
        const to: Vector2 = controls[ ii ].point;

        const anchorFrom: Vector2 = controls[ i ].b;
        const anchorTo: Vector2 = controls[ ii ].a;

        context.bezierCurveTo( anchorFrom.x, anchorFrom.y, anchorTo.x, anchorTo.y, to.x, to.y );
    }

    context.stroke();
}


draw( () => {
    // Has to be done every frame as the current implementation of canvas-recorder (1.8.0) does
    // not include the state of the transform.
    canvas.width = canvas.width;
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.translate( 512, 512 );

    drawControlPoints( circle );
} );

bootstrap( { clear: true } );
```
