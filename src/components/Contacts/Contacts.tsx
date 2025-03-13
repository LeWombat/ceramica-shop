'use client'

import { useState } from 'react'
import { Button, InputField, Alert } from '@/components/UI'
import styles from './Contacts.module.scss'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export function Contacts() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Очищаем ошибку при изменении поля
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Введите ваш email'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Введите сообщение'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Имитация отправки данных на сервер
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Очистка формы после успешной отправки
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      
      setShowAlert(true)
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>КОНТАКТЫ</h2>
        
        <div className={styles.contactsContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Адрес</h3>
              <p>г. Москва, ул. Пушкина, д. 10</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>Телефон</h3>
              <p>+7 (495) 123-45-67</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>info@ceramica.ru</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>Режим работы</h3>
              <p>Пн-Пт: 10:00 - 20:00</p>
              <p>Сб-Вс: 11:00 - 18:00</p>
            </div>
            
            <div className={styles.socialLinks}>
              <h3>Мы в социальных сетях</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="VK">
                  <i className="fab fa-vk"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3>Напишите нам</h3>
            <form onSubmit={handleSubmit}>
              <InputField
                id="name"
                name="name"
                label="Имя*"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                fullWidth
              />
              
              <InputField
                id="email"
                name="email"
                type="email"
                label="Email*"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                fullWidth
              />
              
              <InputField
                id="phone"
                name="phone"
                type="tel"
                label="Телефон"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
              
              <div className={styles.textareaField}>
                <label htmlFor="message" className={styles.label}>
                  Сообщение*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.textareaError : ''}`}
                  rows={5}
                ></textarea>
                {errors.message && (
                  <span className={styles.errorMessage}>{errors.message}</span>
                )}
              </div>
              
              <div className={styles.formActions}>
                <Button 
                  type="submit" 
                  variant="primary" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className={styles.map}>
          <h3>Как нас найти</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3862376922134!2d37.612819415509894!3d55.75691988055717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a4c64ac5f%3A0xe7a9983301d37d0b!2z0JzQsNC90LXQtiDQnNCw0YDRgdC10LvRjNC10LfQsA!5e0!3m2!1sru!2sru!4v1647252034656!5m2!1sru!2sru" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Карта проезда"
          ></iframe>
        </div>
      </div>
      
      {showAlert && (
        <Alert 
          type="success" 
          message="Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время."
          onClose={() => setShowAlert(false)} 
        />
      )}
    </section>
  )
} 