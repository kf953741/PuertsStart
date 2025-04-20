"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
console.log("main.ts is loading...");
// Import the BP_FPPCharacter module
require("./BP_FPPCharacter");
// Register for Unreal events
(0, puerts_1.on)('begin', () => {
    console.log("Game begin event triggered");
});
(0, puerts_1.on)('tick', (deltaTime) => {
    // This will be called every frame
    // You can put game loop logic here if needed
});
console.log("main.ts loaded successfully!");
//# sourceMappingURL=main.js.map