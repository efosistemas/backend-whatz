import IOredis from 'ioredis'

const redis = new IOredis({
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
    port: Number(process.env.REDIS_PORT),

});
export default redis;