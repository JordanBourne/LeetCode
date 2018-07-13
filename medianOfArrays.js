var findMedianSortedArrays = function(nums1, nums2) {
    let n1Len = nums1.length;
    let n2Len = nums2.length;
    let nums1Start = nums2Start = 0;
    let nums1End = nums1.length;
    let nums2End = nums2.length;
    let nums1Index = Math.floor((nums1Start + nums1End) / 2);
    let nums2Index = Math.floor((nums2Start + nums2End) / 2);
    let n = nums1[nums1Index];
    let m = nums2[nums2Index];
    let l = Math.ceil((nums1.length + nums2.length) / 2) - 1;
    let nL = 0;
    let mR = 0;
    let n2 = 0;

    while ((nL !== l || mR !== l) && n2 < 10) {
        if (n < m) {
            if (nL < l) {
                nums1Start = nums1Index;
                nL = nums1Index;
                if (nums1Index < n1Len - 1) {
                    nums1Index = Math.floor((nums1Start + nums1End) / 2);
                    n = nums1[nums1Index];
                } else if (mR < l) {
                    nums2End = nums2Index;
                    mR = nums2.length - nums2Index;
                    nums2Index = Math.floor((nums2Start + nums2End) / 2);
                    m = nums2[nums2Index];
                } else {
                    n = nums2[Math.ceil((n1Len + n2Len - 2) / 2) - n1Len];
                    m = nums2[n2Len - 1 - Math.ceil((n1Len + n2Len - 2) / 2)];
                    break;
                }
            } else {
                nums2End = nums2Index;
                mR = nums2.length - nums2Index;
                nums2Index = Math.floor((nums2Start + nums2End) / 2);
                m = nums2[nums2Index];
            }
        }

        if (n > m) {
            if (mR < l) {
                nums2Start = nums2Index;
                mR = nums2Index;
                if (nums2Index !== n2Len - 1) {
                    nums2Index = Math.floor((nums2Start + nums2End) / 2);
                    n = nums2[nums1Index];
                } else if (nL < l) {
                    nums1End = nums1Index;
                    nL = nums1.length - nums1Index;
                    nums1Index = Math.floor((nums1Start + nums1End) / 2);
                    m = nums1[nums1Index];
                } else {
                    n = nums1[Math.ceil((n2Len + n1Len - 2) / 2) - n2Len];
                    m = nums1[n1Len - 1 - Math.ceil((n2Len + n1Len - 2) / 2)];
                    break;
                }
            } else {
                nums1End = nums1Index;
                nL = nums1.length - nums1Index;
                nums1Index = Math.floor((nums1Start + nums1End) / 2);
                m = nums1[nums2Index];
            }
        }

        if (n === m) {
            if (nL < l) {
                if (nums1Index < n1Len - 1) {
                    nums1Start = nums1Index;
                    nL = nums1Index;
                    nums1Index = Math.floor((nums1Start + nums1End) / 2);
                    n = nums1[nums1Index];
                } else {
                    nums1Start = 0;
                    nums1End = l - nL;
                    nums1Index = Math.floor((nums1Start + nums1End) / 2);
                    n = nums2[nums1Index];
                    nL = n1Len + nums1Index;
                }
            }

            if (mR < l) {
                if (nums2Index < n2Len - 1) {
                    nums2Start = nums2Index;
                    mR = nums2Index;
                    nums2Index = Math.floor((nums2Start + nums2End) / 2);
                    n = nums2[nums2Index];
                } else {
                    nums2Start = 0;
                    nums2End = l - mR;
                    nums2Index = Math.floor((nums2Start + nums2End) / 2);
                    n = nums1[nums2Index];
                    mR = n2Len + nums2Index;
                }
            }
        }
        n2++;
    }

    return (n + m) / 2;
};
// 0 0 0 2 4 5 6 8 10
// console.log(findMedianSortedArrays([0, 2], [1,1,3,3]));

// //TESTS
var arr1 = [1,2,3,4];
var arr2 = [2,3];
var arr3 = [6,7,8];
var arr4 = [1,4,6,7,8,9,123];
var arr5 = [1000,2000,3000];
var arr6 = [1,3,5,7,9];
var arr7 = [0,2,4,4,8];
console.log(findMedianSortedArrays(arr1, arr2), 2.5, findMedianSortedArrays(arr1, arr2) === 2.5);
console.log(findMedianSortedArrays(arr2, arr3), 6, findMedianSortedArrays(arr2, arr3) === 6);
console.log(findMedianSortedArrays(arr3, arr5), 504, findMedianSortedArrays(arr3, arr5) === 504);
console.log(findMedianSortedArrays(arr4, arr5), 8.5, findMedianSortedArrays(arr4, arr5) === 8.5);
console.log(findMedianSortedArrays(arr5, []), 2000, findMedianSortedArrays(arr5, []) === 2000);
console.log(findMedianSortedArrays(arr6, arr7), 4, findMedianSortedArrays(arr6, arr7) === 4);
