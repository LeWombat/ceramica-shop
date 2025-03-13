"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/UI'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Checkout.module.scss'

// Импорт иконок
const CreditCardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 10H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CashIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8.5V15.5C2 15.5 2 17.5 9 17.5C16 17.5 16 15.5 16 15.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 11.5V18.5C16 18.5 16 20.5 9 20.5C2 20.5 2 18.5 2 18.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 14.5C16 14.5 16 12.5 16 12.5C16 12.5 16 10.5 9 10.5C2 10.5 2 12.5 2 12.5C2 12.5 2 14.5 9 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 8C16 8 16 6 16 6C16 6 16 4 9 4C2 4 2 6 2 6C2 6 2 8 9 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DeliveryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 16V6C16 4.89543 15.1046 4 14 4H3C1.89543 4 1 4.89543 1 6V16C1 17.1046 1.89543 18 3 18H14C15.1046 18 16 17.1046 16 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8H19L23 12V16C23 17.1046 22.1046 18 21 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 22C8.65685 22 10 20.6569 10 19C10 17.3431 8.65685 16 7 16C5.34315 16 4 17.3431 4 19C4 20.6569 5.34315 22 7 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 22C21.6569 22 23 20.6569 23 19C23 17.3431 21.6569 16 20 16C18.3431 16 17 17.3431 17 19C17 20.6569 18.3431 22 20 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PickupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 11.5C13.6569 11.5 15 10.1569 15 8.5C15 6.84315 13.6569 5.5 12 5.5C10.3431 5.5 9 6.84315 9 8.5C9 10.1569 10.3431 11.5 12 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C12 22 20 16.5 20 9.5C20 5.08172 16.4183 1.5 12 1.5C7.58172 1.5 4 5.08172 4 9.5C4 16.5 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const formAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const sectionAnimation = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  }
}

interface CheckoutFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  paymentMethod: 'card' | 'cash'
  deliveryMethod: 'courier' | 'pickup'
}

interface CheckoutProps {
  onSubmitStart?: () => void
}

const initialFormData: CheckoutFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
  paymentMethod: 'card',
  deliveryMethod: 'courier',
}

