'use strict'

const IPFS = require('ipfs')

const randomPort = (min, max) => {
  return Math.floor(Math.random() * max) + min
}

const ipfs = new IPFS({
  init: true,
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        `/ip4/0.0.0.0/tcp/${randomPort(1000, 60000)}`,
        `/ip4/127.0.0.1/tcp/${randomPort(1000, 60000)}/ws`
      ],
      API: `/ip4/127.0.0.1/tcp/8000`,
      Gateway: `/ip4/127.0.0.1/tcp/8001`
    }
  }
})

const topic = 'my-super-fun-topic'

ipfs.on('ready', async () => {
  const us = await ipfs.id()

  try {
    await ipfs.pubsub.subscribe(topic, ({from, data}) => {
      if (from === us.id) {
        return
      }

      console.info('Received', from, 'at', new Date().toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        hour12: false
      }))
    })
  } catch (error) {
    console.error(error)
  }

  console.info(`Subscribed to ${topic}`)
})
