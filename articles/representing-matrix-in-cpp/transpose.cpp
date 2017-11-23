#include <vector>

template<typename T, size_t R, size_t C>
class matrix {
    T* data;
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

constexpr int rows = 512, cols = 512;

static void Vector(benchmark::State& state) {
  using namespace std;
  vector<vector<int>> mat1(rows, vector<int>(cols));
  vector<vector<int>> mat2(cols, vector<int>(rows));
  for (auto _ : state) {
    for(int i=0; i<cols; i++)
      for(int j=0; j<rows; j++)
        mat2[i][j] = mat1[j][i];
    benchmark::DoNotOptimize(mat2);
  }
}
BENCHMARK(Vector);

static void C_style(benchmark::State& state) {
  int* mat1 = new int[rows*cols];
  int* mat2 = new int[rows*cols];
  for (auto _ : state) {
    for(int i=0; i<cols; i++)
      for(int j=0; j<rows; j++)
        mat2[i*rows+j] = mat1[j*cols+i];
    benchmark::DoNotOptimize(mat2);
  }
  delete [] mat1;
  delete [] mat2;
}
BENCHMARK(C_style);

static void Class(benchmark::State& state) {
  matrix<int, rows, cols> mat1;
  matrix<int, rows, cols> mat2;
  for (auto _ : state) {
    for(int i=0; i<cols; i++)
      for(int j=0; j<rows; j++)
        mat2[i][j] = mat1[j][i];
    benchmark::DoNotOptimize(mat2);
  }
}
BENCHMARK(Class);