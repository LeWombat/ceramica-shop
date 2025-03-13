'use client'

import { useState, ReactNode } from 'react'
import styles from './Accordion.module.scss'

interface AccordionItemProps {
  title: string
  children: ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

export function AccordionItem({ title, children, isOpen = false, onToggle }: AccordionItemProps) {
  return (
    <div className={styles.accordionItem}>
      <button 
        className={`${styles.accordionTitle} ${isOpen ? styles.open : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {title}
        <span className={styles.accordionIcon}></span>
      </button>
      <div 
        className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.accordionBody}>
          {children}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: {
    title: string
    content: ReactNode
  }[]
  allowMultiple?: boolean
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  
  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };
  
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
} 