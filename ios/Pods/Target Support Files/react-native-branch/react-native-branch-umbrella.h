#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "RNBranch/BranchContentMetadata+RNBranch.h"
#import "RNBranch/BranchEvent+RNBranch.h"
#import "RNBranch/BranchLinkProperties+RNBranch.h"
#import "RNBranch/BranchUniversalObject+RNBranch.h"
#import "RNBranch/NSObject+RNBranch.h"
#import "RNBranch/RNBranch.h"
#import "RNBranch/RNBranchAgingDictionary.h"
#import "RNBranch/RNBranchAgingItem.h"
#import "RNBranch/RNBranchEventEmitter.h"
#import "RNBranch/RNBranchProperty.h"

FOUNDATION_EXPORT double RNBranchVersionNumber;
FOUNDATION_EXPORT const unsigned char RNBranchVersionString[];

