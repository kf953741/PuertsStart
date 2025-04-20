// Copyright Epic Games, Inc. All Rights Reserved.

#include "PuertsStartGameMode.h"
#include "PuertsStartCharacter.h"
#include "UObject/ConstructorHelpers.h"

APuertsStartGameMode::APuertsStartGameMode()
	: Super()
{
	// set default pawn class to our Blueprinted character
	static ConstructorHelpers::FClassFinder<APawn> PlayerPawnClassFinder(TEXT("/Game/FirstPerson/Blueprints/BP_FirstPersonCharacter"));
	DefaultPawnClass = PlayerPawnClassFinder.Class;

}
