#include <iostream>

using namespace std;

void swap(int * dataArray, int currentIndex, int nextIndex) {
    
    int temp = dataArray[currentIndex];
    dataArray[currentIndex] = dataArray[nextIndex];
    dataArray[nextIndex] = temp;
}

void displayDataArrayWithCurrent(int * dataArray, int size, int current) {
    
    cout << endl;
    for (int i = 0; i < size; i++) {
        if (current == i) {
            cout << "[" << dataArray[i] << "] ";
        } else {
            cout << dataArray[i] << " ";
        }
    }
    cout << endl;
}

void bubbleUpLargest(int nextAvailableIndex, int * intArray, int size) {
    
    for (int inner = 0; inner < nextAvailableIndex; inner++) {
        displayDataArrayWithCurrent(intArray, size, inner);
        if (intArray[inner] > intArray[inner+1]) {
            cout << "!! " << intArray[inner] << ", " << intArray[inner+1];
            cout << "...swapping " << intArray[inner] << ", and " << intArray[inner+1];
            swap(intArray, inner, inner+1);
            displayDataArrayWithCurrent(intArray, size, inner);
        }
    }
}

void bubbleSort(int * array, int size) {
    
    cout << "Starting bubble sort" << endl;
    for ( int lastIndex = size - 1; lastIndex >= 1; lastIndex--) {
        cout << "---" << lastIndex << "---";
        bubbleUpLargest(lastIndex, array, size);
    }
}

int main(int argc, const char * argv[]) {
    
    int unsorted [] = {6, 3, 8, 8, 9, 24, 12, 31, 2};
    bubbleSort(unsorted, sizeof(unsorted)/sizeof(int));
    return 0;
}

