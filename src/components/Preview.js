import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector} from "react-redux"

function Preview() {
    const text = useSelector(state => state.markdown.text)
  return (
    <section className='output'>
        <ReactMarkdown>{text}</ReactMarkdown>
    </section>
  )
}

export default Preview