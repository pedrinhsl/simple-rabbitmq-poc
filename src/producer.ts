import amqp from 'amqplib'

const sendMessage = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost')
    const channel = await connection.createChannel()
    const queue = 'myQueue'

    await channel.assertQueue(queue, { durable: true })
    const message = { text: 'Hello, RabbitMQ!' }

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)))
    console.log('Message sent:', message)

    setTimeout(() => {
      connection.close()
    }, 500)
  } catch (error) {
    console.error('Error:', error)
  }
}

sendMessage()
