import * as UE from 'ue'
import { blueprint } from 'puerts';
import './BP_FPPCharacter';
let BP = UE.Class.Load('/Game/FirstPerson/Blueprints/BP_FirstPersonCharacter.BP_FirstPersonCharacter_C');
const BP_Mixin = blueprint.tojs<typeof UE.Game.FirstPerson.Blueprints.BP_FirstPersonCharacter.BP_FirstPersonCharacter_C>(BP);
interface BPExt extends UE.Game.FirstPerson.Blueprints.BP_FirstPersonCharacter.BP_FirstPersonCharacter_C{};
class BPExt {
    ReceiveBeginPlay() {
        console.log("ReceiveBeginPlay--------------------");
    }
}
blueprint.mixin(BP_Mixin,BPExt);



