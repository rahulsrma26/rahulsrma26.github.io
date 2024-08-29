---
slug: representing-matrix-in-cpp
title: Representing Matrix in C++
comments: true
tags: [cpp, coding]
image: ./preview.png
description: Learn how to represent and manipulate matrices in C++ with this comprehensive guide. The article covers matrix creation, initialization, and operations using 2D arrays and dynamic memory, complete with examples and code snippets for better understanding
keywords:
  - Matrix in C++ tutorial
  - C++ 2D array matrix
  - Matrix operations C++ code
  - C++ dynamic matrix
  - Matrix programming C++ examples
  - Initialize matrix in C++
  - Matrix representation tutorial
  - C style Matrix
  - Matrix from vector of vectors
---

![Preview](./preview.png#reverse-invertable)

Usually, we access elements of a 2D array, that is saved in a continuous memory like array[row*N+column]. Which is not as readable as array\[row\]\[column\]. But a vector of vector has performance issues. This article shows an object-oriented way of representing a matrix as a C++ class without losing performance.

<!-- truncate -->

## Table of content

* [The Problem](#the-problem)
* [Matrix Class](#matrix-class)
* [Conclusion](#conclusion)

---

## The Problem

Most people, who has to deal with the matrices in C++, would be familiar with this problem.

I'm listing two of the most popular ways for representing matrix. One excels in readability while others in performance.

* First way is to use vector of vector.

```cpp
vector<vector<int>> matrix(rows, vector<int>(cols));
// do stuff
// access like matrix[y][x]
// no need to free. RAII rocks.
```

This is similar to using double pointer in C for dynamic 2D array.

```cpp
int **matrix = new int*[rows];
for(int i = 0; i < rows; i++)
    matrix[i] = new int[cols];
// do stuff
// access like matrix[y][x]
for(int i = 0; i < rows; i++)
    delete [] matrix[i];
delete [] matrix;
```

It's basically an array of arrays. Every element of the outer array points to another array of integers. That's why you can reference it two times. But, since every array is separately allocated, to access the array we must have to go to the elements of the outer array first and then inner ones. Also, there will be no guarantee that every row will be adjacent to each other in memory. They can be scattered across the heap.

* Second way is to use C style array.

```cpp
int* matrix = new int[rows*cols];
// do stuff
// access like matrix[y*cols+x]
delete [] matrix;
```

This will make a solid continuous chunk of memory in heap. So, it'll have a better access time and pattern.

### Performance

C style array access should perform better than vector style access. As vector style has to refer two times to access an element, the address of matrix (outer array) can be saved in the register but elements have to come from memory (or cache). The other problem is that at the end of a row next row could be anywhere, and the pre-fetcher can not predict the next fetch.

It's hard to measure general performance since the use case varies a lot. But to get some idea I'm considering two types of algorithms with square and rectangular matrices. All the results are compiler on GCC 7.2 with c++14 and -O3 flags on linux x86 machine.
For simplicity's sake, we have a fixed number of rows and columns but it can be easily changed to general inputs.

### Sum of all elements

Let us take an example of calculating the sum of all the elements in a matrix. Here are our two popular approaches:

```cpp
// Vector style code for a square matrix
// Similar thing can be achieved in C by int**
int Vector_sum(vector<vector<int>>& matrix, int N) {
    int sum = 0;
    for(int i = 0; i < N; i++)
        for(int j = 0; j < N; j++)
            sum += matrix[i][j];
    return sum;
}
```

```cpp
// C style code for a square matrix
int C_style_sum(int* matrix, int N) {
    int sum = 0;
    for(int i = 0; i < N; i++)
        for(int j = 0; j < N; j++)
            sum += matrix[i * N + j];
    return sum;
}
```

Results for a square matrix of size 512*512

![sum benchmark](./sum_square_1.png#invertable)
See this benchmark on [quick-bench](http://quick-bench.com/GXUG06sZDLCrGsOogF5wmd2DOFU)

Results for a rectangular matrix of size 1024*256

![sum benchmark](./sum_rectangle_1.png#invertable)
See this benchmark on [quick-bench](http://quick-bench.com/ekNZpPxwiw4wYtqOV51vPF8CXUo)

As you can see the difference is not much. I can live with that for most of the programs. However, transpose yields a completely different story.

### Transpose of all elements

Let us also take an example of transposing a matrix. Which will have a completely different access pattern then sum. Here are our two popular approaches:

```cpp
// Vector style code for a square matrix
// Similar thing can be achieved in C by int**
using namespace Matrix = vector<vector<int>>;
int Vector_transpose(Matrix& matrix1, Matrix& matrix2, int N) {
    int sum = 0;
    for(int i = 0; i < N; i++)
        for(int j = 0; j < N; j++)
            matrix[i][j] = matrix[j][i];
    return sum;
}
```

```cpp
// C style code for a square matrix
int C_style_transpose(int* matrix1, int* matrix2, int N) {
    int sum = 0;
    for(int i = 0; i < N; i++)
        for(int j = 0; j < N; j++)
            matrix2[i * N + j] = matrix1[j * N + i];
    return sum;
}
```

Results for a square matrix of size 512*512

![sum benchmark](./transpose_square_1.png#invertable)
See this benchmark on [quick-bench](http://quick-bench.com/0DVlD6PAcBQvMmfnjLlJpcSHcls)

Results for a rectangular matrix of size 1024*256

![sum benchmark](./transpose_rectangle_1.png#invertable)
See this benchmark on [quick-bench](http://quick-bench.com/IyZq2RwP_RtZJpC4B8iwTSTSRwI)

---

## Matrix Class

We can write a custom template class that will allow us to access elements like vector. To achieve we need to overload the brackets operator.

```cpp
// e.g. a matrix of 5 rows and 3 cols
// matrix<int, 5, 3> x;
// can be accessed like x[row][col]

template<typename T, size_t R, size_t C>
class matrix {
    T* data; // can be changed to unique_ptr in C++1z
public:
    matrix() : data(new T[R*C]) {}

    ~matrix(){ delete [] data; }

    inline T* operator[](int row) {
        return &data[row * C];
    }

    inline const T* operator[](int row) const {
        return &data[row * C];
    }
};

```

Almost all the compilers today can optimize away the referencing and dereferencing of the same array. The assembly code generated by it is virtually the same as the C style version.

So, how well it performs.

### Sum of all elements

Results for a square matrix of size 512*512

![sum benchmark](./sum_square_2.png#invertable)
See this benchmark on [quick-bench](http://quick-bench.com/UODm6ylUQGqDCGbdxMIUvpqHrcA)

Results for a rectangular matrix of size 1024*256
![sum benchmark](./sum_rectangle_2.png#invertable)
See this benchmark on [quick-bench](http://quick-bench.com/-rGgWT2v0CZsUNbOtoTOCs9ybiE)

Separate code can be found [here](./sum.cpp).

### Transpose of all elements

Results for a square matrix of size 512*512

![sum benchmark](./transpose_square_2.png#invertable)
See this benchmark on [quick-bench](http://quick-bench.com/VxtU_lR77Fjtm-vo9Vs8CmMDQl4)

Results for a rectangular matrix of size 1024*256

![sum benchmark](./transpose_rectangle_2.png#invertable)
See this benchmark on [quick-bench](http://quick-bench.com/PXQl8uW3Dk1R_pBelXFlFCMRxEY)

---

## Conclusion

In conclusion, it is a good representation of 2D matrices. However, it is hard to the extent the same logic to 3D matrices.

Separate code can be found [here](./transpose.cpp).
