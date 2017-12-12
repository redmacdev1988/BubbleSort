# BubbleSort
JS implementation of bubble sort with steps logged to console

Worst and Average Case Time Complexity: O(n*n).
Worst case occurs when array is reverse sorted.

Auxiliary Space: O(1)

Boundary Cases: Bubble sort takes minimum time (Order of n) when elements are already sorted.

Sorting In Place: Yes

Stable: Yes

(Stable sorting algorithms maintain the relative order of records with equal keys (i.e. values). That is, a sorting algorithm is stable if whenever there are two records R and S with the same key and with R appearing before S in the original list, R will appear before S in the sorted list.)

## Bubbling up the largest number

From the start, we loop through the array and check adjacent elements. 
if data[i] > data[i+1], then we swap the larger element to the right.

That way, we slowly "bubble up" the largest element to the last spot.

-- Start --
[ 8, 4, 2, 10 ]
-----------------------------
PASS 3
[ 8, 4, 2, 10 ]
-----------------------------
8 > 4, BAD
[ 8, 4, 2, 10 ]
-----------------------------
swap
[ 4, 8, 2, 10 ]
-----------------------------
8 > 2, BAD
[ 4, 8, 2, 10 ]
-----------------------------
swap
[ 4, 2, 8, 10 ]
-----------------------------
8 < 10, OK
[ 4, 2, 8, 10 ]
-----------------------------
PASS 2
[ 4, 2, 8, 10 ]
-----------------------------
4 > 2, BAD
[ 4, 2, 8, 10 ]
-----------------------------
swap
[ 2, 4, 8, 10 ]
-----------------------------
4 < 8, OK
[ 2, 4, 8, 10 ]
-----------------------------
PASS 1
[ 2, 4, 8, 10 ]
-----------------------------
2 < 4, OK
[ 2, 4, 8, 10 ]


-- SORTED ARRAY --
[ 2, 4, 8, 10 ]
