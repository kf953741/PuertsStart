"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
require("./BP_FPPCharacter");
let BP = UE.Class.Load('/Game/FirstPerson/Blueprints/BP_FirstPersonCharacter.BP_FirstPersonCharacter_C');
const BP_Mixin = puerts_1.blueprint.tojs(BP);
;
class BPExt {
    ReceiveBeginPlay() {
        console.log("ReceiveBeginPlay--------------------");
    }
}
puerts_1.blueprint.mixin(BP_Mixin, BPExt);
//# sourceMappingURL=BP_FPPCharacter.js.map