import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import markdown, { setMarkdownText } from '../redux/markdown'

function Input() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const example = useSelector(state => state.markdown.text)
    const handleChange = (e) => {
        setText(e.target.value)
    }
    useEffect(() => {
        dispatch(setMarkdownText(text))
    }, [dispatch, text])
    useEffect(() => {
        setText(example)
    }, [example])
  return (
    <div className='input'>
        <textarea spellCheck={false} value={text} onChange={handleChange}/>
    </div>
  )
}

export default Input