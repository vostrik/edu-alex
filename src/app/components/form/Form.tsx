'use client'

import styles from './form.module.css'

export const Form = () => {
  const submitComment = () => {
      const textarea = commentsBlock.querySelector('textarea');
      const commentSection = document.getElementById('comment-section');
      const newComment = document.createElement('p');
      newComment.innerHTML = `<strong>Вы:</strong> ${textarea.value}`;
      commentSection.appendChild(newComment);
      textarea.value = ''; // Очистить текстовое поле
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
        <textarea rows="4" cols="50" placeholder="Введите ваш ответ "></textarea><br/>
        <button onClick={submitComment}>Отправить</button>
        <div class="comment-section" id="comment-section"></div>
      </div> 
      <div className={styles.banner}>
        Оставайтесь с нами!
      </div>
    </div>
  )
}