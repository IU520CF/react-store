// // 配置axios

// // 导入
// import _axios from "axios";



// const instance = _axios.create({
//     baseURL: 'http://localhost:3003',
//     timeout:1000, //延迟
// });

// // 导出
// export default instance;




// 配置axios

// 导入axios
import _axios from "axios";

const axios = baseURL => {
    const instance = _axios.create({
        // 如果传入baseURL就使用传入的，没传就使用默认的
        baseURL: baseURL || 'http://localhost:3003',
        timeout:1000, //请求超时时间
    });

    return instance;
}

export {axios}

// 导出
export default axios();