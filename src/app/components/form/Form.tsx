'use client'

import { useState } from 'react'

import styles from './form.module.css'

export const Form = () => {
  const [comments, setComments] = useState<Array<string>>([])
  const [newComment, setNewComment] = useState('')



  const submitComment = () => {
    setComments([
      ...comments,
      newComment
    ])

    setNewComment('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <video width="100%" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Ваш браузер не поддерживает тег видео.
        </video>
      </div>
      <div className={styles.task}>
        <h2>Задание:</h2>
        <p>Посмотрите видео и ответьте на вопросы ниже:</p>
        <ul>
            <li>Каково главное сообщение видео?</li>
            <li>Что вам больше всего запомнилось?</li>
        </ul>
      </div>
      <div className={styles.comments}>
        <h2>Комментарии:</h2>
        <textarea rows={4} cols={50} placeholder="Введите ваш ответ" value={newComment} onChange={e => setNewComment(e.target.value)} /><br/>
        <button onClick={submitComment}>Отправить</button>
        {comments.map((comment, index) => (
          <p key={index}><strong>Вы:</strong> {comment}</p>
        ))}
      </div> 
      <div className={styles.banner}>
        Оставайтесь с нами!
      </div>
    </div>
  )
}