// Copyright Epic Games, Inc. All Rights Reserved.

#include "PuertsStartPickUpComponent.h"

UPuertsStartPickUpComponent::UPuertsStartPickUpComponent()
{
	// Setup the Sphere Collision
	SphereRadius = 32.f;
}

void UPuertsStartPickUpComponent::BeginPlay()
{
	Super::BeginPlay();

	// Register our Overlap Event
	OnComponentBeginOverlap.AddDynamic(this, &UPuertsStartPickUpComponent::OnSphereBeginOverlap);
}

void UPuertsStartPickUpComponent::OnSphereBeginOverlap(UPrimitiveComponent* OverlappedComponent, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult)
{
	// Checking if it is a First Person Character overlapping
	APuertsStartCharacter* Character = Cast<APuertsStartCharacter>(OtherActor);
	if(Character != nullptr)
	{
		// Notify that the actor is being picked up
		OnPickUp.Broadcast(Character);

		// Unregister from the Overlap Event so it is no longer triggered
		OnComponentBeginOverlap.RemoveAll(this);
	}
}