export function Checkout({ onSubmitStart }: CheckoutProps = {}) {
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStep, setFormStep] = useState(1)
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({})
  const router = useRouter()
  const { clearCart, totalPrice } = useCart()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Очистить ошибку при изменении поля
    if (errors[name as keyof CheckoutFormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target
    setTouchedFields(prev => ({ ...prev, [name]: true }))
    
    // Валидируем поле при потере фокуса
    validateField(name as keyof CheckoutFormData)
  }

  const validateField = (fieldName: keyof CheckoutFormData): boolean => {
    let isValid = true
    const newErrors = { ...errors }
    
    switch(fieldName) {
      case 'firstName':
        if (!formData.firstName.trim()) {
          newErrors.firstName = 'Имя обязательно'
          isValid = false
        } else {
          delete newErrors.firstName
        }
        break
        
      case 'lastName':
        if (!formData.lastName.trim()) {
          newErrors.lastName = 'Фамилия обязательна'
          isValid = false
        } else {
          delete newErrors.lastName
        }
        break
        
      case 'email':
        if (!formData.email.trim()) {
          newErrors.email = 'Email обязателен'
          isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Неверный формат email'
          isValid = false
        } else {
          delete newErrors.email
        }
        break
        
      case 'phone':
        if (!formData.phone.trim()) {
          newErrors.phone = 'Телефон обязателен'
          isValid = false
        } else {
          // Удаляем все нецифровые символы для проверки
          const cleanPhone = formData.phone.replace(/\D/g, '');
          
          // Проверяем длину и формат российского номера
          if (cleanPhone.length !== 11 || !['7', '8'].includes(cleanPhone[0])) {
            newErrors.phone = 'Неверный формат телефона. Введите номер в формате +7 (XXX) XXX-XX-XX'
            isValid = false
          } else {
            delete newErrors.phone
          }
        }
        break
        
      case 'address':
        if (formData.deliveryMethod === 'courier' && !formData.address.trim()) {
          newErrors.address = 'Адрес обязателен'
          isValid = false
        } else {
          delete newErrors.address
        }
        break
        
      case 'city':
        if (formData.deliveryMethod === 'courier' && !formData.city.trim()) {
          newErrors.city = 'Город обязателен'
          isValid = false
        } else {
          delete newErrors.city
        }
        break
        
      case 'postalCode':
        if (formData.deliveryMethod === 'courier' && !formData.postalCode.trim()) {
          newErrors.postalCode = 'Почтовый индекс обязателен'
          isValid = false
        } else {
          delete newErrors.postalCode
        }
        break
    }
    
    setErrors(newErrors)
    return isValid
  }

  const validateStepOne = (): boolean => {
    const fieldsToValidate: (keyof CheckoutFormData)[] = ['firstName', 'lastName', 'email', 'phone']
    let isValid = true
    
    fieldsToValidate.forEach(field => {
      // Помечаем поля как "тронутые"
      setTouchedFields(prev => ({ ...prev, [field]: true }))
      
      if (!validateField(field)) {
        isValid = false
      }
    })
    
    return isValid
  }

  const validateStepTwo = (): boolean => {
    const fieldsToValidate: (keyof CheckoutFormData)[] = ['deliveryMethod']
    
    if (formData.deliveryMethod === 'courier') {
      fieldsToValidate.push('address', 'city', 'postalCode')
    }
    
    let isValid = true
    
    fieldsToValidate.forEach(field => {
      // Помечаем поля как "тронутые"
      setTouchedFields(prev => ({ ...prev, [field]: true }))
      
      if (!validateField(field)) {
        isValid = false
      }
    })
    
    return isValid
  }

  const handleNextStep = () => {
    if (formStep === 1 && validateStepOne()) {
      setFormStep(2)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (formStep === 2 && validateStepTwo()) {
      setFormStep(3)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Проверяем все поля формы перед отправкой
    const fieldsToValidate: (keyof CheckoutFormData)[] = [
      'firstName', 'lastName', 'email', 'phone', 'paymentMethod'
    ]
    
    if (formData.deliveryMethod === 'courier') {
      fieldsToValidate.push('address', 'city', 'postalCode')
    }
    
    let isValid = true
    fieldsToValidate.forEach(field => {
      if (!validateField(field)) {
        isValid = false
      }
    })
    
    if (!isValid) {
      return
    }
    
    setIsSubmitting(true)
    
    // Вызываем колбэк при начале отправки, если он определен
    if (onSubmitStart) {
      onSubmitStart();
    }
    
    try {
      // Здесь можно добавить отправку данных формы на сервер
      console.log('Отправка заказа:', formData)
      
      // Имитация задержки при отправке заказа
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Очистка корзины после успешного оформления заказа
      clearCart()
      
      // Перенаправление на страницу успешного оформления заказа
      router.push('/order-success')
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error)
      alert('Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Форматирование номера телефона при вводе
  const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    let value = input.value.replace(/\D/g, '')
    
    // Ограничиваем длину до 11 цифр (российский формат)
    if (value.length > 11) {
      value = value.slice(0, 11)
    }
    
    // Преобразуем номер к формату +7
    if (value.length > 0) {
      if (value[0] === '7') {
        value = `+7${value.substring(1)}`
      } else if (value[0] === '8') {
        value = `+7${value.substring(1)}`
      } else if (value.length === 10 && !value.startsWith('9')) {
        // Если введено 10 цифр (без кода страны), добавляем +7
        value = `+7${value}`
      } else if (!value.startsWith('+')) {
        value = `+7${value}`
      }
    }
    
    // Форматирование номера в виде +7 (XXX) XXX-XX-XX
    if (value.length > 1) {
      let formattedValue = value.substring(0, 2)
      
      if (value.length > 2) {
        formattedValue += ' (' + value.substring(2, Math.min(5, value.length))
        
        if (value.length > 5) {
          formattedValue += ') ' + value.substring(5, Math.min(8, value.length))
          
          if (value.length > 8) {
            formattedValue += '-' + value.substring(8, Math.min(10, value.length))
            
            if (value.length > 10) {
              formattedValue += '-' + value.substring(10, Math.min(12, value.length))
            }
          }
        }
      }
      
      value = formattedValue
    }
    
    setFormData({ ...formData, phone: value })
    
    // Проверяем валидность после форматирования
    if (touchedFields['phone']) {
      validateField('phone')
    }
  }

  return (
    <motion.div 
      className={styles.checkoutContainer}
      initial="hidden"
      animate="visible"
      variants={formAnimation}
    >
      <h1 className={styles.checkoutTitle}>Оформление заказа</h1>
      
      <div className={styles.checkoutSummary}>
        <div className={styles.totalAmount}>
          <span>Итого:</span>
          <span>{totalPrice.toLocaleString()} ₽</span>
        </div>
      </div>
      
      <form className={styles.checkoutForm} onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {formStep === 1 && (
            <motion.div 
              key="step1"
              className={styles.formSection}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionAnimation}
            >
              <h2>Личная информация</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="firstName">Имя*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={touchedFields['firstName'] && errors.firstName ? styles.inputError : ''}
                  placeholder="Александр"
                />
                {touchedFields['firstName'] && errors.firstName && 
                  <span className={styles.errorMessage}>{errors.firstName}</span>
                }
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Фамилия*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={touchedFields['lastName'] && errors.lastName ? styles.inputError : ''}
                  placeholder="Иванов"
                />
                {touchedFields['lastName'] && errors.lastName && 
                  <span className={styles.errorMessage}>{errors.lastName}</span>
                }
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={touchedFields['email'] && errors.email ? styles.inputError : ''}
                  placeholder="example@mail.ru"
                />
                {touchedFields['email'] && errors.email && 
                  <span className={styles.errorMessage}>{errors.email}</span>
                }
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">Телефон*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={formatPhoneNumber}
                  onBlur={handleBlur}
                  placeholder="+7 (___) ___-__-__"
                  className={touchedFields['phone'] && errors.phone ? styles.inputError : ''}
                />
                {touchedFields['phone'] && errors.phone && 
                  <span className={styles.errorMessage}>{errors.phone}</span>
                }
              </div>
              
              <div className={styles.formActions}>
                <Button 
                  type="button" 
                  variant="primary" 
                  fullWidth 
                  onClick={handleNextStep}
                >
                  Продолжить
                </Button>
              </div>
            </motion.div>
          )}
          
          {formStep === 2 && (
            <motion.div 
              key="step2"
              className={styles.formSection}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionAnimation}
            >
              <h2>Способ доставки</h2>
              
              <div className={styles.radioGroup}>
                <div className={`${styles.radioOption} ${formData.deliveryMethod === 'courier' ? styles.selectedOption : ''}`}>
                  <input
                    type="radio"
                    id="courier"
                    name="deliveryMethod"
                    value="courier"
                    checked={formData.deliveryMethod === 'courier'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="courier">
                    <span className={styles.radioIcon}><DeliveryIcon /></span>
                    <span>Доставка курьером</span>
                  </label>
                </div>
                
                <div className={`${styles.radioOption} ${formData.deliveryMethod === 'pickup' ? styles.selectedOption : ''}`}>
                  <input
                    type="radio"
                    id="pickup"
                    name="deliveryMethod"
                    value="pickup"
                    checked={formData.deliveryMethod === 'pickup'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="pickup">
                    <span className={styles.radioIcon}><PickupIcon /></span>
                    <span>Самовывоз</span>
                  </label>
                </div>
              </div>
              
              <AnimatePresence>
                {formData.deliveryMethod === 'courier' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.formGroup}>
                      <label htmlFor="address">Адрес*</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={touchedFields['address'] && errors.address ? styles.inputError : ''}
                        placeholder="ул. Пушкина, д. 10, кв. 5"
                      />
                      {touchedFields['address'] && errors.address && 
                        <span className={styles.errorMessage}>{errors.address}</span>
                      }
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="city">Город*</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={touchedFields['city'] && errors.city ? styles.inputError : ''}
                        placeholder="Москва"
                      />
                      {touchedFields['city'] && errors.city && 
                        <span className={styles.errorMessage}>{errors.city}</span>
                      }
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="postalCode">Почтовый индекс*</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={touchedFields['postalCode'] && errors.postalCode ? styles.inputError : ''}
                        placeholder="101000"
                      />
                      {touchedFields['postalCode'] && errors.postalCode && 
                        <span className={styles.errorMessage}>{errors.postalCode}</span>
                      }
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className={styles.formActions}>
                <div className={styles.buttonGroup}>
                  <Button 
                    type="button" 
                    variant="secondary" 
                    onClick={handlePrevStep}
                    className={styles.backButton}
                  >
                    Назад
                  </Button>
                  <Button 
                    type="button" 
                    variant="primary" 
                    onClick={handleNextStep}
                  >
                    Продолжить
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
          
          {formStep === 3 && (
            <motion.div 
              key="step3"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionAnimation}
            >
              <div className={styles.formSection}>
                <h2>Способ оплаты</h2>
                
                <div className={styles.radioGroup}>
                  <div className={`${styles.radioOption} ${formData.paymentMethod === 'card' ? styles.selectedOption : ''}`}>
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="card">
                      <span className={styles.radioIcon}><CreditCardIcon /></span>
                      <span>Оплата картой</span>
                    </label>
                  </div>
                  
                  <div className={`${styles.radioOption} ${formData.paymentMethod === 'cash' ? styles.selectedOption : ''}`}>
                    <input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="cash">
                      <span className={styles.radioIcon}><CashIcon /></span>
                      <span>Оплата при получении</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className={styles.formSection}>
                <h2>Подтверждение заказа</h2>
                
                <div className={styles.orderSummary}>
                  <div className={styles.summaryItem}>
                    <span>Ф.И.О.:</span>
                    <span>{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Телефон:</span>
                    <span>{formData.phone}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Email:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Доставка:</span>
                    <span>{formData.deliveryMethod === 'courier' ? 'Курьером' : 'Самовывоз'}</span>
                  </div>
                  {formData.deliveryMethod === 'courier' && (
                    <div className={styles.summaryItem}>
                      <span>Адрес:</span>
                      <span>{formData.city}, {formData.address}, {formData.postalCode}</span>
                    </div>
                  )}
                  <div className={styles.summaryItem}>
                    <span>Оплата:</span>
                    <span>{formData.paymentMethod === 'card' ? 'Картой' : 'При получении'}</span>
                  </div>
                  <div className={`${styles.summaryItem} ${styles.totalSum}`}>
                    <span>Итого:</span>
                    <span>{totalPrice.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.formActions}>
                <div className={styles.buttonGroup}>
                  <Button 
                    type="button" 
                    variant="secondary" 
                    onClick={handlePrevStep}
                    className={styles.backButton}
                  >
                    Назад
                  </Button>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Оформление...' : 'Подтвердить заказ'}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
} 