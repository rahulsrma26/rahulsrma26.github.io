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
  vector<vector<int>> mat(rows, vector<int>(cols));
  for (auto _ : state) {
    int sum = 0;
    for(int i=0; i<rows; i++)
      for(int j=0; j<cols; j++)
        sum += mat[i][j];
    benchmark::DoNotOptimize(sum);
  }
}
BENCHMARK(Vector);

static void C_style(benchmark::State& state) {
  int* mat = new int[rows*cols];
  for (auto _ : state) {
    int sum = 0;
    for(int i=0; i<rows; i++)
      for(int j=0; j<cols; j++)
        sum += mat[i*cols+j];
    benchmark::DoNotOptimize(sum);
  }
  delete [] mat;
}
BENCHMARK(C_style);

static void Class(benchmark::State& state) {
  matrix<int, rows, cols> mat;
  for (auto _ : state) {
    int sum = 0;
    for(int i=0; i<rows; i++)
      for(int j=0; j<cols; j++)
        sum += mat[i][j];
    benchmark::DoNotOptimize(sum);
  }
}
BENCHMARK(Class);