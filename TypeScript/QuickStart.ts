import * as UE from 'ue'
import {$ref, $unref, $set, argv, on, toManualReleaseDelegate, releaseManualReleaseDelegate, blueprint} from 'puerts';
import './BP_FPPCharacter';

console.log("----------------------------------------------------");
console.log("QuickStart.ts is start...");
on('unhandledRejection', function(reason: any) {
    console.log('unhandledRejection~~~');
});

new Promise(()=>{
    throw new Error('unhandled rejection');
});