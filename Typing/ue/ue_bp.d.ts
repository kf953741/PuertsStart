/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: D531100D49A3DB17979A5AA795475303
    namespace Game.FirstPerson.Blueprints.BP_FirstPersonCharacter {
        class BP_FirstPersonCharacter_C extends UE.PuertsStartCharacter {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_BP_FirstPersonCharacter(EntryPoint: number) : void;
            kf() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_FirstPersonCharacter_C;
            static Load(InName: string): BP_FirstPersonCharacter_C;
        
            __tid_BP_FirstPersonCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 19C44D08439721EEF94AB4BB991820FA
    namespace Game.FirstPerson.Blueprints.BP_FirstPersonGameMode {
        class BP_FirstPersonGameMode_C extends UE.PuertsStartGameMode {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_FirstPersonGameMode_C;
            static Load(InName: string): BP_FirstPersonGameMode_C;
        
            __tid_BP_FirstPersonGameMode_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A38D9EFB4485FBF7C766E8949A5E9ACC
    namespace Game.FirstPerson.Blueprints.BP_FirstPersonProjectile {
        class BP_FirstPersonProjectile_C extends UE.PuertsStartProjectile {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            StaticMesh: UE.StaticMeshComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_FirstPersonProjectile_C;
            static Load(InName: string): BP_FirstPersonProjectile_C;
        
            __tid_BP_FirstPersonProjectile_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 28BFBDC641369788A39589A95427CC84
    namespace Game.FirstPerson.Blueprints.BP_PickUp_Rifle {
        class BP_PickUp_Rifle_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            TP_PickUp: UE.PuertsStartPickUpComponent;
            TP_Weapon: UE.PuertsStartWeaponComponent;
            BndEvt__BP_PickUp_Rifle_TP_PickUp_K2Node_ComponentBoundEvent_1_OnPickUp__DelegateSignature(PickUpCharacter: $Nullable<UE.PuertsStartCharacter>) : void;
            ExecuteUbergraph_BP_PickUp_Rifle(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_PickUp_Rifle_C;
            static Load(InName: string): BP_PickUp_Rifle_C;
        
            __tid_BP_PickUp_Rifle_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 406EA8FB4DF5FE9F154D0BB107BAC5DC
    namespace Game.FirstPersonArms.Animations.FirstPerson_AnimBP {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_280: string, __BoolProperty_281: boolean, __NameProperty_282: string, __IntProperty_283: number, __NameProperty_284: string, __IntProperty_285: number, __NameProperty_286: string, __IntProperty_287: number, __NameProperty_288: string, __IntProperty_289: number, __FloatProperty_290: number, __StructProperty_291: UE.InputScaleBiasClampConstants, __FloatProperty_292: number, __EnumProperty_293: UE.EAnimSyncMethod, __ByteProperty_294: UE.EAnimGroupRole, __NameProperty_295: string, __NameProperty_296: string, __NameProperty_297: string, __IntProperty_298: number, __StructProperty_299: UE.AnimNodeFunctionRef, __BlendProfile_300: UE.BlendProfile, __CurveFloat_301: UE.CurveFloat, __BoolProperty_302: boolean, __EnumProperty_303: UE.EAlphaBlendOption, __EnumProperty_304: UE.EBlendListTransitionType, __ArrayProperty_305: TArray<number>, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base, AnimGraphNode_Root: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_13: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_12: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_11: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_10: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_9: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_8: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_7: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_9: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_9: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_8: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_8: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_7: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_7: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_6: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_6: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_5: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_5: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateMachine_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_Slot: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SaveCachedPose_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_6: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_5: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_4: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_3: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_2: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_4: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_4: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_3: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_3: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_2: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_2: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateMachine: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SaveCachedPose: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_UseCachedPose_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_UseCachedPose: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_BlendListByBool: UE.AnimNodeExposedValueHandler_PropertyAccess);
            __NameProperty_280: string;
            __BoolProperty_281: boolean;
            __NameProperty_282: string;
            __IntProperty_283: number;
            __NameProperty_284: string;
            __IntProperty_285: number;
            __NameProperty_286: string;
            __IntProperty_287: number;
            __NameProperty_288: string;
            __IntProperty_289: number;
            __FloatProperty_290: number;
            __StructProperty_291: UE.InputScaleBiasClampConstants;
            __FloatProperty_292: number;
            __EnumProperty_293: UE.EAnimSyncMethod;
            __ByteProperty_294: UE.EAnimGroupRole;
            __NameProperty_295: string;
            __NameProperty_296: string;
            __NameProperty_297: string;
            __IntProperty_298: number;
            __StructProperty_299: UE.AnimNodeFunctionRef;
            __BlendProfile_300: UE.BlendProfile;
            __CurveFloat_301: UE.CurveFloat;
            __BoolProperty_302: boolean;
            __EnumProperty_303: UE.EAlphaBlendOption;
            __EnumProperty_304: UE.EBlendListTransitionType;
            __ArrayProperty_305: TArray<number>;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            AnimGraphNode_Root: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_13: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_12: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_11: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_10: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_9: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_8: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_7: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_9: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_9: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_8: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_8: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_7: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_7: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_6: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_6: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_5: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_5: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateMachine_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_Slot: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SaveCachedPose_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_6: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_5: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_4: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_3: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_2: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_4: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_4: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_3: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_3: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_2: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_2: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateMachine: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SaveCachedPose: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_UseCachedPose_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_UseCachedPose: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_BlendListByBool: UE.AnimNodeExposedValueHandler_PropertyAccess;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 406EA8FB4DF5FE9F154D0BB107BAC5DC
    namespace Game.FirstPersonArms.Animations.FirstPerson_AnimBP {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__BoolProperty: boolean);
            __BoolProperty: boolean;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 406EA8FB4DF5FE9F154D0BB107BAC5DC
    namespace Game.FirstPersonArms.Animations.FirstPerson_AnimBP {
        class FirstPerson_AnimBP_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.FirstPersonArms.Animations.FirstPerson_AnimBP.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_13: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_12: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_11: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_10: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_9: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_8: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_9: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_9: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_8: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_8: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_7: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_7: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_6: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_6: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_5: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_1: UE.AnimNode_StateMachine;
            AnimGraphNode_Slot: UE.AnimNode_Slot;
            AnimGraphNode_SaveCachedPose_1: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_4: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_3: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_2: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_1: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            AnimGraphNode_BlendListByBool: UE.AnimNode_BlendListByBool;
            IsMoving: boolean;
            bIsInAir: boolean;
            HasRifle: boolean;
            FirstPersonCharacter: UE.Game.FirstPerson.Blueprints.BP_FirstPersonCharacter.BP_FirstPersonCharacter_C;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_FirstPerson_AnimBP_AnimGraphNode_TransitionResult_274EC9B146631F45FDB52BB11F47D731() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_FirstPerson_AnimBP_AnimGraphNode_TransitionResult_53F31B364AE1E94B7AB4B3B7BB0F164E() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_FirstPerson_AnimBP_AnimGraphNode_TransitionResult_B902C16045F47029D8FF9A8AE4529E0E() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_FirstPerson_AnimBP_AnimGraphNode_TransitionResult_D654D16F412EF3EFE1B50B94AB239895() : void;
            ExecuteUbergraph_FirstPerson_AnimBP(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FirstPerson_AnimBP_C;
            static Load(InName: string): FirstPerson_AnimBP_C;
        
            __tid_FirstPerson_AnimBP_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
