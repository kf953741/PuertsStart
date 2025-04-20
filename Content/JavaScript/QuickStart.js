"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
require("./BP_FPPCharacter");
console.log("----------------------------------------------------");
console.log("QuickStart.ts is start...");
(0, puerts_1.on)('unhandledRejection', function (reason) {
    console.log('unhandledRejection~~~');
});
new Promise(() => {
    throw new Error('unhandled rejection');
});
//# sourceMappingURL=QuickStart.js.map