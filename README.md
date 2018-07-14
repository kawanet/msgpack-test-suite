# a dataset for testing msgpack library

This repository contains a series of pairs of raw values and msgpack binary representations encoded like below:

```yaml
- number: 0
  msgpack:
    - "00"                          # 0 ... 127
    - "cc-00"                       # unsigned int8
    - "cd-00-00"                    # unsigned int16
    - "ce-00-00-00-00"              # unsigned int32
    - "cf-00-00-00-00-00-00-00-00"  # unsigned int64
    - "d0-00"                       # signed int8
    - "d1-00-00"                    # signed int16
    - "d2-00-00-00-00"              # signed int32
    - "d3-00-00-00-00-00-00-00-00"  # signed int64
    - "ca-00-00-00-00"              # float
    - "cb-00-00-00-00-00-00-00-00"  # double

- string: "a"
  msgpack:
    - "a1-61"
    - "d9-01-61"
    - "da-00-01-61"
    - "db-00-00-00-01-61"
```

See [src folder](https://github.com/kawanet/msgpack-test-suite/tree/master/src) for all of examination patterns.

Prebuilt JSON file [msgpack-test-suite.json](https://rawgit.com/kawanet/msgpack-test-suite/master/dist/msgpack-test-suite.json) is also available for convenience.

### Test Driver Implementation

- [https://github.com/kawanet/msgpack-test-js](https://github.com/kawanet/msgpack-test-js)

### Msgpack Spec

- [https://github.com/msgpack/msgpack/blob/master/spec.md](https://github.com/msgpack/msgpack/blob/master/spec.md)

### GitHub

- [https://github.com/kawanet/msgpack-test-suite](https://github.com/kawanet/msgpack-test-suite)

### The MIT License (MIT)

Copyright (c) 2017-2018 Yusuke Kawasaki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
