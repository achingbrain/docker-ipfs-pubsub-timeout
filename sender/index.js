'use strict'

const IPFS = require('ipfs')

const ipfs = new IPFS({
  init: true,
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        `/ip4/0.0.0.0/tcp/9002`,
        `/ip4/127.0.0.1/tcp/9003/ws`
      ],
      API: `/ip4/127.0.0.1/tcp/8000`,
      Gateway: `/ip4/127.0.0.1/tcp/8001`
    }
  }
})

const topic = 'my-super-fun-topic'

ipfs.on('ready', async () => {
  let size = 4194175
  let increment = 1

  setInterval(async () => {
    // every now and again, send a message to the topic
    try {
      size += increment

      console.info(`Publishing message length ${size}`)

      const data = Buffer.alloc(size)

      await ipfs.pubsub.publish(topic, data)
    } catch (error) {
      console.error(error)
    }
  }, 1000)
})
