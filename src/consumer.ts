import amqp from 'amqplib'

const receiveMessage = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost')
    const channel = await connection.createChannel()
    const queue = 'myQueue'

    await channel.assertQueue(queue, { durable: true })

    console.log('Waiting for messages in queue:', queue)
    channel.consume(queue, (msg) => {
      if (msg !== null) {
        const content = JSON.parse(msg.content.toString())
        console.log('Received:', content)
        channel.ack(msg)
      }
    })
  } catch (error) {
    console.error('Error:', error)
  }
}

receiveMessage()
