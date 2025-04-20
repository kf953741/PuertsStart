// Fill out your copyright notice in the Description page of Project Settings.


#include "TSGameInstance.h"

#include "JsEnv.h"

void UTSGameInstance::Init()
{
	Super::Init();
	GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
	GameScript->WaitDebugger();
	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
	GameScript->Start("QuickStart", Arguments);
}

void UTSGameInstance::OnStart()
{
	Super::OnStart();
	
}

void UTSGameInstance::Shutdown()
{
	Super::Shutdown();
	GameScript.Reset();
}