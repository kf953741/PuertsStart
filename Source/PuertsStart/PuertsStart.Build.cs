// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class PuertsStart : ModuleRules
{
	public PuertsStart(ReadOnlyTargetRules Target) : base(Target)
	{
		PrivateDependencyModuleNames.AddRange(new string[] { "JsEnv" });
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

		PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "EnhancedInput", "JsEnv" });
	}
}
