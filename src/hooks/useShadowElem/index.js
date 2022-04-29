import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'
import styles from './styles.module.css'

export const useShadowElem = (Tag, attrs, children) => {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  })
  const [win, setWin]       = useState({
    w:       0,
    h:       0,
    centerX: 0,
    centerY: 0,
  })
  const [shadow, setShadow] = useState({
    x: 0,
    y: 0,
  })

  const trackCursor = useCallback((e) => {
    setCursor({
      x: e.pageX,
      y: e.pageY,
    })
  }, [])

  useEffect(() => {
    setWin({
      w:       window.innerWidth,
      h:       window.innerHeight,
      centerX: window.innerWidth / 2,
      centerY: window.innerHeight / 2,
    })

    document.addEventListener('mousemove', trackCursor)

    return () => document.removeEventListener('mousemove', trackCursor)
  }, [])


  useEffect(() => {
    const offX    = cursor.x - win.centerX
    const offY    = cursor.y - win.centerY
    const shadowX = -Math.round(offX / 50)
    const shadowY = -Math.round(offY / 50)

    setShadow({
      x: shadowX,
      y: shadowY,
    })
  }, [cursor.x, cursor.y, win.centerX, win.centerY, win.centerX, win.centerY])

  return [
    <Tag
      style={{
        boxShadow: `${shadow.x}${shadow.x ? 'px' : ''} ${shadow.y}${shadow.y ? 'px' : ''} 10px 10px`,
      }}
      className={styles.shadowContainer}
      {...attrs}
    >
      {children}
    </Tag>,
  ]
}
