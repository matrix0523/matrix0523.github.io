export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-9a783bd6","v-727b0e32","v-9de1ed14","v-a14b9e52","v-a4b54f90","v-0393b7c6","v-01dedf27","v-002a0688","v-0315a42e","v-77c57906","v-7610a067","v-745bc7c8","v-72a6ef29","v-1b5614f0","v-7b8fd369","v-4219ea0c","v-d863285c","v-09041878","v-4b4bf4a1","v-63604361","v-1a9cf99b"]}},"star":{"/":{"path":"/star/","keys":["v-002a0688","v-9a783bd6","v-745bc7c8","v-727b0e32"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-9a783bd6","v-9de1ed14","v-a14b9e52","v-a4b54f90","v-0393b7c6","v-01dedf27","v-002a0688","v-0315a42e","v-77c57906","v-7610a067","v-745bc7c8","v-72a6ef29","v-727b0e32"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

